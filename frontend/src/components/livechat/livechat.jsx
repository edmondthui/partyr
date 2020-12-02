import React from 'react'
import io from 'socket.io-client'
import './socket.css'
import config from './config'

class Party extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      chat: [],
      message: "",
      username: ""
    }
    this.chat = null;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    this.socket.on('init', (msg) => {
      let msgReversed = msg.reverse();
      this.setState({
        chat: [...this.state.chat, ...msgReversed]
      })
    })

    this.socket.on('new-msg', (msg) => {
      this.setState({
        chat: [...this.state.chat, msg]
      })
    })
  }

  update(e) {
    this.setState({
      message: e.currentTarget.value
    })

    this.setState({
      username: this.props.user.username 
    }) 
  }

  handleSubmit(e) {
    e.preventDefault();

    this.socket.emit('message', {
      username: this.state.username,
      message: this.state.message
    })

    this.setState({
      chat: [...this.state.chat, {username: this.state.username, message: this.state.message}],
      username: this.props.user.username,
      message: ""
    })
  }

  scrollToBottom() {
    this.chat.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {

    let chatMessages = this.state.chat.map((msg, idx) => {
      debugger
      return (
        //if statement to have your messages send on the right side of the chat and
        // other people's messages on the left.
        this.props.user.username === msg.username ? (
        <li className="self">
          <div key={idx} className="self">
            <p className="self">{msg.username}</p>
            <p className="self">{msg.message}</p>
          </div>
        </li>
        ) : (
        <li className="other">
          <div key={idx} className="other">
            <p className="other">{msg.username}</p>
            <p className="other">{msg.message}</p>
          </div>
        </li>
        )
        // <div key={idx} className="message">
        //   <p>{msg.username}</p>
        //   <p>{msg.message}</p>
        // </div>
      );
    })
    return (    

      <div className = "chat-box-container">
        <div className="party-chat-title">
          <h1>Party Chat</h1>
        </div>
        <div className = "chat-messages">
          {chatMessages}
          <div ref={el => (this.chat = el)}></div>
        </div>
        <div className = "chat-bar">
          <input onChange={this.update} className="live-chat-input" value={this.state.message}/>
          <button onClick={this.handleSubmit} className="live-chat-submit">Submit</button>
        </div>
      </div>


    )
  }

}

export default Party
import React from 'react'
import io from 'socket.io-client'
import './livechat.css'
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
    this.props.fetchUsers();
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    this.socket.on('init', (msg) => {
      let msgReversed = msg.reverse();
      this.setState({
        chat: [...this.state.chat, ...msgReversed]
      })
    })

    this.socket.on('new-msg', (msg) => {
      if (msg.partyId === this.props.party._id) {
        this.setState({
          chat: [...this.state.chat, msg]
        })
      }
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
      message: this.state.message,
      partyId: this.props.party._id
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

  componentDidUpdate(prevProps) {
    if (prevProps.party !== this.props.party && !Array.isArray(prevProps.party)) {
      this.socket.emit('join', {
        partyId: this.props.party._id
      },
      this.setState({chat: []})
      )
    }
    this.scrollToBottom();
  }

  componentWillUnmount() {
    this.setState({
      chat: []
    })
  }


  render() {
    let chatMessages = null;
    if (this.props.users.length > 0) {
      chatMessages = this.state.chat.map((msg, idx) => {
        let color;
        this.props.users.forEach(user => {
          if (user.username === msg.username) {
            color = user.color
          }
        })
        return (
          this.props.user.username === msg.username ? (
            <li key={idx} className="self msg-item">
              <div>
                <p className="chat-username">{msg.username}</p>
                <p className="chat-msg" style={{borderColor: this.props.user.color}}>{msg.message}</p>
              </div>
            </li>
          ) : (
            <li key={idx} className="other msg-item" >
              <div>
                <p className="chat-username">{msg.username}</p>
                <p className="chat-msg" style={{borderColor: color}}>{msg.message}</p>
              </div>
            </li>
          )
        )
      })
    }

    return (    
      <div className="chat-container">
        <div className="chat-title-container">
          <h1 className="chat-title">{this.props.party.title} Chat Room</h1>
        </div>
        <div className="chat-msg-container">
          <ul className="chat-messages">
            {chatMessages}
            <div ref={el => (this.chat = el)}></div>
          </ul>
        </div>
        <form className="chat-input-container">
          <div className="left">
            <p className="prompt">Enter your message</p>
            <input
              type="text"
              onChange={this.update} 
              id="chat-input" 
              value={this.state.message}/>
          </div>
          <div className="right">
            <button onClick={this.handleSubmit} className="chat-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Party
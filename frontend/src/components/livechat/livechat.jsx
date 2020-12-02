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
    this.props.fetchUsers();
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
    if (prevProps !== this.props) {
      this.socket.emit('join', {
        partyId: this.props.party._id
      })
      this.setState({
        chat: []
      })
    }
    this.scrollToBottom();
  }


  render() {
    let chatMessages = this.state.chat.map((msg, idx) => {
      let color;
      this.props.users.forEach(user => {
        if (user.username === msg.username) {
          color = user.color
        }
      })
      return (
        this.props.user.username === msg.username ? (
        <li key={idx} className="self">
          <div>
            <p>{msg.username}</p>
            <p className="msg" style={{borderColor: this.props.user.color}}>{msg.message}</p>
          </div>
        </li>
        ) : (
          <li key={idx} className="other" >
            <div>
              <p>{msg.username}</p>
              <p className="msg" style={{borderColor: color}}>{msg.message}</p>
            </div>
          </li>
        )
      )
    })
    return (    
      <div>
        <div className = "chat-box-container">
          <div className="party-chat-title">
            <h1>Party Chat</h1>
          </div>
          <div className = "chat-messages">
            {chatMessages}
            <div ref={el => (this.chat = el)}></div>
          </div>
          <div className = "chat-bar">
          </div>
        </div>
        <form>
            <input onChange={this.update} className="live-chat-input" value={this.state.message}/>
            <button onClick={this.handleSubmit} className="live-chat-submit">Submit</button>
        </form>
      </div>


    )
  }

}

export default Party
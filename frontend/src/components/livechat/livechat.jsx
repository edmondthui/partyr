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
      username: "",
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.socket = io(config[process.env.NODE_ENV].endpoint);

    this.socket.on('init', (msg) => {
      let msgReversed = msg.reverse();
      this.setState({
        chat: [...this.state.chat, ...msgReversed]
      })
    })

    this.socket.on('push', (msg) => {
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
      username: this.props.user.username // todo add user to props
    }) 
  }

  handleSubmit(e) {
    e.preventDefault();

    this.socket.emit('message', {
      username: this.state.username,
      message: this.state.message
    })

    this.setState({
      chat: [...this.state.chat, {name: this.state.username, content: this.state.message}],
      content: "", // resets the chatbox
    })

  }


  render() {
    let chatMessages = this.state.chat.map((msg, idx) => {
      return (
        <div key={idx} className="message">
          <p>{msg.username}</p>
          <p>{msg.message}</p>
        </div>
      )
    })
    return (
      <div className = "chat-box-container">
        <div className = "chat-messages">
          {chatMessages}
        </div>
        <div className = "chat-bar">
          <input onChange={this.update}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }

}

export default Party
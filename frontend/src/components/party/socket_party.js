import React from React
import openSocket from 'socket.io-client'
const socket = openSocket("http://localhost:8000");

class Party extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      counter: []
    }
    this.sendSocketIO = this.sendSocketIO.bind(this)
  }

  componentDidMount() {

  }

  incrementCounter(index) {
    const id = this.state.counter[index]
  }

  sendSocketIO() {
    socket.emit("example message", "demo");
  }

  render() {
    return (
      <div>
        <button onClick={this.sendSocketIO}>Test Socket.io</button>
      </div>
    )
  }

}

export default Party
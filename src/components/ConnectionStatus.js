import React, {Component} from 'react'

import SocketContext from '../services/socket-context'

class ConnectionStatus extends Component {

  constructor() {
    super();

    this.state = {status: "Disconnected", connected: false};
  }

  componentDidMount() {
    this.context.on('connect', () => this.updateConnection("Connected", true));
    this.context.on('connect_timeout', () => this.updateConnection("Timed out", false));
    this.context.on('reconnect', () => this.updateConnection("Reconnected", true));
    this.context.on('reconnecting', (attempt) => this.updateConnection("Reconnecting" + '.'.repeat(attempt % 5), false));
    
    this.context.on('reconnect_failed', () => this.updateConnection("Unable to reconnect", false));
    this.context.on('disconnect', () => this.updateConnection("Disconnected", false));

    this.context.on('connect_error', (error) => {
      if (error.type === "TransportError") {
        console.log("Can't connect to server");
      } else {
        console.error(error);
      }
    });

    if (this.context.connected) {
      this.updateConnection("Connected", true);
    }
  }

  updateConnection(status, connected) {
    // Handle your bootstrap data package to set up the component.
    this.setState({status, connected});
  }

  render() {
    return (
      <div className="connection-indicator d-flex align-items-center">
        <span className="p-1 pr-2">{this.state.status}</span> <span className={"dot " + (this.state.connected ? "green" : "red")}></span>
      </div>
    );
  }
}

ConnectionStatus.contextType = SocketContext;

export default ConnectionStatus
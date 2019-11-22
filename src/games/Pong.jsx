import React from 'react'
import SocketContext from '../services/socket-context'
import ApprovalButton from '../components/ApprovalButton';

class Pong extends React.Component {

    constructor(props) {
        super(props);
        
        this.ping = this.ping.bind(this);
        this.state = {
            pong: ''
        }
    }

    componentDidMount() {
        this.context.on('game-pong', (message) => {
            this.setState({
                pong: message
            })
        })
    }
    
    ping() {
        console.log("Ping!");
        this.context.emit('game-ping', new Date());
    }

    render() {
        return (
            <div>
                <ApprovalButton title="Pong" description="Test the server with a quick ping" button="Ping" callback={this.ping} />
                <p>{this.state.pong}</p>
            </div>
        );
    } 
}

Pong.contextType = SocketContext;

export default Pong;
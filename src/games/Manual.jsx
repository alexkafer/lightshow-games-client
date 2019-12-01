import React from 'react'
import SocketContext from '../services/socket-context'

import {Button} from 'react-bootstrap'

class Manual extends React.Component {
    render() {
        return (
            <div>
                <Button onClick={() => this.context.emit('allOn')}>All On</Button>
                <Button onClick={() => this.context.emit('allOff')}>All Off</Button>

                <Button onClick={() => this.context.emit('add', Math.floor(Math.random() * 511))}>Random</Button>
            </div>
        );
    } 
}

Manual.contextType = SocketContext;

export default Manual;
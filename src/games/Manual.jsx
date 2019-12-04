import React from 'react'
import SocketContext from '../services/socket-context'

import {Navbar, Button, Container, InputGroup, FormControl} from 'react-bootstrap'
import ConnectionStatus from '../components/ConnectionStatus'

class Manual extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            channel: 0
        }
    }

    setMessage() {
        this.context.emit('text', this.state.message);
    }

    setChannelOn() {
        this.context.emit('set', {
            channel: this.state.channel,
            value: 255
        });
    }

    setChannelOff() {
        this.context.emit('set', {
            channel: this.state.channel,
            value: 0
        });
    }


    handleText(event) {
        console.log(event.target.value);
        this.setState({
            message: event.target.value
        })
    }

    handleChannel(event) {
        console.log(event.target.value);
        this.setState({
            channel: event.target.value
        })
    }

    render() {
        return (
            <>
            <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand>Manual</Navbar.Brand>
                    <ConnectionStatus />
                </Navbar>
            <Container>
                <Button className="mb-3" block onClick={() => this.context.emit('allOn')}>All On</Button>
                <Button className="mb-3" block onClick={() => this.context.emit('allOff')}>All Off</Button>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="netlight text"
                        onChange={this.handleText.bind(this)}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.setMessage.bind(this)} >Set</Button>
                    </InputGroup.Append>
                </InputGroup>

                <InputGroup>
                    <FormControl
                        placeholder="channel number"
                        onChange={this.handleChannel.bind(this)}
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={this.setChannelOn.bind(this)}>On</Button>
                    <Button variant="outline-secondary"onClick={this.setChannelOff.bind(this)} >Off</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Container>
            </>
        );
    } 
}

Manual.contextType = SocketContext;

export default Manual;
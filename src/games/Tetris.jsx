import React from 'react'
import {Navbar, Container, Row, Col, Button} from 'react-bootstrap'
import SocketContext from '../services/socket-context'

import ConnectionStatus from '../components/ConnectionStatus'

class Tetris extends React.Component {

    constructor(props) {
        super(props);
        
        this.sendUp = this.sendUp.bind(this);
        this.sendDown = this.sendDown.bind(this);
        this.sendRotate = this.sendRotate.bind(this);
    }

    componentDidMount() {}
    
    sendUp() {
        this.context.emit('up');
    }

    sendDown() {
        this.context.emit('down');
    }

    sendRotate() {
        this.context.emit('rotate');
    }

    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand>Pong</Navbar.Brand>
                        <ConnectionStatus />
                    </Navbar>
                <Container>
                    <Row>
                        <Col>
                            <Button className="p-5 mb-2" onClick={this.sendUp} size="lg"block> UP </Button>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="p-5 mt-2" onClick={this.sendDown}size="lg" block> DOWN </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="p-5 mt-2" onClick={this.sendRotate}size="lg" block> Rotate </Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    } 
} 

Pong.contextType = SocketContext;

export default Pong;
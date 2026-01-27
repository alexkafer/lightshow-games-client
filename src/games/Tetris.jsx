import React from 'react'
import {Navbar, Container, Row, Col, Button} from 'react-bootstrap'
import SocketContext from '../services/socket-context'

import ConnectionStatus from '../components/ConnectionStatus'

class Tetris extends React.Component {

    constructor(props) {
        super(props);
        
        this.sendUp = this.sendUp.bind(this);
        this.sendDown = this.sendDown.bind(this);
        this.sendLeft = this.sendLeft.bind(this);
        this.sendRight = this.sendRight.bind(this);
    }

    componentDidMount() {}
    
    sendUp() {
        this.context.emit('up');
    }

    sendDown() {
        this.context.emit('down');
    }

    sendLeft() {
        this.context.emit('left');
    }

    sendRight() {
        this.context.emit('right');
    }

    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                        <Navbar.Brand>Tetris</Navbar.Brand>
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
                            <Button className="p-5 mb-2" onClick={this.sendLeft} size="lg"block> Left </Button>
                            
                        </Col>
                        <Col>
                            <Button className="p-5 mb-2" onClick={this.sendRight} size="lg"block> Right </Button>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="p-5 mt-2" onClick={this.sendDown}size="lg" block> DOWN </Button>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    } 
} 

Tetris.contextType = SocketContext;

export default Tetris;
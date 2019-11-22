
import React, {Component} from 'react'

import SocketContext from '../services/socket-context'
import ConnectionStatus from './ConnectionStatus'
import ViewGame from './ViewGame'

import { connect } from "react-redux"
import { getGame } from "../redux/selectors"

import { Container, Button } from 'react-bootstrap'

import wandIcon from '../magic-wand.svg'
import noneIcon from '../logo.svg'

class Dashboard extends Component {

    constructor() {
        super();

        // This binding is necessary to make `this` work in the callback
        this.startGame = this.startGame.bind(this);
        this.cancelGame = this.cancelGame.bind(this);
    }

    startGame() {
        console.log("Joining game");
        this.context.emit("join");
    }

    cancelGame() {
        console.log("Cancelling Join");
        this.context.emit("cancel");
    }

    render() {
        var button;

        if (!this.context.connected) {
            button = (<Button 
                onClick={this.startGame} 
                variant="secondary" 
                size="lg" 
                disabled
                block>Disconnected</Button>
            )
        } else {
            if (this.props.placeInLine === -1) {
                button = (<Button 
                        onClick={this.startGame} 
                        variant="primary" 
                        size="lg" 
                        block>Join</Button>
                    )
            } else {
                button = (<Button 
                    onClick={this.cancelGame} 
                    variant="secondary" 
                    size="lg" 
                    block>Cancel</Button>
                )
            }
        }
       
                    

        var instructions;
        if (this.props.placeInLine === -1) {
            instructions =  "Press play to join!";
        } else if (this.props.placeInLine === 1) {
            instructions =  "You're next in line!";
        } else if (this.props.placeInLine === 2) {
            instructions =  "There is one person ahead of you.";
        } else {
            instructions =  "There are " + (this.props.placeInLine-1) + " people ahead of you.";
        }

        return (<>
            <div className="large-header">
                <ConnectionStatus />
                <ViewGame logo={this.props.currentGame === "Wand" ? wandIcon : noneIcon} />
            </div>
            <div className="dashboard-body">
                <Container>
                    <h1>{this.props.currentGame}</h1>
                    <div className="queue p-5">
                        <p>
                            {instructions}
                        </p>
                        {button}
                        </div>
                    
                </Container>
            </div>
        </>);
    }
}

Dashboard.contextType = SocketContext;

const mapStateToProps = state => {
    return getGame(state);
}

export default connect(mapStateToProps)(Dashboard);
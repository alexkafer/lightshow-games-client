import React, {Component} from 'react'
import { Navbar, Button } from 'react-bootstrap'
import SocketContext from '../services/socket-context'
import {supported, needsPermission, requestPermission, registerOrientationListener, removeOrientationListener} from '../services/deviceOrientation'

import MotionPage from '../settings/MotionPage'
import LocationPage from '../settings/LocationPage'
import NoDeviceOrientationPage from '../settings/NoDeviceOrientationPage'
import ConnectionStatus from '../components/ConnectionStatus'
import CalibratePage from '../settings/CalibratePage'

class Wand extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notSupported: false,
            motionTimeout: 0,
            needsMotion: false,
            needsPosition: true,
            needsCalibration: true,
            recordOffset: false,
            offsetAlpha: 0,
            offsetBeta: 0,
            offsetGamma: 0,
        }
        
        // this.handleMotionEvent = this.handleMotionEvent.bind(this);
        this.requestOrientationPermission = this.requestOrientationPermission.bind(this);
        this.handleOrientationEvent = this.handleOrientationEvent.bind(this);
        this.compassNeedsCalibration = this.compassNeedsCalibration.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.exitGame = this.exitGame.bind(this);
        this.recordCalibration = this.recordCalibration.bind(this);
    }

    compassNeedsCalibration(event) {
        alert('Your compass needs calibrating! Wave your device in a figure-eight motion.');
        event.preventDefault();
    }

    recordCalibration() {
        this.setState({
            needsCalibration: false,
            recordOffset: true
        });
    }

    setPosition(x, y) {
        this.context.emit('position', {x, y});
        this.setState({needsPosition: false});
    }

    handleOrientationEvent(event) {
        if (this.state.motionTimeout !== 0) {
            clearTimeout(this.state.motionTimeout);
        }

        if (this.state.recordOffset) {
            this.setState({
                recordOffset: false,
                offsetAlpha: event.alpha,
                offsetBeta: event.beta,
                offsetGamma: event.gamma
            })
        } 

        var payload = {
            alpha: event.alpha - this.state.offsetAlpha,
            beta: event.beta  - this.state.offsetBeta,
            gamma: event.gamma - this.state.offsetGamma,
            compass: event.webkitCompassHeading,
            compass_accuracy: event.webkitCompassAccuracy
        };

        this.context.emit('odometry', payload);
    }

    requestOrientationPermission() {
        console.log("Requesting permission.");
        requestPermission().then(response => {
            console.log(response);
            if (response === 'granted') {
                registerOrientationListener(this.handleOrientationEvent, this.compassNeedsCalibration);
                this.setState({needsMotion: false})
            } else if (response === 'denied') {
                this.setState({notSupported: true})
            }
        }).catch(console.error)
    }

    exitGame() {
        console.log("Exiting");
        this.context.emit('end');
    }
    
    // handleMotionEvent(event) {
    //     var payload = {
    //         x: event.accelerationIncludingGravity.x,
    //         y: event.accelerationIncludingGravity.y,
    //         z: event.accelerationIncludingGravity.z
    //     };

    //     this.props.logDeviceMotion(payload);
    // }

    

    componentDidMount () {
        if (supported()) {
            const needsMotionPermission = needsPermission();
            this.setState({needsMotion: needsMotionPermission})
            
            if (!needsMotionPermission) {
                registerOrientationListener(this.handleOrientationEvent, this.compassNeedsCalibration);

                // Set a timer, if we don't hear anything (canceling the timeout), assume it isn't supported
                this.setState({
                    motionTimeout: setTimeout(() => {
                        this.setState({notSupported: true});
                    }, 1000)
                });
            }

            // Could use device motion for dead recking
            // window.addEventListener("devicemotion", this.handleMotionEvent, true);
        } else {
            this.setState({notSupported: true});
        }
    }

    componentWillUnmount () {
        removeOrientationListener(this.handleOrientationEvent, this.compassNeedsCalibration);
        // window.removeEventListener("devicemotion", this.handleMotionEvent, true);
    }

    render() {

        let userFocus = (<div className="wand">
                <p>Now playing.</p>
                <Button onClick={() => this.setState({needsCalibration: true})}>Calibrate</Button>
            </div>);

        if (this.state.notSupported) {
            userFocus = <NoDeviceOrientationPage />
        } else if (this.state.needsMotion) {
            userFocus = <MotionPage askPermission={this.requestOrientationPermission}/>
        } else if (this.state.needsPosition) {
            userFocus = <LocationPage setPosition={this.setPosition}/>
        } else if (this.state.needsCalibration) {
            userFocus = <CalibratePage calibrate={this.recordCalibration}/>
        }

        return (
            <>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand>Wand</Navbar.Brand>
                    <ConnectionStatus />
                </Navbar>
                {userFocus}
            </>
        );
    } 
}

Wand.contextType = SocketContext;

export default Wand;
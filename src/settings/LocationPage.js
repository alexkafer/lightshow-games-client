import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

import { Draggable } from 'react-touch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

class LocationPage extends Component {
  constructor() {
    super();

    this.state = {
      dropped: false,
      left: window.innerWidth / 2,
      top: window.innerHeight / 4,
    }

    this.map = React.createRef();
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.confirmPosition = this.confirmPosition.bind(this);
  }

  setCoords(newleft, newTop) {
    this.setState({
      left: newleft,
      top: newTop
    })
  }

  handleTouchStart(e) {
    if (e.target && e.touches.length === 1 && e.target.tagName === "IMG") {
      var rect = e.target.getBoundingClientRect();
      const touch = e.touches[0];
      this.setCoords(touch.clientX - rect.left, touch.clientY - rect.top);
      console.log(touch);
      e.preventDefault()
    }
  }


  _onDrag(newPos) {
    console.log(newPos);
    this.setCoords(newPos.left, newPos.top)
  }

  _onDragEnd() {
    console.log("Finished dragging");
  }

  confirmPosition() {
    const x = 2 * this.state.left / this.map.current.width - 1;
    const y = -(2 * this.state.top / this.map.current.height - 1);
    console.log(x, y);
    this.props.setPosition(x, y);
  }

  render() {
    let pos = {
      left: this.state.left,
      top: this.state.top,
    }

    console.log(pos);

    return (
      <div className="center-item">
         <h1>Set your location</h1>
          <div onTouchStart={this.handleTouchStart} className="location-pin">

          <img ref={this.map} alt="Light Show Map" src="https://10.0.0.7:2568/layout/map"  />

            <Draggable 
              position={pos}
              onDrag={newPos => this._onDrag(newPos)}
              onDragEnd={() => this._onDragEnd()}>
              <FontAwesomeIcon className="pin" style={pos} icon={faMapPin} size="3x" />
            </Draggable>
          </div>
         
         <Button onClick={this.confirmPosition} className='m-1' variant="primary">Confirm</Button>
       </div>
    )
  }
}

export default LocationPage
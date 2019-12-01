import React from 'react'

import ReactSwipe from 'react-swipe'

import {Container, Button} from 'react-bootstrap'

import LocationPage from '../settings/LocationPage'
import MotionPage from '../settings/MotionPage'
import CalibratePage from '../settings/CalibratePage'

const OnBoard = ({reactSwipeEl}) => {
  return (
    <>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
        style={{
          wrapper: {
            height: "100%"
          }
        }}
        >

        <div className="carousel-page">
          <MotionPage/>
        </div>

        <div className="carousel-page">
          <LocationPage/>
        </div>
        
        <div className="carousel-page">
          <CalibratePage />
        </div>
       
    
      </ReactSwipe>
      <footer className='footer mt-auto py-3 bg-dark text-white'>
          <Container>
            <div className="d-flex justify-content-between">
              <Button onClick={() => reactSwipeEl.prev()} variant="secondary">Prev</Button>
              <h4>Test</h4>
              <Button onClick={() => reactSwipeEl.next()} variant="primary">Next</Button>
            </div>
          </Container>
      </footer>
    </>
  )
}

export default OnBoard
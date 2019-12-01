import React from 'react'
import {Button} from 'react-bootstrap'

const CalibratePage = ({calibrate}) => {
  return (
    <div className="container center-item">
     <h1 className='mt-5'>Calibrate Direction</h1>
     <p className='lead'>Point your phone south and press Calibrate.</p>
     <Button className='m-1' onClick={calibrate} variant="primary">Calibrate</Button>
   </div>
)
}

export default CalibratePage;
import React from 'react'
import {Button} from 'react-bootstrap'

const MotionPage = ({askPermission}) => {
  return (
      <div className="container center-item">
       <h1 className='mt-5'>Activate Motion</h1>
       <p className='lead'>Motion allows the light show to know where your phone is pointed.</p>
       <Button className='m-1' onClick={askPermission} variant="primary">Allow</Button>
     </div>
  )
}

export default MotionPage;
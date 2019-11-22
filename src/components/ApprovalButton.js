import React from 'react'

import {Button} from 'react-bootstrap'

const ApprovalButton = ({title, description, button, callback, override}) => {
  var buttonComponent = <></>;
  if (button) {
    buttonComponent = <Button onClick={callback} variant="primary">{button}</Button>;
  }
  return (
    <div className="container center-item">
        <h1 className='mt-5'>{title}</h1>
        <p className='lead'>{description}</p>
        {buttonComponent}
      </div>
  )
}

export default ApprovalButton
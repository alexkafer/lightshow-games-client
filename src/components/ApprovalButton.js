import React from 'react'


const ApprovalButton = ({title, description, buttons}) => {
  return (
    <div className="container center-item">
        <h1 className='mt-5'>{title}</h1>
        <p className='lead'>{description}</p>
        {buttons}
      </div>
  )
}

export default ApprovalButton
import React from 'react'
import {Button} from 'react-bootstrap'

const NoDeviceOrientationPage = () => {
  return (
    <div className="container center-item">
        <h1 className='mt-5'>Not Supported</h1>
        <p className='lead'>Unfortunately, this game doesn't work in your browser.</p>
        <Button className='m-1' href={"googlechromes://" + window.location.host} variant="primary">Try in Chrome</Button>
        <Button className='m-1' href="itms-apps://itunes.apple.com/us/app/chrome/id535886823" variant="secondary">Install Chrome</Button>
        <p className='pt-5 lead'>iOS 12: Please enable device orientation in Settings > Safari > Motion & Orientation Access.</p>
      </div>
  )
}

export default NoDeviceOrientationPage;
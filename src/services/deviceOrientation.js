export function needsPermission() {
    // Checks to see if we need to request permission. AFAIK, This is only for iOS 13+
    return (typeof DeviceMotionEvent.requestPermission === 'function');
}

export function requestPermission() {
    return DeviceOrientationEvent.requestPermission();
}

export function registerOrientationListener(orientation_event, compass_event) {
    window.addEventListener("deviceorientation", orientation_event, true);   
    window.addEventListener("compassneedscalibration", compass_event, true);
}

export function removeOrientationListener(orientation_event, compass_event) {
    window.removeEventListener("deviceorientation", orientation_event, true);  
    window.addEventListener("compassneedscalibration", compass_event, true);
}


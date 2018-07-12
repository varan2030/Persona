import React from "react";
import Webcam from 'react-webcam';
import './FunctionComponents.css'

export const ImageCapture = props => (
  <div className="text-center">
    <Webcam
      audio={false}
      height={350}
      ref={props.setRef}
      screenshotFormat="image/jpeg"
      width={395}
    />
    <br />
    <button
    type="submit"
    className="btn button"
    onClick={props.capture}>
    Capture Photo
    </button>
  </div>
);

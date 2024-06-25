import React from 'react';
import './FaceDetectedImage.css';

const FaceDetectedImage = ({imageUrl, facesLoc}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                {
                    facesLoc.map(faceLocs => (
                        <div key={faceLocs.top}
                            className='bounding-box' 
                            style={faceLocs}>
                        </div>
                    ))
                }
            </div>
        </div>
    );
  }

export default FaceDetectedImage;
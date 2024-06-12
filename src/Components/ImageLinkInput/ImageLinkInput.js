import React from 'react';
import './ImageLinkInput.css';

const ImageLinkInput = () => {
    return (
        <div>
          <p className='f3'>
              {'This magic brain will detect faces in your pictures. Get it a try.'}
          </p>
          <div className='center'>
              <div className='form pa4 br3 shadow-5 center'>
                  <input className='f4 pa2 w-70 center' type='text' />
                  <button className='f4 w-30 grow link ph3 pv2 dib white bg-orange pointer'>Detect</button>
              </div>
          </div>
        </div>
      );
  }

export default ImageLinkInput;
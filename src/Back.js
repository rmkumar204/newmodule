import React from 'react';
import video from './video.mp4'; 
function Back() {
    return ( <div >
         <video autoplay="true" muted="true" loop id="slider-video" class="bg-video" src={video} type="video/mp4">
  </video>
      <div className="video-overlay">
      
        
  </div>
    </div>);
}

export default Back; 
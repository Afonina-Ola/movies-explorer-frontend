import React from 'react';
import './Overlay.css';

function Overlay({ isOpened, onOverlayClick }) {


  return (
    <div onClick={onOverlayClick} className={isOpened ? "overlay overlay_opened" : 'overlay'} />
  );
}

export default Overlay; 
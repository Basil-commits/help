import React from 'react';

const ImageOverlay = () => {
  return (
    <img 
      src="/MainPsyop.png" 
      alt="ZEGE Logo" 
      className="absolute top-20 right-8 w-48 h-48 object-contain opacity-50 z-50 pointer-events-none"
    />
  );
};

export default ImageOverlay;
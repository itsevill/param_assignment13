// Img/Img.tsx
import React from 'react';

// Define the props interface directly above the component
export interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  // Add any other props you might need, like onClick, onLoad, onError, etc.
}

const Img: React.FC<ImgProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className || ''} />;
};

export default Img;

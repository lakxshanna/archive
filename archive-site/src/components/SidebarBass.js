// src/components/SidebarBass.js
import React from 'react';
import ImageCarousel from './ImageCarousel';

const imagesForBass = [
  { src: 'path/to/bass1.jpg', alt: 'Bass Image 1', caption: 'Interior of Bass Library' },
  { src: 'path/to/bass2.jpg', alt: 'Bass Image 2', caption: 'Exterior of Bass Library' },
  // Add more images...
];

const SidebarBass = () => {
  const description = "Second encampment site.";

  return (
    <ImageCarousel 
      images={imagesForBass} 
      description={description} 
    />
  );
};

export default SidebarBass;

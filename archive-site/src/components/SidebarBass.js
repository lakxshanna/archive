// src/components/SidebarBass.js
import React from 'react';
import ImageCarousel from './ImageCarousel';

const imagesForBass = [
  { src:  '/logo192.png', alt: 'Bass Image 1'},
  { src:  '/logo192.png', alt: 'Bass Image 2'},
  // Add more images...
];

const SidebarBass = () => {
  const description = "Second encampment info goes here";

  return (
    <ImageCarousel 
      images={imagesForBass} 
      description={description} 
    />
  );
};

export default SidebarBass;

// src/components/SidebarBeinecke.js
import React from 'react';
import ImageCarousel from './ImageCarousel';

const imagesForBeinecke = [
  { src: '/logo192.png', alt: 'Beinecke Image 1' },
  { src: '/logo192.png', alt: 'Beinecke Image 2'},
  // Add more images...
];

const SidebarBeinecke = () => {
  const description = "I was thinking we do a general coverage of the encampments written here";

  return (
    <ImageCarousel 
      images={imagesForBeinecke} 
      description={description} 
    />
  );
};

export default SidebarBeinecke;

// src/components/SidebarBeinecke.js
import React from 'react';
import ImageCarousel from './ImageCarousel';

const imagesForBeinecke = [
  { src: 'path/to/beinecke1.jpg', alt: 'Beinecke Image 1', caption: 'Beinecke Library Interior' },
  { src: 'path/to/beinecke2.jpg', alt: 'Beinecke Image 2', caption: 'Beinecke Library Exterior' },
  // Add more images...
];

const SidebarBeinecke = () => {
  const description = "First Encampment";

  return (
    <ImageCarousel 
      images={imagesForBeinecke} 
      description={description} 
    />
  );
};

export default SidebarBeinecke;

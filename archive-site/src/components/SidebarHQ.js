import React from 'react';
import ImageCarousel from './ImageCarousel';

const imagesForHQ = [
  { src: 'path/to/humanities1.jpg', alt: 'Humanities Image 1', caption: 'Humanities Quadrangle View' },
  { src: 'path/to/humanities2.jpg', alt: 'Humanities Image 2', caption: 'Interior of Humanities Quadrangle' },
  // Add more images...
];

const SidebarHQ = () => {
  const description = "Previously known as the Hall of Graduate Studies, it now serves as a hub for humanities departments.";

  return (
    <ImageCarousel 
      images={imagesForHQ} 
      description={description} 
    />
  );
};

export default SidebarHQ;

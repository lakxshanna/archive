
import React from 'react';
import ImageCarousel from './ImageCarousel';

const imagesForGrove = [
  { src: '/logo192.png', alt: 'College  Image 1' },
  { src:  '/logo192.png', alt: 'College Image 2' },
  // Add more images...
];

const SidebarGrove = () => {
  const description = "Here we can talk about the arrests themselves, and blocked intersection following arrests" ;

  return (
    <ImageCarousel 
      images={imagesForGrove} 
      description={description} 
    />
  );
};

export default SidebarGrove;

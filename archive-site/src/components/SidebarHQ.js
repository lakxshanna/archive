import React from 'react';
import ImageCarousel from './ImageCarousel';

const imagesForHQ = [
  { src:  '/logo192.png', alt: 'Humanities Image 1'},
  { src:  '/logo192.png', alt: 'Humanities Image 2'},
  // Add more images...
];

const SidebarHQ = () => {
  const description = "Here we can talk a little about the inital bookshelves that went up, planning behind them, how long they lasted, etc.";

  return (
    <ImageCarousel 
      images={imagesForHQ} 
      description={description} 
    />
  );
};

export default SidebarHQ;

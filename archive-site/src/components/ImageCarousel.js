// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ images, title, description }) => {
  const imageStyle = {
    width: '50%', // Adjust this value as needed
    height: 'auto',
    margin: '0 auto',
  };

  return (
    <div>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              style={imageStyle} // Use inline styles
              src={image.src}
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ImageCarousel;

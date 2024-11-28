import React, { useState } from "react";


const images = [
  { src: "/logo192.png", title: "Image 1" },
  { src: "/logo192.png", title: "Image 2" },
  { src: "/logo192.png", title: "Image 3" },
  { src: "/logo192.png", title: "Image 4" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.title}
            className="gallery-thumbnail"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox">
          <div className="lightbox-content">
            <span className="close-btn" onClick={handleClose}>
              &times;
            </span>
            <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-image" />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

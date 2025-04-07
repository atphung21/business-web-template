import React, { useState, useEffect } from 'react';

export const PhotoCollage = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const collageContainer = {
    maxWidth: '100%',
    width: '70%',
    margin: '2rem auto',
    textAlign: 'center',
    padding: '1rem'
  };

  const mainImage = {
    width: '100%',
    height: '70vh',
    borderRadius: '8px',
    objectFit: 'cover',
    maxHeight: '90%'
  };

  const thumbnails = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    gap: '10px',
    flexWrap: 'wrap'
  };

  const thumbnailImage = (index) => ({
    width: '60px',
    height: '60px',
    borderRadius: '4px',
    cursor: 'pointer',
    opacity: index === currentIndex ? 1 : 0.6,
    border: index === currentIndex ? '2px solid #333' : 'none',
    objectFit: 'cover'
  });

  return (
    <div style={collageContainer}>
      <img src={images[currentIndex]} alt={currentIndex + 1} style={mainImage} />
      <div style={thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            style={thumbnailImage(index)}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};


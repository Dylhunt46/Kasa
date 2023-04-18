import React from 'react';
import './ImageBanner.scss';

function ImageBanner(props) {
  const imageUrl = props.imageUrl
    ? props.imageUrl
    : 'https://picsum.photos/1920/1080';
  return (
    <div className="Image__banner">
      <img src={imageUrl} alt="Appartement" />
    </div>
  );
}

export default ImageBanner;

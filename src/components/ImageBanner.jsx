import React, { useState } from 'react';
import './ImageBanner.scss';

function ImageBanner(props) {
  //
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (index) => {
    if (index === currentPicture) return 'show';
    return '';
  };
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="about-banner.jpg" alt="" className="show" />;
    }
    return pictures.map((pic, index) => (
      <img key={pic} src={pic} alt="" className={getClassName(index)} />
    ));
  };

  return (
    <div className="Image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ImageBanner;

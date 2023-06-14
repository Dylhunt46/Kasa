import React from 'react';
import './gallery.scss';
import Card from '../Card/Card.jsx';
import useAccomodations from '../../hooks/useAccommodations.jsx';

function Gallery() {
  const accommodations = useAccomodations();

  return (
    <div className="gallery">
      {accommodations.map((accommodation) => (
        <Card
          title={accommodation.title}
          imageUrl={accommodation.cover}
          id={accommodation.id}
          key={accommodation.id}
        />
      ))}
    </div>
  );
}

export default Gallery;

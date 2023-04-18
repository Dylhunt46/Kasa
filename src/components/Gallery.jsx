import React, { useEffect, useState } from 'react';
import './gallery.scss';
import Card from './Card.jsx';

function Gallery() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(fetchAccommodations, []);

  function fetchAccommodations() {
    fetch('logements.json')
      .then((res) => res.json())
      .then((res) => setAccommodations(res))
      .catch(console.error);
  }

  return (
    <div className="gallery">
      {accommodations.map((accommodation) => (
        <Card
          title={accommodation.title}
          imageUrl={accommodation.cover}
          id={accommodation.id}
        />
      ))}
    </div>
  );
}

export default Gallery;

import React, { useEffect, useState } from 'react';
import './gallery.scss';
import Card from './Card.jsx';

function Gallery() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch('logements.json', { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setAccommodations(res))
      .catch(console.error);
    return () => {
      abortController.abort();
    };
  }, []);

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

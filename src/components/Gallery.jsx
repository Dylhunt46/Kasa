import React, { useState } from 'react';
import './gallery.scss';
import Card from './Card.jsx';

function Gallery() {
  // fetch('logements.json')
  //   .then((res) => res.json())
  //   .then((res) => console.log(res.length))
  //   .catch(console.error);
  const myArray = useState(0);
  console.log(myArray);
  return (
    <div className="gallery">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Gallery;

import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card() {
  return (
    <div className="card">
      <Link to="/accomodation">
        <div className="card__title">Titre de la location</div>
      </Link>
    </div>
  );
}

export default Card;

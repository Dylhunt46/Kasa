import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card() {
  return (
    <Link to="/accomodation">
      <div className="card">
        <div className="card__title">Titre de la location</div>
      </div>
    </Link>
  );
}

export default Card;

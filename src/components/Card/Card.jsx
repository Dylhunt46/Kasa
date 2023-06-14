import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card(props) {
  return (
    <Link to="/accomodation" state={{ accommodationId: props.id }}>
      <div className="card">
        <img src={props.imageUrl} alt="" />
        <div className="card__title">{props.title}</div>
      </div>
    </Link>
  );
}

export default Card;

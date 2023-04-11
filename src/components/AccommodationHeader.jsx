import React from 'react';
import './AccommodationHeader.scss';

function AccommodationHeader() {
  return (
    <div className="accommodation__header">
      <div className="accommodation__title">
        <h1>Cozy loft in a Canal Saint-Martin</h1>
        <h2>Paris, Île de France</h2>
        <div className="accommodation__tags">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
      </div>
      <div className="accommodation__owner">
        <div className="accommodation__owner__details">
          <h3>
            <span>Alexandre</span> <span>Dumas</span>
          </h3>
          <div className="accommodation__owner__badge"></div>
        </div>
        <div className="accommodation__owner__stars">
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="off">★</span>
          <span className="off">★</span>
        </div>
      </div>
    </div>
  );
}

export default AccommodationHeader;

import React from 'react';
import './AccommodationHeader.scss';

function AccommodationHeader({ selectedAccommodation }) {
  const { name } = selectedAccommodation.host;
  const [firstname, lastname] = name.split(' ');
  return (
    <div className="accommodation__header">
      <div className="accommodation__title">
        <h1>{selectedAccommodation.title}</h1>
        <h2>{selectedAccommodation.location}</h2>
        <div className="accommodation__tags">
          {selectedAccommodation.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="accommodation__owner">
        <div className="accommodation__owner__details">
          <h3>
            <span>{firstname}</span> <span>{lastname}</span>
          </h3>
          <div className="accommodation__owner__badge">
            <img src={selectedAccommodation.host.picture} alt="" />
          </div>
        </div>
        <div className="accommodation__owner__stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={selectedAccommodation.rating >= num ? 'on' : ''}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccommodationHeader;

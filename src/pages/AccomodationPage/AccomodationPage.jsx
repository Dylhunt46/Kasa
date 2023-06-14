import React from 'react';
import './AccomodationPage.scss';
import Collapse from '../../components/Collapse/Collapse';
import Carousel from '../../components/Carousel/Carousel.jsx';
import AccommodationHeader from '../../components/AccomodationHeader/AccommodationHeader';
import useAccommodation from '../../hooks/useAccommodation';

function AccomodationPage() {
  const selectedAccommodation = useAccommodation();

  if (selectedAccommodation == null) return <div>Loading...</div>;

  return (
    <div className="accommodation-page">
      <Carousel pictures={selectedAccommodation.pictures} />
      <AccommodationHeader selectedAccommodation={selectedAccommodation} />
      <div className="accommodation__description__area">
        <Collapse
          title="Description"
          content={selectedAccommodation.description}
        />
        <Collapse
          title="Equipement"
          content={selectedAccommodation.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default AccomodationPage;

import React, { useEffect, useState } from 'react';
import './AccomodationPage.scss';
import DescriptionPanel from '../components/DescriptionPanel';
import ImageBanner from '../components/ImageBanner.jsx';
import AccommodationHeader from '../components/AccommodationHeader';
import { useLocation } from 'react-router-dom';

function AccomodationPage() {
  const location = useLocation();
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  useEffect(fetchAccommodationData, []);

  function fetchAccommodationData() {
    fetch('logements.json')
      .then((res) => res.json())
      .then((accommodations) => {
        const accommodation = accommodations.find(
          (accommodation) => accommodation.id === location.state.accommodationId
        );
        setSelectedAccommodation(accommodation);
      })
      .catch(console.error);
  }
  if (selectedAccommodation == null) return <div>... Loading</div>;

  return (
    <div className="accommodation-page">
      <ImageBanner imageUrl={selectedAccommodation.cover} />
      <AccommodationHeader selectedAccommodation={selectedAccommodation} />
      <div className="accommodation__description__area">
        <DescriptionPanel
          title="Description"
          content={selectedAccommodation.description}
        />
        <DescriptionPanel
          title="Equipement"
          content={selectedAccommodation.equipments.map((eq) => (
            <li>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default AccomodationPage;

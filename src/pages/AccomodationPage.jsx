import React from 'react';
import './AccomodationPage.scss';
import DescriptionPanel from '../components/DescriptionPanel';
import ImageBanner from '../components/ImageBanner.jsx';
import AccommodationHeader from '../components/AccommodationHeader';
import useAccommodation from '../hooks/useAccommodation';

function AccomodationPage() {
  const selectedAccommodation = useAccommodation();

  if (selectedAccommodation == null) return <div>... Loading</div>;

  return (
    <div className="accommodation-page">
      <ImageBanner pictures={selectedAccommodation.pictures} />
      <AccommodationHeader selectedAccommodation={selectedAccommodation} />
      <div className="accommodation__description__area">
        <DescriptionPanel
          title="Description"
          content={selectedAccommodation.description}
        />
        <DescriptionPanel
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

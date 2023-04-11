import React from 'react';
import './AccomodationPage.scss';
import AccommodationDescription from '../components/AccommodationDescription';
import AccomodationBanner from '../components/AccomodationBanner.jsx';
import AccommodationHeader from '../components/AccommodationHeader';

function AccomodationPage() {
  return (
    <div className="accommodation-page">
      <AccomodationBanner />
      <AccommodationHeader />
      <div className="accommodation__description__area">
        <AccommodationDescription />
        <AccommodationDescription />
      </div>
    </div>
  );
}

export default AccomodationPage;

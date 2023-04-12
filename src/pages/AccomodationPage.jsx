import React from 'react';
import './AccomodationPage.scss';
import DescriptionPanel from '../components/DescriptionPanel';
import ImageBanner from '../components/ImageBanner.jsx';
import AccommodationHeader from '../components/AccommodationHeader';

function AccomodationPage() {
  return (
    <div className="accommodation-page">
      <ImageBanner />
      <AccommodationHeader />
      <div className="accommodation__description__area">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  );
}

export default AccomodationPage;

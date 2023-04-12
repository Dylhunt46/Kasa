import React from 'react';
import ImageBanner from '../components/ImageBanner.jsx';
import DescriptionPanel from '../components/DescriptionPanel';
import './About.scss';

function About() {
  return (
    <>
      <ImageBanner />
      <div className="about__container">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </>
  );
}

export default About;

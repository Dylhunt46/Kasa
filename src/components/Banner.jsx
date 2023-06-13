import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './banner.scss';

function Banner() {
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutPage(true);
    }
  }, []);

  return (
    <div className={aboutPage ? 'banner__about' : 'banner'}>
      {!aboutPage && (
        <h2>
          Chez vous, <span className="text__intro">partout et ailleurs</span>
        </h2>
      )}
    </div>
  );
}

export default Banner;

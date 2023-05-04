import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="logo-black.png" alt="Logo Kasa" width="122" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;

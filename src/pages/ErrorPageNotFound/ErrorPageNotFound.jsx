import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPageNotFound.scss';
import Navbar from '../../layout/Navbar/Navbar';
import Main from '../../layout/Main/Main';
import Footer from '../../layout/Footer/Footer';

function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>
            Oups! la page que <span>vous demandez n'existe pas.</span>
          </h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPageNotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPageNotFound.scss';
import Navbar from '../layout/Navbar';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups! la page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default ErrorPageNotFound;

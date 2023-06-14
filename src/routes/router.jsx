import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import AccomodationPage from '../pages/AccomodationPage/AccomodationPage';
import Navbar from '../layout/Navbar/Navbar';
import Main from '../layout/Main/Main';
import Footer from '../layout/Footer/Footer';
import About from '../pages/About/About';
import ErrorPageNotFound from '../pages/ErrorPageNotFound/ErrorPageNotFound';

const HeaderFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const routeur = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/accomodation',
        element: <AccomodationPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AccomodationPage from '../pages/AccomodationPage';
import Navbar from '../layout/Navbar';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

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
    errorElement: <h1>404 Not found</h1>,
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
        element: <h1>A propos</h1>,
      },
    ],
  },
]);

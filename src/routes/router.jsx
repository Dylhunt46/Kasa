import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';
import Navbar from './layout/Navbar';
import Main from './layout/Main';
import Footer from './layout/Footer';

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
        element: <h1>Logements</h1>,
      },
      {
        path: '/about',
        element: <h1>A proposs</h1>,
      },
    ],
  },
]);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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

const routeur = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
    errorElement: <h1>404 Not found</h1>,
    children: [
      {
        path: '/',
        element: <App />,
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routeur} />
  </React.StrictMode>
);

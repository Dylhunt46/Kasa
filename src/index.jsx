import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routeur = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404 Not found</h1>,
  },
  {
    path: '/accomodation',
    element: <h1>Nos logements</h1>,
  },
  {
    path: '/about',
    element: <h1>A propos</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routeur} />
  </React.StrictMode>
);

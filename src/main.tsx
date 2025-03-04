// import './App.css';
// import './index.css';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ErrorPage from './error-page.tsx';
// import About from './pages/about.tsx';
// import Home from './pages/home.tsx';
// import Sponsor from './pages/sponsor.tsx';
// import Exhibitor from './pages/exhibitor.tsx';
// import Speakers from './pages/speakers.tsx';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/about',
//     element: <About />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/sponsor',
//     element: <Sponsor />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/speaker',
//     element: <Speakers />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/exhibitors',
//     element: <Exhibitor />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/about',
//     element: <About />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: '/about',
//     element: <About />
//   }
// ]);
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     {/* <App> */}
//     <RouterProvider router={router} />
//     {/* </App> */}
//   </StrictMode>
// );

import './App.css';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page.tsx';
import About from './pages/about.tsx';
import Home from './pages/home.tsx';
import Sponsor from './pages/sponsor.tsx';
import Exhibitor from './pages/exhibitor.tsx';
import Speakers from './pages/speakers.tsx';
import PastSpeakers from './pages/past-speaker.tsx';
import ExhibitorForm from './components/form/exhibitor.tsx';
import SponsorForm from './components/form/sponsor.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sponsor',
    element: <Sponsor />,
    errorElement: <ErrorPage />
  },
  {
    path: '/speaker',
    element: <Speakers />,
    errorElement: <ErrorPage />
  },
  {
    path: '/past-speaker',
    element: <PastSpeakers />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: '/exhibitors',
  //   element: <Exhibitor />,
  //   errorElement: <ErrorPage />
  // },
  {
    path: '/exhibitors',
    element: <ExhibitorForm />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sponsors',
    element: <SponsorForm />,
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

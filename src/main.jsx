import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { PageStateProvider } from './PageStateContext'; 
import LandingPage from './components/LandingPage/Landingpage.jsx';
import Page1 from './components/LandingPage/Subpages/Page1.jsx';
import Page2 from './components/LandingPage/Subpages/Page2.jsx';
import Page3 from './components/LandingPage/Subpages/Page3.jsx';
import Page4 from './components/LandingPage/Subpages/Page4.jsx';
import Page5 from './components/LandingPage/Subpages/Page5.jsx';
import EndPage from './components/LandingPage/EndPage.jsx';
import SignIn from './components/Authentication/SignIn.jsx';
import Register from './components/Authentication/SignUp.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/landingpage',
    element: <LandingPage/>,
  },
  {
    path: '/mahasiswa',
    element: <Page1/>,
  },
  {
    path: '/mahasiswa/2',
    element: <Page2/>
  },
  {
    path: '/mahasiswa/3',
    element: <Page3/>
  },
  {
    path: '/mahasiswa/4',
    element: <Page4/>
  },
  {
    path: '/mahasiswa/5',
    element: <Page5/>
  },
  {
    path: '/mahasiswa/finish',
    element: <EndPage/>
  },
  {
    path: '/Sign-in',
    element: <SignIn/>
  },
  {
    path: '/Sign-up',
    element: <Register/>
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  
]);  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageStateProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </PageStateProvider>
  </React.StrictMode>
)


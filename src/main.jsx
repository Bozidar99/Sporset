import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages


import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import SingleUserPage from './pages/SingleUserPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'

// Rutiranje...
//1. Kreiranje rutera
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/team',
        element: <TeamPage />
      },
      {
        path: '/product',
        element: <ProductPage />
      },
      {
        path: '/singleUser/:id',
        element: <SingleUserPage />
      },
      {
        path: '/singleProduct/:id',
        element: <SingleProductPage />
      }

    ]
  }
])


//2. Provajder
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

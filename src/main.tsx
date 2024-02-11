import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from './pages/FormPage';
import ResultPage from './pages/ResultPage';
import { Indexpage } from './pages/IndexPage';
import ErrorPage from './pages/ErrorPage';



const router = createBrowserRouter([
  {
    path: '/',
    element : <Indexpage/>
  },
  {
    path: '/fillregistration',
    element : <FormPage/>
  },
  {
    path: '/results',
    element: <ResultPage/>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

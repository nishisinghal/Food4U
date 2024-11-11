import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './App.css'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import React from 'react'
import { useState , useEffect} from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header'
import Body from './component/Body'
import About from './component/About'
import Contactus from'./component/Contactus'
import RestaurantMenuPage from './component/RestaurantMenuPage'

function Applayout() {
  return (<>
    <Header />
    <Outlet />
    
    
    </>

  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <Applayout />,
    children:[
      {
        path: '/',
        element:<Body/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/contactus',
          element:<Contactus />
      
        },
        {
          path: '/resmenu/:resId',
          element:<RestaurantMenuPage />
      
        },


    ]
  },
],
{
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }})

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router= {appRouter}/>
 
  </StrictMode>,
)

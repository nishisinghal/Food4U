import { lazy, Suspense } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import appstore from './utils/appstore'
import Cart from './component/Cart'

function Applayout() {

  const[userName,setUsername]= useState();
  useEffect(() => {
    if (!userName) {  // Only set default name if it's empty
      setUsername("Naman Mangal");
    }
  }, []);
   
  return (
    <Provider  store={appstore}>
    <UserContext.Provider value= {{loggedInUser: userName , setUsername}}>
    <Header />
    <Outlet />
    
    </UserContext.Provider>
    </Provider>

  )
}
const Grocery = lazy(()=> import('./component/Grocery'));


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
          path: '/grocery',
          element:<Grocery />
      
        },
        {
          path: '/resmenu/:resId',
          element:<RestaurantMenuPage />
      
        },
        {
          path: '/cart',
          element:<Cart/>
      
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

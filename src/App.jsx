import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About/Deans/AboutData'

import Academics from './pages/Academics/Academics'
import Admissions from './pages/Admissions/Admissions'
import Campus from './pages/CampusLife/CampusLife'
import Placements from './pages/Placements/Placements'
import Alumni from './pages/Alumni/Alumni'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SingleAbout from './pages/About/Deans/SingleAbout'
import Allabout from './pages/About/Deans/Allabout'
import LeaderShip from './pages/About/LeaderShip/LeaderShip'




const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Header />
        <Allabout />
        <Footer />
      </>
    ),
  }, 
  {
    path:'/about/:id',
    element:(
         <>
         <Header/>
            <SingleAbout />
          <Footer/>
         </>
  )
  },
 {
    path:'/about/leadership/:id',
    element:(
         <>
         <Header/>
            <LeaderShip />
          <Footer/>
         </>
  )
  },

 
  {
    path: '/academics',
    element: (
      <>
        <Header />
        <Academics />
        <Footer />
      </>
    ),
  },
  {
    path: '/admissions',
    element: (
      <>
        <Header />
        <Admissions />
        <Footer />
      </>
    ),
  },
  {
    path: '/campus',
    element: (
      <>
        <Header />
        <Campus />
        <Footer />
      </>
    ),
  },
  {
    path: '/placements',
    element: (
      <>
        <Header />
        <Placements />
        <Footer />
      </>
    ),
  },
  {
    path: '/alumni',
    element: (
      <>
        <Header />
        <Alumni />
        <Footer />
      </>
    ),
  },
 
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About/About'
import Academics from '../pages/Academics/Academics'
import Admissions from '../pages/Admissions/Admissions'
import Campus from '../pages/CampusLife/CampusLife'
import Placements from '../pages/Placements/Placements'
import Alumni from '../pages/Alumni'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/academics', element: <Academics /> },
  { path: '/admissions', element: <Admissions /> },
  { path: '/campus', element: <Campus /> },
  { path: '/placements', element: <Placements /> },
  { path: '/alumni', element: <Alumni /> },
])

export default router

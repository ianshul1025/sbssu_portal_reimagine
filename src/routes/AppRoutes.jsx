import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About/About'
import Academics from '../pages/Academics/Academics'
import Admissions from '../pages/Admissions/Admissions'
import Placements from '../pages/Placements/Placements'
import Alumni from '../pages/Alumni'
import Hostel from '../pages/CampusLife/Hostel'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/academics', element: <Academics /> },
  { path: '/admissions', element: <Admissions /> },
  { path: '/placements', element: <Placements /> },
  { path: '/alumni', element: <Alumni /> },
  { path: '/hostel', element: <Hostel /> },
])

export default router

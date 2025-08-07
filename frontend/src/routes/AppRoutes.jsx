import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Academics from "../pages/Academics/Academics";
import Admissions from "../pages/Admissions/Admissions";
import Placements from "../pages/Placements/Placements";
import Alumni from "../pages/Alumni";
import Hostel from "../pages/CampusLife/Hostel";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import Footer from "../components/Footer";
import Allabout from "../pages/About/Deans/Allabout";
import SingleAbout from "../pages/About/Deans/SingleAbout";
import LeaderShip from "../pages/About/LeaderShip/LeaderShip";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <UserDashboard />
      </PrivateRoute>
    ),
  },
  { path: "/", element: <Home /> },
  { path: "/academics", element: <Academics /> },
  { path: "/admissions", element: <Admissions /> },
  { path: "/placements", element: <Placements /> },
  { path: "/alumni", element: <Alumni /> },
  { path: "/hostel", element: <Hostel /> },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <Allabout />
        <Footer />
      </>
    ),
  },
  {
    path: "/about/:id",
    element: (
      <>
        <Navbar />
        <SingleAbout />
        <Footer />
      </>
    ),
  },
  {
    path: "/about/dean-academics",
    element: (
      <>
        <Navbar />
        {/* <DeanAcademics /> */}
        <Footer />
      </>
    ),
  },
  {
    path: "/about/dean-plannings",
    element: (
      <>
        <Navbar />
        {/* <DeanPlanning /> */}
        <Footer />
      </>
    ),
  },
  {
    path: "/about/dean-welfare",
    element: (
      <>
        <Navbar />
        {/* <DeanWelfare /> */}
        <Footer />
      </>
    ),
  },
  {
    path: "/about/leadership/:id",
    element: (
      <>
        <Navbar />
        <LeaderShip />
        <Footer />
      </>
    ),
  },
  {
    path: "/about/dean-research",
    element: (
      <>
        <Navbar />
        {/* <DeanRD /> */}
        <Footer />
      </>
    ),
  },
]);

export default router;

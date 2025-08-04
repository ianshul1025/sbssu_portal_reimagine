import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import About from "../pages/About/About";
import Academics from "../pages/Academics/Academics";
import Admissions from "../pages/Admissions/Admissions";
import Placements from "../pages/Placements/Placements";
import Alumni from "../pages/Alumni";
import Hostel from "../pages/CampusLife/Hostel";
import PrivateRoute from "./PrivateRoute"; // 👈 import this
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";

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
  { path: "/about", element: <About /> },
  { path: "/academics", element: <Academics /> },
  { path: "/admissions", element: <Admissions /> },
  { path: "/placements", element: <Placements /> },
  { path: "/alumni", element: <Alumni /> },
  { path: "/hostel", element: <Hostel /> },
]);

export default router;

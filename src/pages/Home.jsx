import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import logo from "../assets/sbssulogo.png";
import TopNews from "../components/TopNews";
import Notifications from "../components/VideoWithNotifications";
import VideoWithNotifications from "../components/VideoWithNotifications";

const Home = () => {
  return (
    <div className="min-h-screen bg-sb-cream">
      {/* Header */}
      <header className="bg-sb-red text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="SBSSU Logo"
              className="h-20 w-20 object-contain"
            />
            <h1 className="text-2xl font-bold leading-6 text-white">
              SARDAR
              <br />
              BEANT
              <br />
              SINGH
              <br />
              STATE
              <br />
              UNIVERSITY
            </h1>
          </div>

          {/* Navbar */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {/* About Us */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>🔽</span>
                <span>About Us</span>
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-6 grid grid-cols-2 gap-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div>
                  <p className="font-bold mb-2">Leadership</p>
                  <ul className="space-y-1">
                    <li>Chancellor</li>
                    <li>Chairman</li>
                    <li>Vice Chancellor</li>
                    <li>Registrar</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Deans</p>
                  <ul className="space-y-1">
                    <li>Dean Planning</li>
                    <li>Dean Academic</li>
                    <li>Dean Welfare</li>
                    <li>Dean R&D</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academics */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>📘</span>
                <span>Academics</span>
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-6 grid grid-cols-2 gap-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div>
                  <p className="font-bold mb-2">Departments</p>
                  <ul className="space-y-1">
                    <li>Applied Physics</li>
                    <li>CSE</li>
                    <li>ECE</li>
                    <li>Mechanical Engg.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">Academic Resources</p>
                  <ul className="space-y-1">
                    <li>Academic Calendar</li>
                    <li>Examination</li>
                    <li>AISHE</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Admissions */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>🎓</span>
                <span>Admissions</span>
              </div>
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-6 grid grid-cols-2 gap-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div>
                  <p className="font-bold mb-2">UG</p>
                  <ul className="space-y-1">
                    <li>B.Tech CSE</li>
                    <li>B.Tech ME</li>
                    <li>BBA</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold mb-2">PG</p>
                  <ul className="space-y-1">
                    <li>MBA</li>
                    <li>MCA</li>
                    <li>M.Tech</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Placements */}
            <div className="relative group">
              <Link to="/placements" className="flex items-center gap-1">
                💼 <span>Placements</span>
              </Link>
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-4 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="space-y-1">
                  <li>Training</li>
                  <li>Recruiters</li>
                  <li>Placement Stats</li>
                  <li>Career Cell</li>
                </ul>
              </div>
            </div>

            {/* Campus Life */}
            <div className="relative group">
              <Link to="/campus" className="flex items-center gap-1">
                🏫 <span>Campus Life</span>
              </Link>
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-4 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="space-y-1">
                  <li>Hostels</li>
                  <li>Clubs</li>
                  <li>Events</li>
                </ul>
              </div>
            </div>

            {/* Alumni */}
            <div className="relative group">
              <Link to="/alumni" className="flex items-center gap-1">
                👥 <span>Alumni</span>
              </Link>
              <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-4 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="space-y-1">
                  <li>Alumni Portal</li>
                  <li>Notable Alumni</li>
                  <li>Contributions</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Image Slider */}
      <main className="h-[calc(100vh-5rem)] overflow-hidden">
        <ImageSlider />
      </main>

      <TopNews />

      <VideoWithNotifications />

      {/* Footer */}
      <footer className="bg-sb-black text-white py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          &copy; 2025 Sardar Beant Singh State University. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;

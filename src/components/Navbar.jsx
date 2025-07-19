import { Link } from "react-router-dom";
import logo from "../assets/sbssubig.png";
import ChevronDownIcon from "../components/ChevronDownIcon";

const Navbar = () => {
  return (
    <header className="bg-[#f5f0a0] text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative h-24">
        <div className="flex items-center gap-4 h-full">
          <img
            src={logo}
            alt="SBSSU Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>ABOUT US</span>
              <ChevronDownIcon />
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

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>ACADEMICS</span>
              <ChevronDownIcon />
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

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>ADMISSIONS</span>
              <ChevronDownIcon />
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

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link to="/placements"><span>PLACEMENTS</span></Link>
              <ChevronDownIcon />
            </div>
            <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-4 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="space-y-1">
                <li>Training</li>
                <li>Recruiters</li>
                <li>Placement Stats</li>
                <li>Career Cell</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link to="/campus"><span>CAMPUS LIFE</span></Link>
              <ChevronDownIcon />
            </div>
            <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-4 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="space-y-1">
                <li>Hostels</li>
                <li>Clubs</li>
                <li>Events</li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link to="/alumni"><span>ALUMNI</span></Link>
              <ChevronDownIcon />
            </div>
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
  );
};

export default Navbar;

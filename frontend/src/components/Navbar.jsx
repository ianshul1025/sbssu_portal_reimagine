import { Link } from "react-router-dom";
import logo from "../assets/sbssubig.png";
import ChevronDownIcon from "../components/ChevronDownIcon";
import StickyActionIcons from "../components/StickyActionIcons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  
  return (
    <header className="bg-[#f5f0a0] text-black shadow-md fixed top-0 w-full z-50">
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
              <span><a href="/about">ABOUT US</a></span>
              <ChevronDownIcon />
            </div>
            <div className="absolute left-0 top-full mt-2 bg-white text-[#222222] shadow-lg p-6 grid grid-cols-2 gap-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div>
                <p className="font-bold mb-2">Leadership</p>
                <ul className="space-y-1">
                  <li>
                    <Link to="/chancellor">Chancellor</Link>
                  </li>
                  <li>
                    <Link to="/chairman">Chairman Board of Governor</Link>
                  </li>
                  <li>
                    <Link to="/vice-chancellor">Vice Chancellor</Link>
                  </li>
                  <li>
                    <Link to="/registrar">Registrar</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Deans / Functional Heads</p>
                <ul className="space-y-1">
                  <li>
                    <Link to="/dean-plannings">Dean Planning & Development</Link>
                  </li>
                  <li>
                    <Link to="/dean-academics">Dean Academic Affairs</Link>
                  </li>
                  <li>
                    <Link to="/dean-welfare">Dean Student Welfare</Link>
                  </li>
                  <li>
                    <Link to="/dean-alumni">Dean Alumni</Link>
                  </li>
                  <li>
                    <Link to="/dean-research">Dean Research & Development</Link>
                  </li>
                  <li>
                    <Link to="/dean-consultancy">Dean Consultancy & IL</Link>
                  </li>
                  <li>
                    <Link to="/dean-science">Dean Faculty (Sciences)</Link>
                  </li>
                  <li>
                    <Link to="/dean-engineering">
                      Dean Faculty (Engineering)
                    </Link>
                  </li>
                  <li>
                    <Link to="/dean-accreditation">Dean Accreditation</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Committees</p>
                <ul className="space-y-1">
                  <li>
                    <Link to="/board-of-governors">Board of Governors</Link>
                  </li>
                  <li>
                    <Link to="/finance-committee">Finance Committee</Link>
                  </li>
                  <li>
                    <Link to="/academic-council">Academic Council</Link>
                  </li>
                  <li>
                    <Link to="/grievance-redressal-cell">
                      Grievance Redressal Cell
                    </Link>
                  </li>
                  <li>
                    <Link to="/student-grievance">
                      Student Grievance Redressal
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Transparency</p>
                <ul className="space-y-1">
                  <li>
                    <Link to="/rti">Right to Information (RTI)</Link>
                  </li>
                  <li>
                    <Link to="/mandatory-disclosure">Mandatory Disclosure</Link>
                  </li>
                  <li>
                    <Link to="/bye-laws">University Bye-Laws</Link>
                  </li>
                  <li>
                    <Link to="/establishment">University Establishment</Link>
                  </li>
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
                  <li>
                    <Link
                      to="/applied-physics"
                      className="hover:text-red-600 transition-colors"
                    >
                      Applied Physics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/applied-chemistry"
                      className="hover:text-red-600 transition-colors"
                    >
                      Applied Chemistry, Humanities & Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/applied-mathematics"
                      className="hover:text-red-600 transition-colors"
                    >
                      Applied Mathematics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/chemical-engineering"
                      className="hover:text-red-600 transition-colors"
                    >
                      Chemical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cse"
                      className="hover:text-red-600 transition-colors"
                    >
                      Computer Science & Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ece"
                      className="hover:text-red-600 transition-colors"
                    >
                      Electronics & Communication Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/biotechnology"
                      className="hover:text-red-600 transition-colors"
                    >
                      Bio-Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mechanical-engineering"
                      className="hover:text-red-600 transition-colors"
                    >
                      Mechanical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/civil-engineering"
                      className="hover:text-red-600 transition-colors"
                    >
                      Civil Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agriculture-science"
                      className="hover:text-red-600 transition-colors"
                    >
                      Agriculture Science
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Academic Resources</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/academic-section"
                      className="hover:text-red-600 transition-colors"
                    >
                      Academic Section
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/academic-calendar"
                      className="hover:text-red-600 transition-colors"
                    >
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/examination"
                      className="hover:text-red-600 transition-colors"
                    >
                      Examination
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/nirf"
                      className="hover:text-red-600 transition-colors"
                    >
                      NIRF (National Ranking)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aishe"
                      className="hover:text-red-600 transition-colors"
                    >
                      AISHE (Survey Info)
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Central Facilities</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/computer-centre"
                      className="hover:text-red-600 transition-colors"
                    >
                      Computer Centre
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/library"
                      className="hover:text-red-600 transition-colors"
                    >
                      Library
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/library-opac"
                      className="hover:text-red-600 transition-colors"
                    >
                      Library OPAC
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/workshop"
                      className="hover:text-red-600 transition-colors"
                    >
                      Workshop
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Student Portal</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/results"
                      className="hover:text-red-600 transition-colors"
                    >
                      Results (Search Notification)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="hover:text-red-600 transition-colors"
                    >
                      Student Login/Register
                    </Link>
                  </li>
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
                <p className="font-bold mb-2">Undergraduate Programs</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/courses/btech-biotechnology"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Biotechnology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/btech-chemical-engineering"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Chemical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/btech-civil-engineering"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Civil Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/btech-cse"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Computer Science & Engineering (CSE)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/btech-ee"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Electrical Engineering (EE)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/btech-ece"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Electronics & Communication Engineering (ECE)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/btech-it"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Information Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/btech-mechanical"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Tech – Mechanical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/bba-marketing"
                      className="hover:text-red-600 transition-colors"
                    >
                      BBA – Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/bca"
                      className="hover:text-red-600 transition-colors"
                    >
                      BCA – Computer Applications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/bsc-non-medical"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Sc. (Non-Medical)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/bvoc-rac"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Voc – Refrigeration & Air Conditioning
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/bvoc-agriculture"
                      className="hover:text-red-600 transition-colors"
                    >
                      B.Voc – Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/integrated-msc-physics"
                      className="hover:text-red-600 transition-colors"
                    >
                      5-year Integrated M.Sc. – Physics
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Postgraduate Programs</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/courses/mba-digital-marketing"
                      className="hover:text-red-600 transition-colors"
                    >
                      MBA – Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/mca"
                      className="hover:text-red-600 transition-colors"
                    >
                      MCA – Master of Computer Applications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/msc-chemistry"
                      className="hover:text-red-600 transition-colors"
                    >
                      M.Sc. – Chemistry
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/msc-mathematics"
                      className="hover:text-red-600 transition-colors"
                    >
                      M.Sc. – Mathematics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/msc-physics"
                      className="hover:text-red-600 transition-colors"
                    >
                      M.Sc. – Physics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/mtech-cse"
                      className="hover:text-red-600 transition-colors"
                    >
                      M.Tech – Computer Science & Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/mtech-mechanical"
                      className="hover:text-red-600 transition-colors"
                    >
                      M.Tech – Mechanical Engineering
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Polytechnic Diplomas</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/courses/diploma-cse"
                      className="hover:text-red-600 transition-colors"
                    >
                      Diploma – Computer Science & Engineering (CSE)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/diploma-ece"
                      className="hover:text-red-600 transition-colors"
                    >
                      Diploma – Electronics & Communication (ECE)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/courses/diploma-mechanical"
                      className="hover:text-red-600 transition-colors"
                    >
                      Diploma – Mechanical Engineering
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Ph.D. Programs</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/phd/computer-science"
                      className="hover:text-red-600 transition-colors"
                    >
                      Ph.D. – Computer Science & Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/phd/ece"
                      className="hover:text-red-600 transition-colors"
                    >
                      Ph.D. – Electronics & Communication Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/phd/mechanical"
                      className="hover:text-red-600 transition-colors"
                    >
                      Ph.D. – Mechanical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/phd/chemical"
                      className="hover:text-red-600 transition-colors"
                    >
                      Ph.D. – Chemical Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/phd/shortlisted-candidates"
                      className="hover:text-red-600 transition-colors"
                    >
                      Shortlisted Candidates for Ph.D.
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link to="/placements">
                <span>PLACEMENTS</span>
              </Link>
              <ChevronDownIcon />
            </div>
            <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-lg p-4 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/placements/overview"
                    className="hover:text-red-600 transition-colors"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/placements/industrial-training"
                    className="hover:text-red-600 transition-colors"
                  >
                    Industrial Training
                  </Link>
                </li>
                <li>
                  <Link
                    to="/placements/placement-statistics"
                    className="hover:text-red-600 transition-colors"
                  >
                    Placement Statistics
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>CAMPUS LIFE</span>
              <ChevronDownIcon />
            </div>
            <div className="absolute left-0 top-full mt-2 bg-white text-[#222222] shadow-lg p-6 grid grid-cols-2 gap-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div>
                <p className="font-bold mb-2">Student Clubs & Societies</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/clubs/literary-society"
                      className="hover:text-red-600 transition-colors"
                    >
                      Literary Society
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/apex-management-society"
                      className="hover:text-red-600 transition-colors"
                    >
                      Apex Management Society
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/punjab-sabhyacharak-club"
                      className="hover:text-red-600 transition-colors"
                    >
                      Punjab Sabhyacharak Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/fine-art-club"
                      className="hover:text-red-600 transition-colors"
                    >
                      Fine Art Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/iste-student-chapter"
                      className="hover:text-red-600 transition-colors"
                    >
                      ISTE Student Chapter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/music-dramatics"
                      className="hover:text-red-600 transition-colors"
                    >
                      Music & Dramatics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/biogen-society"
                      className="hover:text-red-600 transition-colors"
                    >
                      BioGen Society
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/edc-club"
                      className="hover:text-red-600 transition-colors"
                    >
                      EDC Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/s4e-club"
                      className="hover:text-red-600 transition-colors"
                    >
                      S4E Club
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/clubs/ester-society"
                      className="hover:text-red-600 transition-colors"
                    >
                      Ester Society
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">
                  Co-Curricular & Social Units Sports
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/student-life/nss"
                      className="hover:text-red-600 transition-colors"
                    >
                      NSS (National Service Scheme)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/student-life/ncc"
                      className="hover:text-red-600 transition-colors"
                    >
                      NCC (National Cadet Corps)
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Campus Facilities</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/facilities/hostels"
                      className="hover:text-red-600 transition-colors"
                    >
                      Hostels
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/facilities/dispensary"
                      className="hover:text-red-600 transition-colors"
                    >
                      Dispensary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/facilities/staff-residence"
                      className="hover:text-red-600 transition-colors"
                    >
                      Staff Residence
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/facilities/shopping-complex"
                      className="hover:text-red-600 transition-colors"
                    >
                      Shopping Complex
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/facilities/transportation"
                      className="hover:text-red-600 transition-colors"
                    >
                      Transportation Services
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">
                  Personal & Professional Development
                </p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/finishing-school"
                      className="hover:text-red-600 transition-colors"
                    >
                      Finishing School
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/skill-test"
                      className="hover:text-red-600 transition-colors"
                    >
                      Skill Test
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/swayam"
                      className="hover:text-red-600 transition-colors"
                    >
                      SWAYAM
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Wellbeing & Support</p>
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/manodarpan"
                      className="hover:text-red-600 transition-colors"
                    >
                      Manodarpan (Mental Health Support)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/anti-ragging"
                      className="hover:text-red-600 transition-colors"
                    >
                      Anti-Ragging Cell
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/grievance-redressal"
                      className="hover:text-red-600 transition-colors"
                    >
                      Grievance Redressal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link to="/alumni">
                <span>ALUMNI</span>
              </Link>
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
        <div className="absolute top-4 right-4 hidden md:block">
          <StickyActionIcons />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

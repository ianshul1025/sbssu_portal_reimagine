import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
      {/* Main Dropdown Menus */}
      {[
        {
          title: "Home",
          sections: [],
        },
        {
          title: "About Us",
          icon: "🔽",
          sections: [
            {
              heading: "Leadership",
              items: ["Chancellor", "Chairman", "Vice Chancellor", "Registrar"]
            },
            {
              heading: "Deans",
              items: ["Dean Planning", "Dean Academic", "Dean Welfare", "Dean R&D"]
            }
          ]
        },
        {
          title: "Academics",
          icon: "📘",
          sections: [
            {
              heading: "Departments",
              items: ["Applied Physics", "CSE", "ECE", "Mechanical Engg."]
            },
            {
              heading: "Academic Resources",
              items: ["Academic Calendar", "AISHE", "Examination"]
            }
          ]
        },
        {
          title: "Admissions",
          icon: "🎓",
          sections: [
            {
              heading: "UG",
              items: ["B.Tech CSE", "B.Tech ME", "BBA"]
            },
            {
              heading: "PG",
              items: ["MBA", "MCA", "M.Tech"]
            }
          ]
        }
      ].map((menu, index) => (
        <div key={index} className="relative group rounded-lg hover:bg-sb-darkRed px-5 pt-9 transition-all cursor-pointer">
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600  ">
            {/* <span>{menu.icon}</span> */}
            <span>{menu.title}</span>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white text-black shadow-xl rounded-lg p-4 grid grid-cols-2 gap-6 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {menu.sections.map((section, j) => (
              <div key={j}>
                <p className="font-bold mb-2">{section.heading}</p>
                <ul className="space-y-1">
                  {section.items.map((item, k) => (
                    <li key={k} className="hover:bg-sky-200 px-2 py-1 rounded-md cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Simple Links with Submenus */}
      {[
        {
          title: "Placements",
          icon: "💼",
          to: "/placements",
          submenu: ["Training", "Recruiters", "Placement Stats", "Career Cell"]
        },
        {
          title: "Campus Life",
          icon: "🏫",
          to: "/campus",
          submenu: ["Hostels", "Clubs", "Events"]
        },
        {
          title: "Alumni",
          icon: "👥",
          to: "/alumni",
          submenu: ["Alumni Portal", "Notable Alumni", "Contributions"]
        }
      ].map((menu, index) => (
        <div key={index} className="relative group rounded-lg hover:bg-'sb-darkRed': '#8B0000'
 px-5 pt-9 transition-all cursor-pointer">
          <Link to={menu.to} className="flex items-center gap-1">
            {/* <span>{menu.icon}</span> */}
            <span>{menu.title}</span>
          </Link>
          <div className="absolute  transform -translate-x-1/2 top-full mt-2 
                bg-white text-black shadow-xl rounded-lg p-4 grid grid-cols-2 gap-6 
                w-40 max-w-sm sm:max-w-md
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-200 z-50">

            <ul className="space-y-1 ">
              {menu.submenu.map((item, j) => (
                <li key={j} className="hover:bg-sky-200 w-33 px-2 py-1 rounded-md cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaSearch, FaPhoneAlt } from "react-icons/fa";

const StickyActionIcons = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col gap-4 pr-1">
      <div
        className="group flex items-center justify-end hover:scale-105 transition"
        onMouseEnter={() => setActive("location")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="bg-[#DB2121] text-white p-3 rounded-l-lg cursor-pointer">
          <FaMapMarkerAlt />
        </div>
        {active === "location" && (
          <Link
            to="https://maps.app.goo.gl/noQgQQ6rCu6me5g88"
            className="bg-[#DB2121] text-white px-3 py-2 rounded-l-lg ml-1 text-sm"
          >
            Locate Us
          </Link>
        )}
      </div>

      <div
        className="group flex items-center justify-end hover:scale-105 transition"
        onMouseEnter={() => setActive("search")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="bg-[#DB2121] text-white p-3 rounded-l-lg cursor-pointer">
          <FaSearch />
        </div>
        {active === "search" && (
  <input
    type="text"
    placeholder="Search..."
    className="ml-1 px-3 py-2 rounded-l-lg text-sm bg-white text-black w-40 focus:outline-none"
  />
)}

      </div>

      <div
        className="group flex items-center justify-end hover:scale-105 transition"
        onMouseEnter={() => setActive("contact")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="bg-[#DB2121] text-white p-3 rounded-l-lg cursor-pointer">
          <FaPhoneAlt />
        </div>
        {active === "contact" && (
          <Link
            to="/contact"
            className="bg-[#DB2121] text-white px-3 py-2 rounded-l-lg ml-1 text-sm"
          >
             0187-4292879
          </Link>
        )}
      </div>
    </div>
  );
};

export default StickyActionIcons;

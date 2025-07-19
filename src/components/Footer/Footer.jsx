import React from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#161c2d] text-white py-10 px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* University Info */}
      <div className="space-y-3">
        <img src="/logo192.png" alt="SBSSU Logo" className="h-20 w-auto" />
        <h2 className="font-semibold text-lg">Sardar Beant Singh State University</h2>
        <p>National Highway 15,<br />Gurdaspur, Punjab 143530</p>
        <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition duration-30"><FaPhone /> 0187-4292879</div>
        <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition duration-30"><FaEnvelope /> registrarsbssu@gmail.com</div>
        <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition duration-30"><FaGlobe /> <a href="http://www.sbssugsp.ac.in/" className="hover:underline">http://www.sbssugsp.ac.in/</a></div>
        <div className="flex gap-4 pt-2 text-xl">
          <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Quick Links 1 */}
      <div>
        <h3 className="text-lg font-semibold mb-2 border-b-2 border-red-600 w-fit">Quick Links 1</h3>
        <ul className=" space-y-2 text-sm">
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">Privacy Policy</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">Refund Policy</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">Terms Of Use</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">Anti-Ragging Guidelines And Policies</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">GRIEVANCE REDRESSAL</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">University Grants Commission(UGC)</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">UGC E-Resources Portal</li>
        </ul>
      </div>

      {/* Quick Links 2 */}
      <div>
        <h3 className="text-lg font-semibold mb-2 border-b-2 border-red-600 w-fit">Quick Links 2</h3>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">SWAYAM</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">Skill Test</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">National Academic Depository</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-30">UGC E-Samadhan Portal</li>
        </ul>
      </div>

      {/* Govt of Punjab & Branding */}
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-sm">Unit of</p>
          <p className="text-md font-semibold">Govt. of Punjab</p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Seal_of_Punjab.svg/2048px-Seal_of_Punjab.svg.png"
          alt="Punjab Government Seal"
          className="h-24 w-auto"
        />
        <img
          src="https://amritmahotsav.nic.in/writereaddata/portal/images/azadi-logo-color.png"
          alt="Azadi Ka Amrit Mahotsav"
          className="h-14 w-auto"
        />
      </div>
    
    </footer>
      <div className="bg-black text-white px-[40%] w-[100%]">
        <h4> &copy; All rights reserved </h4>
      </div>
      </>
  );
};

export default Footer;

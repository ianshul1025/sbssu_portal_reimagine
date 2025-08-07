import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  const footerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`w-full h-64 bg-center bg-cover transition-transform duration-[1200ms] ease-in-out ${
          inView ? "translate-y-0" : "translate-y-20"
        }`}
        style={{
          backgroundImage:
            "url('https://www.sbssugsp.ac.in/assets/images/footer/footer-bg1.png')",
        }}
      ></div>

      <footer
        ref={footerRef}
        className="bg-gray-900 text-white pt-7 pb-4 relative z-10 -mt-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <img
              src="https://www.sbssugsp.ac.in/assets/images/logo/beantunilogo.png"
              alt="University Logo"
              className="w-32 mb-4"
            />
            <div className="flex items-start space-x-2 mb-2">
              <FaMapMarkerAlt className="mt-1 text-green-400" />
              <a href="https://maps.app.goo.gl/noQgQQ6rCu6me5g88" className="hover:text-green-400">SBSSU, Gurdaspur, Punjab, India</a>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaPhoneAlt className="text-green-400" />
              <p>+91-1234567890</p>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaEnvelope className="text-green-400" />
              <p>registrarsbssu@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-green-400" />
              <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links 1</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Anti-Ragging Guidelines and Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Grievance Redressal
                </a>
              </li>
              <li>
                <a href="https://www.ugc.gov.in/" className="hover:text-green-400">
                  University Grants Commission (UGC)
                </a>
              </li>
              <li>
                <a href="http://www.ugceresources.in/" className="hover:text-green-400">
                  UGC E-Resources Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links 2</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://swayam.gov.in/" className="hover:text-green-400">
                  SWAYAM
                </a>
              </li>
              <li>
                <a href="https://www.youth4work.com/" className="hover:text-green-400">
                  Skill Test
                </a>
              </li>
              <li>
                <a href="https://nad.gov.in/" className="hover:text-green-400">
                  National Academic Depository
                </a>
              </li>
              <li>
                <a href="https://samadhaan.ugc.ac.in/" className="hover:text-green-400">
                  UGC e-Samadhan Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-green-400">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaYoutube />
              </a>
            </div>
            <a
              href="/brochure.pdf"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mb-4 transition"
            >
              Download Brochure
            </a>
            <div className="flex space-x-4">
              <img
                src="https://www.sbssugsp.ac.in/assets/images/punjabgovtlogo1.png"
                alt="Govt Punjab"
                className="w-16 h-auto"
              />
              <img
                src="https://www.sbssugsp.ac.in/assets/images/azadi-ka-amrit-mahotsav/logo.png"
                alt="Azadi Ka Amrit Mahotsav"
                className="w-16 h-auto"
              />
            </div>
          </div>
        </div>

        <div className="text-center  text-sm border-t border-gray-700 pt-2 mt-4">
          © 2025 Sardar Beant Singh State University. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import TopNews from "../components/TopNews";
import VideoWithNotifications from "../components/VideoWithNotifications";
import CampusPulse from "../components/CampusPulse";
import AboutAndVC from "../components/AboutAndVC";
import UniversityFacilities from "../components/UniversityFacilities";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-sb-cream overflow-x-hidden">
      <Navbar />
      <main>
        <ImageSlider />
        <TopNews />
        <VideoWithNotifications />
        <CampusPulse />
        <AboutAndVC />
        <UniversityFacilities />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

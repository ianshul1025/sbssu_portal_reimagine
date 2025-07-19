import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

import TopNews from "../components/TopNews";
import VideoWithNotifications from "../components/VideoWithNotifications";



const Home = () => {
  return (
    <div className="min-h-screen w-full bg-sb-cream">
     <main className="w-full h-[calc(100vh-5rem)] overflow-hidden">
        <ImageSlider />
      </main>

      <TopNews />
      <VideoWithNotifications />

     
    </div>
  );
};

export default Home;


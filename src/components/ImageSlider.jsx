import { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage2.jpg",
  "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage1-new.jpg",
  "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage4.jpg",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const fullImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 6000); // 6 seconds between slides

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(0);
      }, 3000); // match transition time
    } else {
      setIsAnimating(true);
    }
  }, [index]);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{
           transform: `translateX(-${index * 100}%)`,
          transition: isAnimating ? "transform 3s ease-in-out" : "none",
        }}
      >
        {fullImages.map((src, i) => (
          <img key={i} src={src} alt={`slide-${i}`} className="slider-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

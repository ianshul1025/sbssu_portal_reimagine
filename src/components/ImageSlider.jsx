import { useEffect, useRef, useState } from "react";
import "./ImageSlider.css";

const images = [
  "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage2.jpg",
  "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage1-new.jpg",
  "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage4.jpg",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const sliderRef = useRef(null);

  // Duplicate first image for smooth loop
  const fullImages = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000); // pause 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length) {
      // After showing clone, instantly jump to real first
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(0);
      }, 1000); // after transition ends
    } else {
      setIsAnimating(true);
    }
  }, [index]);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        ref={sliderRef}
        style={{
          transform: `translateX(-${index * 100}vw)`,
          transition: isAnimating ? "transform 1s ease-in-out" : "none",
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

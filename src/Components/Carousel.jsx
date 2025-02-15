import { useEffect, useState } from "react";

const images = [
  "image1.jpg", // Replace with your image URLs
  "image2.jpg",
  "image3.jpg"
];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default Carousel;
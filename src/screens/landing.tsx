import { useEffect, useState } from "react";
import text from '../assets/text-outlined.svg';
import './landing.css';

const CAPTIONS = [
  'Hi there! My name is Mhar. I`m a SWE based in NYC!',
  'I graduated with a B.S. and M.S. degrees in Computer Science from Stanford.',
  'I currently work as a frontend software engineer at Squarespace.',
  'I love art, graphic design, coffee and matcha, and good food!',
]

export const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change caption on ever 4 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % CAPTIONS.length);
    }, 4000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {/* <div className="text-container">
        <h1 className="text-outline">TECH + ART</h1>
      </div> */}

      <div className="image-section">
        <div className="top-attached-image-container">
          <img src={text} className="top-attached-image" />
        </div>
        <div className="halftone-bg" />
        <div className="subtitle">
          [ {CAPTIONS[index]} ]
        </div>
      </div>
    </div>
  )
}
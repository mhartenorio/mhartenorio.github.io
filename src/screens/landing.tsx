import { useEffect, useState } from "react";
import text from '../assets/text-outlined.svg';

import './landing.css';

const CAPTIONS = [
  'Hi there! My name is Mhar. I am a SWE + designer based in NYC.',
  'I graduated with a B.S./M.S. in Computer Science with an Art Minor from Stanford.',
  'I currently work as a frontend software engineer at Squarespace.',
  'I am also a cinephile, a foodie, a runner, and a pop culture enthusiast!',
]

export const Landing = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change caption on ever 4 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % CAPTIONS.length);
    }, 4500);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="subtitle subtitle-position">
          [ {CAPTIONS[index]} ]
        </div>

      </div>
      <div className="image-section">
        {/* <div className="top-attached-image-container">
          <img src={text} className="top-attached-image" />
        </div> */}
        <div className="halftone-bg" />
        {/* <div className="subtitle subtitle-position">
          [ {CAPTIONS[index]} ]
        </div> */}
      </div>
    </>
  )
}
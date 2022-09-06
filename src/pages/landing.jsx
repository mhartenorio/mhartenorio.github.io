import React from 'react';
import './landing.css';

import Header from '../components/header';
import ColorBox from '../components/colorbox';

class Landing extends React.Component {
  render() {
    return (
      <div className='screen'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="black" >
          <path fill="#FF0066" d="M43.3,-44.5C55.8,-41.2,65.4,-27.2,66.9,-12.6C68.5,1.9,62.1,17.1,54,31.1C45.8,45.2,35.8,58.1,22.7,63.3C9.6,68.5,-6.7,65.9,-15.1,56.4C-23.5,46.9,-24,30.5,-35.4,17.3C-46.8,4,-69.2,-6.1,-72.5,-17.2C-75.8,-28.4,-60.1,-40.6,-44.9,-43.4C-29.6,-46.2,-14.8,-39.6,0.3,-40C15.4,-40.3,30.9,-47.7,43.3,-44.5Z" transform="translate(0 100)" />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob' stroke="black">
          <path fill="#0F62FE" d="M43.3,-44.5C55.8,-41.2,65.4,-27.2,66.9,-12.6C68.5,1.9,62.1,17.1,54,31.1C45.8,45.2,35.8,58.1,22.7,63.3C9.6,68.5,-6.7,65.9,-15.1,56.4C-23.5,46.9,-24,30.5,-35.4,17.3C-46.8,4,-69.2,-6.1,-72.5,-17.2C-75.8,-28.4,-60.1,-40.6,-44.9,-43.4C-29.6,-46.2,-14.8,-39.6,0.3,-40C15.4,-40.3,30.9,-47.7,43.3,-44.5Z" transform="translate(170 0)" />
        </svg>
        <div className='landingContainer'>
          <div className='landingContent'>
            <ColorBox/>
            <div className='landingHeadline'>
              Hello,
            </div>
            <div className='landingSecondLine'>
              <span className='landingHeadline'>I&rsquo;m </span> 
              <span className='landingHeadlineMyName'>Mhar!</span>
            </div>
            <div className='landingSubheading'>
              <span className='landingSubHeadingText'>
                Mhar Tenorio is a junior at Stanford University 
                studying a combination of 
                Computer Science and Art. 
              </span>
            </div>
            <Header/>
            <div className='landingArrow'>Selected Works ↓</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

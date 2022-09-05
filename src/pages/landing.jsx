import React from 'react';
import './landing.css';

import Header from '../components/header';
import ColorBox from '../components/colorbox';

class Landing extends React.Component {
  render() {
    return (
      <div className='screen'>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

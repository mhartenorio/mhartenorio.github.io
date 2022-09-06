import React from 'react';
import './projects.css';

import pingImage from '../images/tech-header.png';
import photoAppImage from '../images/photo-app.png';
import websiteImage from '../images/website-header.png';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class Projects extends React.Component {
  render() {
    return (
      <div className='screen2' id='screen2'>
        <div className='projectsTitle'>
            Projects
        </div>

        {/* PING */}
        <div className='singleProject'>
            <div className='projectImage'><img src={pingImage}></img></div>
            <div className='projectText'>
                <div className='projectTitle' >Ping!</div>
                <div className='projectTools'>React Native</div>
                <div className='projectDesc'>I led the front-end development of a low-stress messaging system designed for long-distance relationships. Read more at our website. </div>
                <div className='projectLinks'>
                    <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo"><div className='projectTools'>→ Demo /</div></a>
                    <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo"><div className='projectTools'>&nbsp;GitHub /&nbsp;</div></a>
                    <a href="https://hci.stanford.edu/courses/cs147/2022/wi/projects/EasingLifeTransitions/Ping!/"><div className='projectTools'> Website</div></a>
                </div>
            </div>
        </div>
        
        {/* PHOTO APP */}
        <div className='singleProject'>
            <div className='projectImage'><img src={photoAppImage}></img></div>
            <div className='projectText'>
                <div className='projectTitle' >Photo Sharing Web App</div>
                <div className='projectTools'>Full MERN Stack</div>
                <div className='projectDesc'>I developed both the server-side and client-side of a photo sharing application that allows users to register, login, view friends profiles, and post, like, favorite, and comment on different photos. </div>
                <a href="https://youtu.be/zruWuQmHWa8"><div className='projectTools'>→ Demo</div></a>
            </div>
        </div>

        {/* WEBSITE */}
        <div className='singleProject'>
            <div className='projectImage'><img src={websiteImage}></img></div>
            <div className='projectText'>
                <div className='projectTitle' >Personal Website</div>
                <div className='projectTools'>React, JavaScript</div>
                <div className='projectDesc'> I designed and develop this personal website to serve as a portfolio.  </div>
                <a href="https://github.com/mhartenorio/mhartenorio.github.io"><div className='projectTools'>→ GitHub</div></a>
            </div>
        </div>
        <div className='projectDesign'>
            To see design work, click <a href="https://drive.google.com/drive/folders/1WeEJ8_xRmctUNa-umUSlV83ZKVjZCv6-?usp=sharing" target="_blank">→ HERE ←</a>
        </div>
      </div>
    );
  }
}

export default Projects;

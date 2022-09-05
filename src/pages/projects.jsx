import React from 'react';
import './projects.css';

import pingImage from '../images/tech-header.png';
import photoAppImage from '../images/photo-app.png';

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
                <div className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis ipsum consectetur turpis sagittis duis vel. Viverra quam convallis enim mattis. Malesuada mattis phasellus in massa volutpat. </div>
                <div className='projectLinks'>
                    <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo"><div className='projectTools'>→ Demo /</div></a>
                    <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo"><div className='projectTools'>&nbsp;GitHub /&nbsp;</div></a>
                    <a href="https://hci.stanford.edu/courses/cs147/2022/wi/projects/EasingLifeTransitions/Ping!/"><div className='projectTools'> Website</div></a>
                </div>
            </div>
        </div>
        
        {/* PHOTO APP */}
        <div className='singleProject'>
            <div className='projectImage'><img src={pingImage}></img></div>
            <div className='projectText'>
                <div className='projectTitle' >Photo Sharing Web App</div>
                <div className='projectTools'>Full MERN Stack</div>
                <div className='projectDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis ipsum consectetur turpis sagittis duis vel. Viverra quam convallis enim mattis. Malesuada mattis phasellus in massa volutpat. </div>
                <a href="https://youtu.be/zruWuQmHWa8"><div className='projectTools'>→ Demo</div></a>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;

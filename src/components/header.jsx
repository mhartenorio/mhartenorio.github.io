import React from 'react';
import './header.css';

import { BsLinkedin, BsGithub, BsPersonCircle } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

const scroll = () => {
  const section = document.getElementById( 'screen2' );
  section.scrollIntoView();
};

class Header extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='tabsContainer'>
            {/* <a href="/"><div className='tab'>Home</div></a>
            <a onclick="document.getElementById( 'screen2' ).scrollIntoView()"><div className='tab'>Projects</div></a>
            <a href="/about"><div className='tab'>Info</div></a> */}
            <div></div>
            <div></div>
            <a href="https://www.linkedin.com/in/mhar-tenorio-77852a228/"><div className='tab'><BsPersonCircle/></div></a> 
            <a href="https://www.linkedin.com/in/mhar-tenorio-77852a228/"><div className='tab'><BsLinkedin/></div></a> 
            <a href="https://github.com/mhartenorio"><div className='tab'><BsGithub/></div></a> 
            <a href="mailto:mhar@stanford.edu"><div className='tab'><AiFillMail/></div></a> 
            <div></div>
            <div></div>
        </div>
      </div>
    );
  }
}

export default Header;

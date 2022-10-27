import React from 'react';
import './header.css';

import { BsLinkedin, BsGithub, BsPersonCircle, BsFileEarmarkPdfFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { GrDocumentPdf } from 'react-icons/gr';



const scroll = () => {
  const section = document.getElementById( 'screen2' );
  section.scrollIntoView();
};

class Header extends React.Component {
  render() {
    return (
      <>
      <div className='container'>
        <div className='tabsContainer'>
            {/* <a href="/"><div className='tab'>Home</div></a>
            <a onclick="document.getElementById( 'screen2' ).scrollIntoView()"><div className='tab'>Projects</div></a>
            <a href="/about"><div className='tab'>Info</div></a> */}
            <div></div>
            <div></div>
            <a href="https://drive.google.com/file/d/1H3V5v_Uuwuqxi9T5-y1W73VBFBxcH-2u/view?usp=sharing" target="_blank"><div className='tab'><BsFileEarmarkPdfFill/></div></a> 
            <a href="https://www.linkedin.com/in/mhartenorio/" target="_blank"><div className='tab'><BsLinkedin/></div></a> 
            <a href="https://github.com/mhartenorio" target="_blank"><div className='tab'><BsGithub/></div></a> 
            <a href="mailto:mhar@stanford.edu"><div className='tab'><AiFillMail/></div></a> 
            <div></div>
            <div></div>
        </div>
      </div>
      </>
    );
  }
}

export default Header;

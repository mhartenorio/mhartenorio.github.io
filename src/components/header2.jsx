import React from 'react';
import './header2.css';
import Grid from '@mui/material/Grid';


import { BsLinkedin, BsGithub, BsPersonCircle } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { GrDocumentPdf } from 'react-icons/gr';

import { Link } from 'react-router-dom'


const scroll = () => {
  const section = document.getElementById('screen2');
  section.scrollIntoView();
};

const Header2 = ({ goToProjects }) => {
  return (
    <Grid container rowSpacing={2} alignItems="center" justifyContent="center" style={{ padding: "8px", marginTop: "4px" }}>
      <Grid item xs={12} sm={12} md={2}>
        {/* <a onClick={goToProjects}> */}
        <Link to="/projects">
          <div className='textButton'>
            Projects
          </div>
        </Link>
        {/* </a> */}
      </Grid>
      <Grid item xs={12} sm={12} md={2} >
        <Link to="/about">
          <div className='textButton'>
            About
          </div>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Header2;

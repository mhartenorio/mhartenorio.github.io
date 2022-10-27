import React from 'react';
import './header2.css';
import Grid from '@mui/material/Grid';


import { BsLinkedin, BsGithub, BsPersonCircle } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { GrDocumentPdf } from 'react-icons/gr';


const scroll = () => {
  const section = document.getElementById( 'screen2' );
  section.scrollIntoView();
};

class Header2 extends React.Component {
  render() {
    return (
      <Grid container rowSpacing={2} alignItems="center" justifyContent="center" style={{padding: "8px", marginTop: "4px"}}>
        <Grid item xs={12} sm={12} md={2}>
            <a href='/projects'>
            <div className='textButton'>
                Projects
            </div>
            </a>
        </Grid>
        <Grid item xs={12} sm={12} md={2} >
            <a href='/about'>
            <div className='textButton'>
                About
            </div>
            </a>
        </Grid>
      </Grid>
    );
  }
}

export default Header2;

import React from 'react';
import './landing.css';
import Grid from '@mui/material/Grid';


import Header from '../components/header';
import Header2 from '../components/header2';

import ColorBox from '../components/colorbox';

import blob from '../images/blob.svg'
import blob2 from '../images/blob2.svg'
import blob3 from '../images/blob3.svg'
import blob4 from '../images/blob4.svg'

import wave1 from '../images/wave1.svg'
import wave2 from '../images/wave2.svg'
import gradient from '../images/gradient.svg'
import mharImage from '../images/Mhar.png';



class Landing extends React.Component {
  render() {
    return (
      <div className='screen'>
        <img src={blob3} className='blob' style={{objectFit: "cover", width: "100%", height: "100vh", mixBlendMode: "multiply"}}></img>
        <img src={wave1} style={{objectFit: "cover", width: "100%", height: "100vh", position: "absolute", right: "8%" }}></img>
        <img src={wave2} style={{objectFit: "cover", width: "100%", height: "100vh", position: "absolute", left: "8%" }}></img>
        <div className='landingContainer'>
          <div style={{display: "flex", justifyContent: "center", width: "100%", marginBottom: "16px"}}>
            <img src={mharImage} className='mharImage2'/>
            </div>
            {/* <ColorBox/> */}
            <Grid container justifyContent="center">
              <Grid item md={12}>
              <div className='landingHeadline'>
              Hello,
            </div>
            <div className='landingSecondLine'>
              <span className='landingHeadline'>I&rsquo;m </span> 
              <span className='landingHeadlineMyName'>Mhar!</span>

              {/* <span className='landingHeadlineMyName'><span class="hiddentxt">Mhar!</span><span class="hiddenimg"><img src={mharImage} className='mharImage'/></span></span> */}
            </div>
           
            <div className='landingSubheading'>
              <span className='landingSubHeadingText'>
                Mhar Tenorio is a junior at Stanford University 
                studying a combination of 
                Computer Science and Art. 
              </span>
            </div>
             
              </Grid>
            </Grid>
            
            
            <Header/>
            
            {/* <div style={{height: "32px"}}/> */}
            <Header2/>
           
            {/* <div className='landingArrow'>Selected Works ↓</div> */}
          </div>
      </div>
    );
  }
}

export default Landing;

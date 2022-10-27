import React from 'react';
import './projects.css';
import Grid from '@mui/material/Grid';

import pingImage from '../images/tech-header.png';
import photoAppImage from '../images/photo-app.png';
import websiteImage from '../images/website-header.png';
import spotifyImage from '../images/spotify-header.png';

const Tabs = () => {
    return (
        <Grid container justifyContent='center'>
            <Grid item xs={4}>
            <a href="/">
                <div className='underlineButtonText' style={{marginTop: "64px"}}>
                    ← Home
                </div> 
             </a>
            </Grid>
            <Grid item xs={4}>
            <a href="/about">
                <div className='underlineButtonText' style={{marginTop: "64px"}}>
                    About →
                </div> 
             </a>
            </Grid>
        </Grid>
    )
}

/**
 * Define UserList, a React componment of CS142 project #5
 */
class Projects extends React.Component {
  render() {
    return (
      <div className='screen2' id='screen2'>
        
        <Tabs/>
        <div className='projectsTitle'>
            Projects
        </div>
        <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
            <Grid item xs={12} sm={12} md={4}>
            <img src={pingImage} className='projectImage'></img>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
            <div className='projectText'>
                <div className='projectTitle' >Ping!</div>
                <div className='projectTools'>React Native</div>
                <div className='projectDesc'>I led the front-end development of a low-stress messaging system designed for long-distance relationships. Read more at our website. </div>
                <div className='projectLinks'>
                    <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo" className='underlineButtonText'><div className='projectTools'>→ Demo /</div></a>
                    <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo" className='underlineButtonText'><div className='projectTools'>&nbsp;GitHub /&nbsp;</div></a>
                    <a href="https://hci.stanford.edu/courses/cs147/2022/wi/projects/EasingLifeTransitions/Ping!/" className='underlineButtonText'><div className='projectTools'> Website</div></a>
                </div>
            </div>
            </Grid>
        </Grid>

        <div style={{height: "64px"}}/>
        
        {/* PHOTO APP */}
        <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
            <Grid item xs={12} sm={12} md={4}>
            <img src={photoAppImage} className='projectImage'></img>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
            <div className='projectText'>
                <div className='projectTitle' >Photo Sharing Web App</div>
                <div className='projectTools'>Full MERN Stack</div>
                <div className='projectDesc'>I developed both the server-side and client-side of a photo sharing application that allows users to register, login, view friends profiles, and post, like, favorite, and comment on different photos. </div>
                <a href="https://youtu.be/zruWuQmHWa8"><div className='projectTools'>→ Demo</div></a>
            </div>
            </Grid>
        </Grid>

        <div style={{height: "64px"}}/>
        {/* SPOTIFY */}
        <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
            <Grid item xs={12} sm={12} md={4}>
            <img src={spotifyImage} className='projectImage'></img>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
            <div className='projectText'>
                <div className='projectTitle' >Spotify Top Tracks</div>
                <div className='projectTools'>React Native</div>
                <div className='projectDesc'> Utilizing the Spotify API, I developed an app that will let users connect their Spotify accounts and see their listening patterns.  </div>
                <a href="https://github.com/mhartenorio/Spotify-Top-Tracks"><div className='projectTools'>→ GitHub</div></a>
            </div>
            </Grid>
        </Grid>

        <Tabs/>

        <div style={{height: "32px"}}/>
        {/* <div className='projectDesign'>
            To see design work, click <a href="https://drive.google.com/drive/folders/1WeEJ8_xRmctUNa-umUSlV83ZKVjZCv6-?usp=sharing" target="_blank">→ HERE ←</a>
        </div> */}
      </div>
    );
  }
}

export default Projects;

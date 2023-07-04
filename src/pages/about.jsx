import React from 'react';
import './about.css';
import Grid from '@mui/material/Grid';
import mharImage from '../images/Mhar2.JPG';


import {Link} from 'react-router-dom'


const Tabs = () => {
    return (
        <Grid container justifyContent='center'>
            <Grid item xs={4}>
            <Link to="/">
                <div className='underlineButtonText' style={{marginTop: "64px"}}>
                    ← Home
                </div> 
             </Link>
            </Grid>
            <Grid item xs={4}>
            <Link to="/">
                <div className='underlineButtonText' style={{marginTop: "64px"}}>
                    Projects →
                </div> 
             </Link>
            </Grid>
        </Grid>
    )
}

/**
 * Define UserList, a React componment of CS142 project #5
 */
class About extends React.Component {
  render() {
    return (
        <div >
            
            <Tabs/>
            <div className='projectsTitle'>About Me</div>
            
            <Grid container direction="row" alignContent="center" justifyContent="center" style={{padding: "0 64px"}} columnSpacing={12} rowSpacing={8} >
                <Grid item xs={12} sm={12} md={4} alignContent="center" justifyContent="center">
                    <div style={{height: "100%", display: "flex", alignContent: "center"}}>
                        <img src={mharImage} className='projectImage' style={{objectFit: "cover"}}></img>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={8} style={{ textAlign: "left" }}>
                    <p>Hello there! I am Mhar. I'm a rising senior and I'm currently studying Computer Science with a concentration in Human-Computer Interaction and Art Practice at Stanford University.</p>
                    <p>I am interested in combining my skills as a human-centered designer and as a full-stack software developer to build websites and applications centered around social good and positive impact. I was previously an intern for an e-commerce start-up called <b>Purposer</b>, which is centered around purposeful spending and ethical consumption and will launch winter of 2022. I was also part of the tech and magazine team for the campus newspaper <b>The Stanford Daily</b>, which is a news source for 20,000+ students and staff.</p>
                    <p>As an artist, I love exploring first-generation immigrant identities, as someone who moved to the United States in 2015. I do mostly digital-based work that deal with time, memory, and ideas of home.</p>
                    <p>Outside of academics, I am invested in pop culture and listening to music! I geek over really cool graphic design or UI/UX design. I like dancing in my room and ranking things I like. </p>
                    <p><a href="https://open.spotify.com/user/mhartenorio?si=b4c1e8fe274f464d" className='underlineButtonText' style={{whiteSpace: "nowrap"}}>See what I'm listening to here!</a></p>
                    <p>:D</p>
                </Grid>
            </Grid>
            <div style={{height: "32px"}}/>
            <Tabs/>
            <div style={{height: "32px"}}/>
        </div>
    );
  }
}

export default About;

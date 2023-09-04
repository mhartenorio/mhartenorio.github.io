import React from 'react';
import './about.css';
import Grid from '@mui/material/Grid';
import mharImage from '../images/Mhar.png';
import mharImage2 from '../images/Mhar7.png';

import { Link } from 'react-router-dom'
import { Container, Typography, Stack, Box } from '@mui/material';
import {
  GREEN,
  ORANGE,
  YELLOW,
  BLUE,
  PINK,
  FONT_SIZE,
  IMAGE_SIZE,
  FONT_FAMILY
} from '../constants/constants'
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircleOutline';


import pingImage from '../images/tech-header.png';
import photoAppImage from '../images/photo-app.png';
import cs448bProjectImage from '../images/cs448b.png';
import spotifyImage from '../images/spotify-header.png';
import bospiesImage from '../images/bospies.png';

const Tabs = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={4}>
        <Link to="/">
          <div className='underlineButtonText' style={{ marginTop: "64px" }}>
            ← Home
          </div>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/about">
          <div className='underlineButtonText' style={{ marginTop: "64px" }}>
            About →
          </div>
        </Link>
      </Grid>
    </Grid>
  )
}

// class Projects extends React.Component {
//   render() {
//     return (
//       <div className='screen2' id='screen2'>

//         {/* <Tabs/> */}
//         <div style={{height: "64px"}}/>
//         <div className='projectsTitle'>
//             Projects
//         </div>
//         <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
//             <Grid item xs={12} sm={12} md={4}>
//             <img src={cs448bProjectImage} className='projectImage'></img>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//             <div className='projectText'>
//                 <div className='projectTitle' >Bay Area Food Finder</div>
//                 <div className='projectTools'>Javascript</div>
//                 <div className='projectDesc'>Using d3.js and a Yelp dataset, I implemented an interactive visualization software that shows all coffee shops, cafes, and bubble tea shops in a map of the Bay Area. This visualization will show shops that lie in the intersection of the two circles and satisfies the price, rating, and search constraints. </div>
//                 <div className='projectLinks'>
//                     <a href="https://mhartenorio.github.io/sf-restaurants-js/" className='underlineButtonText'><div className='projectTools'>→ Demo /</div></a>
//                     <a href="https://github.com/mhartenorio/sf-restaurants-js" className='underlineButtonText'><div className='projectTools'>&nbsp;GitHub</div></a>
//                 </div>
//             </div>
//             </Grid>
//         </Grid>
//         <div style={{height: "64px"}}/>
//         <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
//             <Grid item xs={12} sm={12} md={4}>
//             <img src={bospiesImage} className='projectImage'></img>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//             <div className='projectText'>
//                 <div className='projectTitle' >BOSPies</div>
//                 <div className='projectTools'>React</div>
//                 <div className='projectDesc'>Our team created a social computing system where Stanford students who are interested in study abroad and students who have previously done the program can connect.</div>
//                 <div className='projectLinks'>
//                     <a href="http://52.38.65.221" className='underlineButtonText'><div className='projectTools'>→ Demo /</div></a>
//                     <a href="https://github.com/DaivdYuan/Bospies" className='underlineButtonText'><div className='projectTools'>&nbsp;GitHub</div></a>
//                 </div>
//             </div>
//             </Grid>
//         </Grid>
//         <div style={{height: "64px"}}/>
//         <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
//             <Grid item xs={12} sm={12} md={4}>
//             <img src={pingImage} className='projectImage'></img>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//             <div className='projectText'>
//                 <div className='projectTitle' >Ping!</div>
//                 <div className='projectTools'>React Native</div>
//                 <div className='projectDesc'>I led the front-end development of a low-stress messaging system designed for long-distance relationships. Read more at our website. </div>
//                 <div className='projectLinks'>
//                     <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo" className='underlineButtonText'><div className='projectTools'>→ Demo /</div></a>
//                     <a href="https://www.youtube.com/watch?v=hd0-mZWdIDo" className='underlineButtonText'><div className='projectTools'>&nbsp;GitHub /&nbsp;</div></a>
//                     <a href="https://hci.stanford.edu/courses/cs147/2022/wi/projects/EasingLifeTransitions/Ping!/" className='underlineButtonText'><div className='projectTools'> Website</div></a>
//                 </div>
//             </div>
//             </Grid>
//         </Grid>

//         <div style={{height: "64px"}}/>

//         {/* PHOTO APP */}
//         <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
//             <Grid item xs={12} sm={12} md={4}>
//             <img src={photoAppImage} className='projectImage'></img>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//             <div className='projectText'>
//                 <div className='projectTitle' >Photo Sharing Web App</div>
//                 <div className='projectTools'>Full MERN Stack</div>
//                 <div className='projectDesc'>I developed both the server-side and client-side of a photo sharing application that allows users to register, login, view friends profiles, and post, like, favorite, and comment on different photos. </div>
//                 <a href="https://youtu.be/zruWuQmHWa8" className='underlineButtonText'><div className='projectTools'>→ Demo</div></a>
//             </div>
//             </Grid>
//         </Grid>

//         <div style={{height: "64px"}}/>
//         {/* SPOTIFY */}
//         <Grid container justifyContent='center' columnSpacing={4} style={{padding: "0 48px"}}>
//             <Grid item xs={12} sm={12} md={4}>
//             <img src={spotifyImage} className='projectImage'></img>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4}>
//             <div className='projectText'>
//                 <div className='projectTitle' >Spotify Top Tracks</div>
//                 <div className='projectTools'>React Native</div>
//                 <div className='projectDesc'> Utilizing the Spotify API, I developed an app that will let users connect their Spotify accounts and see their listening patterns.  </div>
//                 <a href="https://github.com/mhartenorio/Spotify-Top-Tracks" className='underlineButtonText'><div className='projectTools'>→ GitHub</div></a>
//             </div>
//             </Grid>
//         </Grid>

//         <div style={{height: "32px"}}/>

//         {/* <Tabs/> */}

//         {/* <div style={{height: "32px"}}/> */}
//         {/* <div className='projectDesign'>
//             To see design work, click <a href="https://drive.google.com/drive/folders/1WeEJ8_xRmctUNa-umUSlV83ZKVjZCv6-?usp=sharing" target="_blank">→ HERE ←</a>
//         </div> */}

//       </div>
//     );
//   }
// }

const Projects = ({ isLightMode, textColor }) => {
  return (
    <Container justifyContent='flex-start' sx={{
      minHeight: '100vh',
      width: {
        xs: '95vw',
        md: '75vw',
        lg: '54vw'
      },
      padding: '72px 0px'
    }}>
      <Box sx={{ cursor: 'pointer', background: BLUE, borderRadius: 200, width: 'fit-content', padding: '4px 16px' }}>
        <Link to="/">
          <Typography sx={{ color: 'white', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '18px' }}>← Home</Typography>
        </Link>
      </Box>
      <Stack direction='row' columnGap={2} alignItems='center' justifyContent='space-between' height='100%' mb={1}>
        {/* <Box sx={{ cursor: 'pointer', width: '100%', height: FONT_SIZE, background: PINK, borderRadius: 200 }}/> */}
        <Typography className='tab' sx={{
          fontFamily: FONT_FAMILY,
          whiteSpace: 'nowrap',
          alignItems: 'center',
          height: '100%',
          fontSize: FONT_SIZE,
          fontWeight: 300,
          letterSpacing: -2,
          color: textColor,
          mb: 1
        }}>
          Projects 🖼️
        </Typography>
      </Stack>
      <Stack direction='column'>
        <Box sx={{ border: '1px solid', borderColor: isLightMode ? 'black' : 'white', borderRadius: 200, width: 'fit-content', padding: '4px 16px', mb: 0 }} alignItems='center'>
          <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px' }}>Javascript</Typography>
        </Box>
        <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>Bay Area Food Finder</Typography>
        <img src={cs448bProjectImage} className='projectImage'></img>
        <Stack direction='row' columnGap={2} mt={2}>
          <a href="https://mhartenorio.github.io/sf-restaurants-js/" target="_blank">
            {/* <PlayCircleIcon className='tab' fontSize='large' htmlColor={textColor} /> */}
            <Box sx={{ cursor: 'pointer', background: textColor, borderRadius: 200, width: 'fit-content', padding: '4px 16px' }}>
            <Typography sx={{ color: isLightMode ? 'white' : 'black', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '18px' }}>Demo</Typography>
            </Box>
          </a>
          <a href="https://github.com/mhartenorio/sf-restaurants-js" target="_blank">
            <GitHubIcon className='tab' fontSize='large' htmlColor={textColor} />
          </a>
        </Stack>
        {/* <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '14px', mt: 2 }}>JAVASCRIPT</Typography> */}
        <Typography sx={{ fontFamily: "'Inter', sans-serif", textAlign: 'left', mt: 2, color: textColor }}>
          Using d3.js and a Yelp dataset, I implemented an interactive visualization software that shows all coffee shops, cafes, and bubble tea shops in a map of the Bay Area. This visualization will show shops that lie in the intersection of the two circles and satisfies the price, rating, and search constraints.
        </Typography>
        {/* <Stack direction='row' columnGap={1} rowGap={1} mt={1}>
          <Box sx={{ border: '1px solid black', borderRadius: 200, width: 'fit-content', padding: '4px 16px', mb: 0 }} alignItems='center'>
            <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px' }}>Demo</Typography>
          </Box>
          <Box sx={{ border: '1px solid black', borderRadius: 200, width: 'fit-content', padding: '4px 16px', mb: 0 }} alignItems='center'>
            <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px' }}>GitHub</Typography>
          </Box>
        </Stack> */}

      </Stack>
    </Container>
  )
}

export default Projects;

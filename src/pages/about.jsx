import React from 'react';
import './about.css';
import './projects.css';

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

const About = ({ textColor }) => {
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
      <Link to="/">
        <Box sx={{ cursor: 'pointer', background: PINK, borderRadius: 200, width: 'fit-content', padding: '4px 16px' }}>
          <Typography sx={{ color: 'black', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '18px' }}>← Home</Typography>
        </Box>
      </Link>
      <Stack direction='row' columnGap={2} alignItems='center' justifyContent='space-between' height='100%'>
        {/* <Box sx={{ cursor: 'pointer', width: '100%', height: FONT_SIZE, background: PINK, borderRadius: 200 }}/> */}
        <Typography className='tab' sx={{
          fontFamily: FONT_FAMILY,
          whiteSpace: 'nowrap',
          alignItems: 'center',
          height: '100%',
          fontSize: FONT_SIZE,
          fontWeight: 300,
          letterSpacing: -2,
          color: textColor
        }}>
          About ✨ Me
        </Typography>
      </Stack>
      <Stack direction='row' columnGap={2}>
        <Box
          className='backgroundChange'
          sx={{ width: '220px', height: '220px', objectFit: 'cover',  }}
        >
          <img src={mharImage} style={{ width: '220px', height: '220px', objectFit: 'cover', backgroundColor: GREEN }} />
        </Box>
        <Box
          className='backgroundChange'
          sx={{ width: '220px', height: '220px', objectFit: 'cover',  }}
        >
          <img src={mharImage2} style={{ width: '220px', height: '220px', objectFit: 'cover', backgroundColor: GREEN }} />
        </Box>
      </Stack>
      <br />
      <Stack direction='column' rowGap={2} sx={{ color: textColor }}>
        <Typography textAlign='left' sx={{ fontFamily: "'Inter', sans-serif", fontSize: '18px' }}>
          Hello there! I am <b>Mhar</b>. I'm a senior and I'm currently studying Computer Science with a concentration in Human-Computer Interaction and Artificial Intelligence, and Art Practice at Stanford University.
        </Typography>
        <Typography textAlign='left' sx={{ fontFamily: "'Inter', sans-serif", fontSize: '18px' }}>
          I am interested in combining my skills as a human-centered designer and as a full-stack software developer to build websites and applications centered around social good and positive impact.
          I was most recently a Software Engineer Intern for the frontend team at <a href='https://squarespace.com' target='_blank' style={{ display: 'inline-block', fontWeight: 'bold', color: textColor }}>Squarespace</a>,
          a website building tool used by over four million users worldwide. Before that, I was an intern for an e-commerce start-up called <a href='https://purposer.com' target='_blank' style={{ display: 'inline-block', fontWeight: 'bold', color: textColor }}>Purposer</a>,
          which is centered around purposeful spending and ethical consumption and launched winter of 2022.
        </Typography>
        <Typography textAlign='left' sx={{ fontFamily: "'Inter', sans-serif", fontSize: '18px' }}>
          As an artist, I love exploring first-generation immigrant identities, as someone who moved to the United States in 2015. I do mostly digital-based work that deal with time, memory, and ideas of home. <a href='https://mhar.squarespace.com' target='_blank' style={{ display: 'inline', fontWeight: 'bold', color: textColor }}>See my art and design work!</a>
        </Typography>
        <Typography textAlign='left' sx={{ fontFamily: "'Inter', sans-serif", fontSize: '18px' }}>
          Outside of academics, I am invested in pop culture and listening to music! I geek over really cool graphic design or UI/UX design. I like dancing in my room and ranking things I like. <a href='https://open.spotify.com/user/mhartenorio?si=b4c1e8fe274f464d&nd=1' target='_blank' style={{ display: 'inline', fontWeight: 'bold', color: textColor }}>See what I'm listening to!</a>
        </Typography>
      </Stack>
    </Container>

  )
}

export default About;

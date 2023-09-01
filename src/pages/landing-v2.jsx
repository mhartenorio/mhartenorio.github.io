import { Stack, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header';
import HeaderV3 from '../components/header3';
import Marquee from "react-fast-marquee";

const GREEN = '#B0EE00'
const ORANGE = '#EE4700'
const YELLOW = '#FFC700'
const BLUE = '#0043EE'
const PINK = '#FF0099'

const FONT_SIZE = {
  xs: '42px',
  sm: '60px',
  md: '72px'
}

const FONT_FAMILY = "'Overpass Mono', monospace"

const LandingV2 = () => {
  return (
    <Stack direction='column' rowGap={8} justifyContent='center'
      sx={{
        height: '100vh',
        width: {
          xs: '95vw',
          md: '75vw',
          lg: '54vw'
        }
      }}
    >
      <Marquee 
        pauseOnHover 
        gradient 
        gradientWidth={50} 
        // gradientColor={[255, 252, 243]}
      >
        <div>
          <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>
            {/* Hello! 👋 My name is Mhar Tenorio. 👨‍💻 I am a senior at Stanford University 🌲 studying a combination of Computer Science and Art.  */}
            👨‍💻👋 • CS + Art @ Stanford • Class of '24 • Frontend Engineer • Previously Squarespace and Purposer •&nbsp;
          </Typography>
        </div>
      </Marquee>
      <Stack rowGap={0} >
        <Stack direction='row' columnGap={3} >
          <div style={{ width: '100%', height: '85%', background: GREEN, borderRadius: 200 }} />
          <Typography sx={{
            fontFamily: FONT_FAMILY,
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE,
            fontWeight: 300,
            letterSpacing: -2
          }}>
            Hello! I'm
          </Typography>
        </Stack>
        <Stack direction='row' columnGap={3}>
          <Typography sx={{
            fontFamily: FONT_FAMILY,
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE,
            fontWeight: 800,
            letterSpacing: -2
          }}
          >
            Mhar Tenorio
          </Typography>
          <div style={{ width: '100%', height: '85%', background: ORANGE, borderRadius: 200 }} />
        </Stack>
        <Stack direction='row' columnGap={3}>
          <div style={{ width: '100%', height: '85%', background: YELLOW, borderRadius: 200 }} />
          <Typography className='tab' sx={{
            fontFamily: FONT_FAMILY,
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE,
            fontWeight: 300,
            letterSpacing: -2
          }}>
            Experience
          </Typography>
        </Stack>
        <Stack direction='row' columnGap={3}>
          <Typography className='tab' sx={{
            fontFamily: FONT_FAMILY,
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE,
            fontWeight: 300,
            letterSpacing: -2
          }}>
            Projects
          </Typography>
          <div style={{ width: '100%', height: '85%', background: BLUE, borderRadius: 200 }} />
        </Stack>
        <Stack direction='row' columnGap={3}>
          <div style={{ width: '100%', height: '85%', background: PINK, borderRadius: 200 }} />
          <Typography className='tab' sx={{
            fontFamily: FONT_FAMILY,
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE,
            fontWeight: 300,
            letterSpacing: -2
          }}>
            About Me
          </Typography>
        </Stack>
      </Stack>
      <HeaderV3 />
    </Stack>
  )
}

export default LandingV2;
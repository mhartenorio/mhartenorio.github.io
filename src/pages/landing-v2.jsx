import { Stack, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header';
import HeaderV3 from '../components/header3';
import Marquee from "react-fast-marquee";
import { DarkMode, LightMode } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';

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

// const FONT_FAMILY = "'Overpass Mono', monospace"
const FONT_FAMILY = 'Petrona'

const LandingV2 = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    if (isLightMode) {
      setTextColor('black');
      document.getElementsByClassName("App-header")[0].style.backgroundColor = "white";
    } else {
      setTextColor('white');
      document.getElementsByClassName("App-header")[0].style.backgroundColor = "#1E1E1E";
    }
  }, [isLightMode])

  return (
    <>
      <div
        onClick={() => setIsLightMode(!isLightMode)}
      >
        {isLightMode ?
          <>
            <LightMode fontSize='large' sx={{ position: 'absolute', top: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <LightMode fontSize='large' sx={{ position: 'absolute', top: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <LightMode fontSize='large' sx={{ position: 'absolute', bottom: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <LightMode fontSize='large' sx={{ position: 'absolute', bottom: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
          </>
          :
          <>
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'absolute', top: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'absolute', top: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'absolute', bottom: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'absolute', bottom: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
          </>
        }
      </div>
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
          gradientColor={isLightMode ? [255, 255, 255] : [30, 30, 30]}
        // gradientColor={[255, 252, 243]}
        >
          <Typography sx={{ fontSize: '24px', fontWeight: 500, color: textColor, fontFamily: 'inherit' }}>
            {/* Hello! 👋 My name is Mhar Tenorio. 👨‍💻 I am a senior at Stanford University 🌲 studying a combination of Computer Science and Art.  */}
            CS + Art @ Stanford • Class of '24 • Frontend Engineer • Previously Squarespace and Purposer •&nbsp;
          </Typography>
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
              letterSpacing: -2,
              color: textColor,
              // fontStyle: 'italic',
            }}>
              Hello! 👋 I'm
            </Typography>
          </Stack>
          <Stack direction='row' columnGap={3}>
            <Typography sx={{
              fontFamily: FONT_FAMILY,
              whiteSpace: 'nowrap',
              alignItems: 'center',
              height: '100%',
              fontSize: FONT_SIZE,
              // fontWeight: 600,
              letterSpacing: -2,
              color: textColor,
              // textDecoration: 'underline wavy violet',
              // fontStyle: 'italic',
              mb: 1
            }}
            >
              Mhar 👨‍💻 Tenorio
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
              letterSpacing: -2,
              color: textColor
            }}>
              Experience 💻
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
              letterSpacing: -2,
              color: textColor
            }}>
              🖼️ Projects
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
              letterSpacing: -2,
              color: textColor
            }}>
              About ✨ Me
            </Typography>
          </Stack>
        </Stack>
        <HeaderV3 textColor={textColor} />
      </Stack>
    </>
  )
}

export default LandingV2;
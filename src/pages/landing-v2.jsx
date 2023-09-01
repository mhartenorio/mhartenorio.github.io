import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header';
import HeaderV3 from '../components/header3';
import Marquee from "react-fast-marquee";
import { DarkMode, LightMode } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/Mhar.png';
import image2 from '../images/Mhar2.JPG';
import image3 from '../images/Mhar3.png';
import image4 from '../images/Mhar4.png';
import image5 from '../images/Mhar5.JPG';
import image6 from '../images/Mhar6.JPG';
import image7 from '../images/Mhar7.png';


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

const IMAGE_SIZE = {
  xs: '50px',
  sm: '68px',
  md: '80px'
}

const IMAGES_SLIDESHOW = [image1, image2, image3, image4, image5, image6, image7]

// const FONT_FAMILY = "'Overpass Mono', monospace"
const FONT_FAMILY = 'Petrona'

const LandingV2 = ({ isLightMode, textColor }) => {
  // const [waveClassName, setWaveClassName] = useState('wave');
  const [waveHover, setWaveHover] = useState(false);
  const [showMhar, setShowMhar] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   if (!showMhar) return;
    // const intervalId = setInterval(() => {
    //   console.log(currentIndex)
    //   if (currentIndex === IMAGES_SLIDESHOW.length - 1) {
    //     setCurrentIndex(0);
    //   }
    //   else {
    //     setCurrentIndex(currentIndex + 1);
    //   }
    //   return () => clearInterval(intervalId);
    // }, 1000)
  // }, [showMhar])

  return (
    <>
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
          <Stack direction='row' columnGap={2} >
            <div style={{ width: '100%', height: '85%', background: GREEN, borderRadius: 200 }} />
            <Typography
              sx={{
                fontFamily: FONT_FAMILY,
                whiteSpace: 'nowrap',
                alignItems: 'center',
                height: '100%',
                fontSize: FONT_SIZE,
                fontWeight: 300,
                letterSpacing: -2,
                color: textColor,
                // fontStyle: 'italic',
              }}
              // onMouseEnter={() => setWaveClassName('')}
              // onMouseLeave={() => setWaveClassName('wave')}
              onMouseEnter={() => setWaveHover(true)}
              onMouseLeave={() => setWaveHover(false)}
            >
              Hello! <span class={'wave'}>{waveHover ? '🤝' : '👋'}</span> I'm
            </Typography>
          </Stack>
          <Stack direction='row' columnGap={2}>
            <Typography
              sx={{
                fontFamily: FONT_FAMILY,
                whiteSpace: 'nowrap',
                alignItems: 'center',
                height: '100%',
                fontSize: FONT_SIZE,
                // fontWeight: 600,
                letterSpacing: -2,
                color: textColor,
                alignItems: 'center'
              }}
              onMouseEnter={() => setShowMhar(true)}
              onMouseLeave={() => setShowMhar(false)}
            >
              Mhar&nbsp;
              {!showMhar ? (
                <Box
                  component="img"
                  sx={{ width: IMAGE_SIZE, height: IMAGE_SIZE, display: 'inline-block', mb: -1, objectFit: 'cover' }}
                  src={image1}
                />
              ) : (
                // <Box
                //   component="img"
                //   sx={{ width: IMAGE_SIZE, height: IMAGE_SIZE, display: 'inline-block', mb: -1, objectFit: 'cover' }}
                //   src={image1}
                // />
                <span>👨‍💻</span>
              )}
              &nbsp;Tenorio
            </Typography>
            <div style={{ width: '100%', height: '85%', background: ORANGE, borderRadius: 200 }} />
          </Stack>
          <Stack direction='row' columnGap={2}>
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
          <Stack direction='row' columnGap={2}>
            <Link to='/'>
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
            </Link>
            <div style={{ width: '100%', height: '85%', background: BLUE, borderRadius: 200 }} />
          </Stack>
          <Stack direction='row' columnGap={2}>
            <div style={{ width: '100%', height: '85%', background: PINK, borderRadius: 200 }} />
            <Link to='/'>
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
            </Link>
          </Stack>
        </Stack>
        <HeaderV3 textColor={textColor} />
      </Stack>
    </>
  )
}

export default LandingV2;
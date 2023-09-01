import { Stack, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header';
import HeaderV3 from '../components/header3';

const GREEN = '#B0EE00'
const ORANGE = '#EE4700'
const YELLOW = '#FFC700'
const BLUE = '#0043EE'
const PINK = '#FF0099'

const FONT_SIZE = {
  xs: '48px',
  sm: '60px',
  md: '68px'
}

const LandingV2 = () => {
  return (
    <Stack direction='column' rowGap={8} justifyContent='center' 
      sx={{ 
        height: '100vh', 
        width: {
          xs: '95vw',
          md: '75vw',
          lg: '50vw'
        } 
      }}
    >
      <marquee>Hello! My name is Mhar Tenorio. I am a senior at Stanford University studying a combination of Computer Science and Art.</marquee>
      <Stack rowGap={2} >
        <Stack direction='row' columnGap={3} >
          <div style={{ width: '100%', background: GREEN, borderRadius: 200 }} />
          <Typography sx={{
            fontFamily: "Overpass Mono",
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE
          }}>
            Hello! I'm
          </Typography>
        </Stack>
        <Stack direction='row' columnGap={3} >
          <Typography sx={{
            fontFamily: "Overpass Mono",
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE,
            fontWeight: 700
          }}>
            Mhar Tenorio
          </Typography>
          <div style={{ width: '100%', background: ORANGE, borderRadius: 200 }} />
        </Stack>
        <Stack direction='row' columnGap={3}>
          <div style={{ width: '100%', background: YELLOW, borderRadius: 200 }} />
          <Typography sx={{
            fontFamily: "Overpass Mono",
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE
          }}>
            Experience
          </Typography>
        </Stack>
        <Stack direction='row' columnGap={3}>
          <Typography sx={{
            fontFamily: "Overpass Mono",
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE
          }}>
            Projects
          </Typography>
          <div style={{ width: '100%', background: BLUE, borderRadius: 200 }} />
        </Stack>
        <Stack direction='row' columnGap={3}>
          <div style={{ width: '100%', background: PINK, borderRadius: 200 }} />
          <Typography sx={{
            fontFamily: "Overpass Mono",
            whiteSpace: 'nowrap',
            alignItems: 'center',
            height: '100%',
            fontSize: FONT_SIZE
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
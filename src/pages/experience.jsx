import React from 'react';
import './projects.css';

import { Link } from 'react-router-dom'
import { Container, Typography, Stack, Box } from '@mui/material';
import {
  GREEN,
  ORANGE,
  YELLOW,
  BLUE,
  BLACK,
  PINK,
  FONT_SIZE,
  IMAGE_SIZE,
  FONT_FAMILY
} from '../constants/constants'

const Experience = ({ isLightMode, textColor }) => {
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
      <Box sx={{ cursor: 'pointer', background: YELLOW, borderRadius: 200, width: 'fit-content', padding: '4px 16px' }}>
        <Link to="/">
          <Typography sx={{ color: 'black', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '18px' }}>← Home</Typography>
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
          Experience 💻
        </Typography>
      </Stack>
    </Container>
  )
}

export default Experience;
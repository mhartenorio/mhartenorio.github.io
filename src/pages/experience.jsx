import React from 'react';
import './projects.css';

import { Link } from 'react-router-dom';
import sqsp from '../images/sqsp.jpg';
import purposer from '../images/purposer-pink.png';
import sd from '../images/sd-color.png';
import anderson from '../images/anderson-color.png';
import dfa from '../images/dfa-color.png';
import { Container, Typography, Stack, Box, Divider, Grid } from '@mui/material';
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
import HeaderV3 from '../components/header3';

const VerticalLine = ({ isLightMode }) => {
  return (
    <Box sx={{
      height: '100%',
      width: '2px',
      backgroundColor: isLightMode ? BLACK : 'white',
      position: 'relative',
      '&::before': {
        sm: {
          position: 'absolute',
          bottom: '-6px',
          left: -4,
          height: '10px',
          width: '10px',
          background: isLightMode ? BLACK : 'white',
          content: '""',
          borderRadius: '5px'
        }
      },
      '&::after': {
        sm: {
          position: 'absolute',
          top: '-6px',
          left: -4,
          top: 0,
          height: '10px',
          width: '10px',
          background: isLightMode ? BLACK : 'white',
          content: '""',
          borderRadius: '5px'
        }
      }
    }}
    />
  )
}

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
      <Link to="/">
        <Box sx={{ cursor: 'pointer', background: YELLOW, borderRadius: 200, width: 'fit-content', padding: '4px 16px' }}>
          <Typography sx={{ color: 'black', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '18px' }}>← Home</Typography>
        </Box>
      </Link>
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

      {/* PROFESSIONAL */}
      <Typography sx={{ textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: 'left', color: textColor }}>Professional</Typography>
      <Divider sx={{ mt: 1, mb: 4, background: isLightMode ? '#F0F0F0' : 'white' }} />

      {/* SQUARESPACE */}
      <Stack direction='row' columnGap={2} alignItems='center'>
        <a href='https://squarespace.com' target='_blank'>
          <Box
            component="img"
            sx={{ maxHeight: '102px', height: '100%', borderRadius: '0' }}
            src={sqsp}
            className='backgroundChange'
          />
        </a>
        <div>
          <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>Squarespace</Typography>
          <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left', fontWeight: 'bold' }}>Software Engineer Intern</Typography>
          <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>06/23 - 08/23</Typography>
        </div>
      </Stack>
      <Box sx={{ mt: 2, width: { sm: '50vw', md: '35vw' }, color: textColor }}>
        <Typography textAlign='left'>
          • Join the frontend team to create website building tools used by over 4 million users worldwide.
        </Typography>
        <Typography textAlign='left'>
          • Take leadership of the implementation and shipment of a feature to production that is used at least 590,000 times every month from the bottom up, utilizing TypeScript and an internal component library.
        </Typography>
        <Typography textAlign='left'>
          • Collaborate cross-functionally with product designers, managers, and test engineers to improve user experience by reducing the time to complete a task by almost 50%.
        </Typography>
      </Box>
      <br />

      {/* PURPOSER */}
      <Grid container>
        <Grid container item xs={0} sm={5} md={5} justifyContent='center' alignItems='center'>
          <VerticalLine isLightMode={isLightMode} />
        </Grid>
        <Grid item sm={7} md={7}>
          <Container disableGutters >
            <Stack direction='row' columnGap={2} alignItems='center' >
              <a href='https://purposer.com' target='_blank'>
                <Box
                  component="img"
                  sx={{ maxHeight: '102px', height: '100%', borderRadius: '0' }}
                  src={purposer}
                  className='backgroundChange'
                />
              </a>
              <div>
                <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>Purposer</Typography>
                <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left', fontWeight: 'bold' }}>Software Engineer Intern</Typography>
                <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>09/22 - 06/23</Typography>
              </div>
            </Stack>
            <Container sx={{ mt: 2, width: { sm: '50vw', md: '35vw' }, ml: 0, pl: 0, color: textColor }} disableGutters>
              <Typography textAlign='left' sx={{ mr: 0, paddingRight: 0 }}>
                • Develop in an e-commerce start-up based around purposeful spending that benefit different social movements.
              </Typography>
              <Typography textAlign='left'>
                • Contribute in full-stack development to kickstart the product launch in late 2022, with about 700+ seller sign-ups.
              </Typography>
              <Typography textAlign='left'>
                • Build 50+ interfaces, components, and data visualizations to create human-centered user interactions from scratch using multiple React libraries.
              </Typography>
            </Container>
          </Container>
        </Grid>
      </Grid>
      <br />

      <Typography sx={{ textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: 'left', color: textColor }}>Activities</Typography>
      <Divider sx={{ mt: 1, mb: 4, background: isLightMode ? '#F0F0F0' : 'white' }} />

      {/* THE STANFORD DAILY */}
      <Stack direction='row' columnGap={2} alignItems='center'>
        <a href='https://stanforddaily.com' target='_blank'>
          <Box
            component="img"
            sx={{ maxHeight: '102px', height: '100%', borderRadius: '0' }}
            src={sd}
            className='backgroundChange'
          />
        </a>
        <div>
          <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>The Stanford Daily</Typography>
          <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left', fontWeight: 'bold' }}>Graphics &amp; Layout Magazine Editor</Typography>
          <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>06/21 - 06/22</Typography>
        </div>
      </Stack>
      <Box sx={{ mt: 2, width: { sm: '50vw', md: '35vw' }, color: textColor }}>
        <Typography textAlign='left'>
          • Spearhead the visual, graphic, and layout design of the magazine distributed to 2,000+ students and staff.
        </Typography>
        <Typography textAlign='left'>
          • Satisfy writer and editor needs in finding and designing graphics to accompany published articles.
        </Typography>
      </Box>
      {/* <Container sx={{mt: 2}} disableGutters>
        <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left', fontWeight: 'bold' }}>Tech Member</Typography>
        <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>10/22 - 11/22</Typography>
      </Container>
      <Box sx={{ mt: 2, width: { sm: '50vw', md: '35vw' }, color: textColor }}>
        <Typography textAlign='left'>
          • Join a small team of developers to maintain and implement user interface modifications to the campus publication website and mobile application with about 100,000+ visitors daily.
        </Typography>
      </Box> */}
      <br />

      {/* ANDERSON COLLECTION */}
      <Grid container>
        <Grid container item xs={0} sm={5} md={5} justifyContent='center' alignItems='center'>
          <VerticalLine isLightMode={isLightMode} />
        </Grid>
        <Grid item sm={7} md={7}>
          <Container disableGutters >
            <Stack direction='row' columnGap={2} alignItems='center' >
              <a href='https://anderson.stanford.edu/' target='_blank'>
                <Box
                  component="img"
                  sx={{ maxHeight: '102px', height: '100%', borderRadius: '0' }}
                  src={anderson}
                  className='backgroundChange'
                />
              </a>
              <div>
                <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>Anderson Collection</Typography>
                <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left', fontWeight: 'bold' }}>Design Intern</Typography>
                <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>10/21 - 06/22</Typography>
              </div>
            </Stack>
            <Container sx={{ mt: 2, width: { sm: '50vw', md: '35vw' }, ml: 0, pl: 0, color: textColor }} disableGutters>
              <Typography textAlign='left' sx={{ mr: 0, paddingRight: 0 }}>
                • Designed high-visibility promotional posts, merchandise, posters for the museum.
              </Typography>
              <Typography textAlign='left' sx={{ mr: 0, paddingRight: 0 }}>
                • Help in holding events increasing visibility and accessibility to the art scene.
              </Typography>
            </Container>
          </Container>
        </Grid>
      </Grid>
      <br />

      {/* DESIGN FOR AMERICA - DFA */}
      <Stack direction='row' columnGap={2} alignItems='center'>
        <a href='https://m.facebook.com/DFAStanford/' target='_blank'>
          <Box
            component="img"
            sx={{ maxHeight: '102px', height: '100%', borderRadius: '0' }}
            src={dfa}
            className='backgroundChange'
          />
        </a>
        <div>
          <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>Design for America</Typography>
          <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left', fontWeight: 'bold' }}>UI/UX Design Member</Typography>
          <Typography sx={{ color: textColor, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>11/21 - 04/22</Typography>
        </div>
      </Stack>
      <Box sx={{ mt: 2, width: { sm: '50vw', md: '35vw' }, color: textColor }}>
        <Typography textAlign='left'>
          • Collaborated with the Cantor Arts Center to increase younger engagement in the arts incorporating the design-thinking process through iterations of needfinding and prototyping with a group of four students.
        </Typography>
      </Box>
      <br />

      {/* SKILLS */}
      <Typography sx={{ textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: 'left', color: textColor }}>Skills</Typography>
      <Divider sx={{ mt: 1, mb: 3, background: isLightMode ? '#F0F0F0' : 'white' }} />
      <Typography sx={{ color: textColor, fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>
        <b>Languages: </b> Typescript/JavaScript (React, React Native), HTML, CSS, Python, C, C++, SQL
      </Typography>
      <Typography sx={{ color: textColor, fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>
        <b>Tools: </b> Git, GitHub, Figma, Adobe Photoshop, Adobe InDesign, Adobe XD, Blender
      </Typography>
      <br/>

      <Typography sx={{ textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: 'left', color: textColor }}>Relevant Coursework</Typography>
      <Divider sx={{ mt: 1, mb: 3, background: isLightMode ? '#F0F0F0' : 'white' }} />
      <Typography sx={{ color: textColor, fontFamily: "'Inter', sans-serif", textAlign: 'left' }}>
      Introduction to Human Computer Interaction, Web Applications, Cross-Platform Mobile Development, Social Computing, Data Visualization, Design and Analysis of Algorithms, Computer Organization and Systems, Introduction to Probability for Computer Scientists, Languages to Information, Modern Algorithmic Toolbox, Operating System Principles, Mathematical Foundations of Computing, Data as Material, Creativity in the Age of Facebook
      </Typography>

      <br/>
      <br/>
      <HeaderV3 textColor={textColor} />
    </Container>
  )
}

export default Experience;
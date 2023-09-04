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
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


import pingImage from '../images/tech-header.png';
import photoAppImage from '../images/photo-app.png';
import cs448bProjectImage from '../images/cs448b.png';
import spotifyImage from '../images/spotify-header.png';
import bospiesImage from '../images/bospies.png';

const OutlinedChip = ({ text, isLightMode, textColor }) => {
  return (
    <Box sx={{ border: '1px solid', borderColor: isLightMode ? 'black' : 'white', borderRadius: 200, width: 'fit-content', padding: '4px 16px', maxHeight: "22px" }} alignItems='center'>
      <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px' }}>{text}</Typography>
    </Box>
  )
}

const ProjectCard = ({ isLightMode, textColor, projectImage, title, description, demoLink, githubLink, language }) => {
  return (
    <Grid container mt={6} columnSpacing={4}>
      <Grid item xs={12} md={7}>
        <img src={projectImage} className='projectImage' style={{ width: '100%', height: '100%', objectFit: 'cover' }}></img>
      </Grid>
      <Grid item xs={12} md={5} sx={{mt: {xs: 2, md: 0}}}>
        <OutlinedChip text={language} isLightMode={isLightMode} textColor={textColor} />
        <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>{title}</Typography>
        <Typography sx={{ fontFamily: "'Inter', sans-serif", textAlign: 'left', mt: 0, color: textColor }}>
          {description}
        </Typography>
        <Stack direction='row' columnGap={1} rowGap={1} mt={1}>
          {demoLink &&
            <a href={demoLink} target="_blank">
              <PlayCircleIcon className='tab' fontSize='large' htmlColor={textColor} />
            </a>
          }
          {githubLink &&
            <a href={githubLink} target="_blank">
              <GitHubIcon className='tab' fontSize='large' htmlColor={textColor} />
            </a>
          }
        </Stack>
      </Grid>
    </Grid>
  )
}

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
        <OutlinedChip text='Javascript' isLightMode={isLightMode} textColor={textColor} />
        <Typography sx={{ color: textColor, textAlign: 'left', fontFamily: "Petrona", fontSize: '36px', fontStyle: 'italic' }}>Bay Area Food Finder</Typography>
        <img src={cs448bProjectImage} className='projectImage'></img>
        {/* <Stack direction='row' columnGap={2} mt={2}>
          <a href="https://mhartenorio.github.io/sf-restaurants-js/" target="_blank">
            <Box sx={{ cursor: 'pointer', background: textColor, borderRadius: 200, width: 'fit-content', padding: '4px 16px' }}>
              <Typography sx={{ color: isLightMode ? 'white' : 'black', textAlign: 'left', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px' }}>Demo</Typography>
            </Box>
          </a>
          <a href="https://github.com/mhartenorio/sf-restaurants-js" target="_blank">
            <GitHubIcon className='tab' fontSize='large' htmlColor={textColor} />
          </a>
        </Stack> */}
        {/* <PlayCircleIcon className='tab' fontSize='large' htmlColor={textColor} /> */}
        <Typography sx={{ fontFamily: "'Inter', sans-serif", textAlign: 'left', mt: 2, color: textColor }}>
          Using d3.js and a Yelp dataset, I implemented an interactive visualization software that shows all coffee shops, cafes, and bubble tea shops in a map of the Bay Area. This visualization will show shops that lie in the intersection of the two circles and satisfies the price, rating, and search constraints.
        </Typography>

        <Stack direction='row' columnGap={1} rowGap={1} mt={1}>
          <a href="https://mhartenorio.github.io/sf-restaurants-js/" target="_blank">
            <PlayCircleIcon className='tab' fontSize='large' htmlColor={textColor} />
          </a>
          <a href="https://github.com/mhartenorio/sf-restaurants-js" target="_blank">
            <GitHubIcon className='tab' fontSize='large' htmlColor={textColor} />
          </a>
        </Stack>
      </Stack>
      <ProjectCard
        isLightMode={isLightMode}
        textColor={textColor}
        title={'BOSPies'}
        projectImage={bospiesImage}
        description='Our team created a social computing system where Stanford students who are interested in study abroad and students who have previously done the program can connect.'
        demoLink={'http://52.38.65.221'}
        githubLink='https://github.com/DaivdYuan/Bospies'
        language='React'
      />
      <ProjectCard
        isLightMode={isLightMode}
        textColor={textColor}
        title={'Ping!'}
        projectImage={pingImage}
        description='I led the front-end development of a low-stress messaging system designed for long-distance relationships. Read more at our demo website.'
        demoLink={'https://hci.stanford.edu/courses/cs147/2022/wi/projects/EasingLifeTransitions/Ping!/'}
        githubLink='https://github.com/mhartenorio/Ping'
        language='React Native'
      />
      <ProjectCard
        isLightMode={isLightMode}
        textColor={textColor}
        title={'Photo Sharing'}
        projectImage={photoAppImage}
        description='I developed both the server-side and client-side of a photo sharing application that allows users to register, login, view friends profiles, and post, like, favorite, and comment on different photos.'
        demoLink={'https://youtu.be/zruWuQmHWa8'}
        // githubLink='https://github.com/mhartenorio/Ping'
        language='Full MERN Stack'
      />
      <ProjectCard
        isLightMode={isLightMode}
        textColor={textColor}
        title={'Spotify Top Tracks'}
        projectImage={spotifyImage}
        description='Utilizing the Spotify API, I developed an app that will let users connect their Spotify accounts and see their listening patterns.'
        // demoLink={'https://youtu.be/zruWuQmHWa8'}
        githubLink='https://github.com/mhartenorio/Spotify-Top-Tracks'
        language='React Native'
      />
    </Container>
  )
}

export default Projects;

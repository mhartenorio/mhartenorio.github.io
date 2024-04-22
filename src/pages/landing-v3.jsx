import './landing-animations.css';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import HeaderV3 from '../components/header3';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/Mhar.png';
import image2 from '../images/Mhar2.JPG';
import image3 from '../images/Mhar3.png';
import image4 from '../images/Mhar4.png';
import image5 from '../images/Mhar5.JPG';
import image6 from '../images/Mhar6.JPG';
import image7 from '../images/Mhar7.png';
import gif from '../images/Mhar-GIF.gif';
import {
    GREEN,
    ORANGE,
    YELLOW,
    BLUE,
    PINK,
    FONT_SIZE_V3,
    FONT_FAMILY,
    IMAGE_SIZE_V3
} from '../constants/constants'
import { useEffect } from 'react';

const IMAGES_SLIDESHOW = [image1, image2, image3, image4, image5, image6, image7]

const MQ_FONT_SIZE = {
    xs: '20px',
    sm: '20px',
    md: '24px'
}

const FONT_SIZE = FONT_SIZE_V3;
const IMAGE_SIZE = IMAGE_SIZE_V3;

// const STYLISH_FONT = "'Scrouble Outline', sans-serif" ;
const STYLISH_FONT = FONT_FAMILY;

const BUTTONS = [
    {
        emoji: '💼',
        title: 'Experience',
        buttonColor: YELLOW,
        link: '/experience'
    },
    {
        emoji: '💻',
        title: 'Projects',
        buttonColor: BLUE,
        link: '/projects'
    },
    {
        emoji: '🤓',
        title: 'About Me',
        buttonColor: ORANGE,
        link: '/about'
    }
]

const LandingV3 = ({ isLightMode, textColor }) => {
    const [waveHover, setWaveHover] = useState(false);
    const [showMhar, setShowMhar] = useState(false);
    const [buttonTitleHover, setButtonTitleHover] = useState(null);
    const [showButtonTitle, setShowButtonTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setShowButtonTitle((showButtonTitle + 1) % BUTTONS.length), 2000);
        return () => {
            clearInterval(interval);
        };
    }, [showButtonTitle]);

    return (
        <div style={{overflow: 'auto'}}>
            <div className='butterfly'>🦋</div>
            <div className='butterfly-sparkle'>🐛</div>
            <div className='bee'>🐝</div>
            <div className='bee-sparkle'>🍯</div>
            <div className='fairy'>🧚‍♀️</div>
            <div className='fairy-sparkle'>✨</div>

            {/* <div class="dot"></div> */}
            <Stack direction={{ xs: 'column-reverse', md: 'column' }} justifyContent={{ xs: 'center', md: 'space-between' }}
                sx={{
                    height: '100vh',
                    width: {
                        xs: '95vw',
                        // md: '75vw',
                        // lg: '54vw'
                    }
                }}
            >
                <Grid container direction={{ xs: 'row', md: 'row' }} justifyContent='space-between' sx={{ mt: 4 }} rowSpacing={4}>
                    <div>
                        <Typography sx={{
                            fontFamily: FONT_FAMILY,
                            // fontSize: "24px",
                            fontWeight: 500,
                            letterSpacing: -1,
                            color: textColor,
                            mb: 1
                        }}>
                            Experiences, projects, and about me...
                        </Typography>

                        <Stack direction={{ xs: 'row', md: 'row' }} rowGap={2} columnGap={2}>
                            {BUTTONS.map((buttonInfo, i) => {
                                return (
                                    <Link to={buttonInfo.link} key={i}>
                                    <Stack
                                        direction="row"
                                        columnGap={2}
                                        alignItems="center"
                                        onMouseEnter={() => setButtonTitleHover(buttonInfo.title)}
                                        onMouseLeave={() => setButtonTitleHover(null)}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <Box
                                            // className='backgroundChange'
                                            sx={{
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '50%',
                                                backgroundColor: buttonInfo.buttonColor,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: "2rem"
                                            }}
                                        >
                                            {buttonInfo.emoji}
                                        </Box>
                                        {buttonTitleHover && buttonTitleHover === buttonInfo.title ?
                                            <Typography
                                                sx={{
                                                    fontFamily: FONT_FAMILY,
                                                    whiteSpace: 'nowrap',
                                                    alignItems: 'center',
                                                    height: '100%',
                                                    fontSize: "48px",
                                                    fontWeight: 300,
                                                    letterSpacing: -2,
                                                    color: textColor,
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {buttonInfo.title}
                                            </Typography>
                                            :
                                            <></>
                                        }

                                    </Stack>
                                    </Link>
                                )
                            })}
                        </Stack>
                    </div>
                    <Grid item xs={12} md={4}>
                        <Stack direction="column">
                            <Typography
                                sx={{
                                    fontFamily: FONT_FAMILY,
                                    // whiteSpace: 'nowrap',
                                    alignItems: 'center',
                                    height: '100%',
                                    fontSize: "24px",
                                    fontWeight: 500,
                                    letterSpacing: -1,
                                    color: textColor,
                                    lineHeight: 1.0,
                                    textAlign: { xs: 'left', md: 'right' }
                                }}
                            >
                                Hello there! I am <i>Mhar</i>. I'm studying Computer Science with a concentration in Human-Computer Interaction and Artificial Intelligence, and Art Practice at Stanford University.
                                I have recent software engineering experience at <i>Purposer</i> and <i>Squarespace</i>.
                                <br />
                                <br />
                                <HeaderV3 justifyContent={{ xs: 'flex-start', md: 'flex-end' }}  textColor={textColor}/>
                                {/* Learn more about my experiences, projects, and about me in the three buttons. Or find me here: LinkedIn / GitHub / Resume */}
                                {/* <br />
                                LinkedIn
                                <br />
                                GitHub
                                <br />
                                Resume */}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack sx={{ mb: { xs: 0, md: 4 } }}>
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
                            lineHeight: 1.4
                        }}
                        onMouseEnter={() => setWaveHover(true)}
                        onMouseLeave={() => setWaveHover(false)}
                    >
                        Hello! <span className={'wave'}>{waveHover ? '🤝' : '👋'}</span> I'm
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Oi",
                            whiteSpace: 'nowrap',
                            alignItems: 'center',
                            height: '100%',
                            fontSize: '14vw',
                            fontWeight: 300,
                            letterSpacing: -2,
                            color: textColor,
                            lineHeight: 1,
                            // fontStretch: 'extra-expanded'
                        }}
                    >
                        Mhar
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Oi",
                            whiteSpace: 'nowrap',
                            alignItems: 'center',
                            height: '100%',
                            fontSize: '14vw',
                            fontWeight: 300,
                            letterSpacing: -2,
                            color: textColor,
                            lineHeight: 0.5,
                            // mt: -8
                        }}
                        onMouseEnter={() => setShowMhar(true)}
                        onMouseLeave={() => setShowMhar(false)}
                    >
                        Ten
                        <span>
                            {/* {!showMhar ? (
                                <Box
                                    component="img"
                                    sx={{ width: IMAGE_SIZE, height: "85%", display: 'inline-block', mb: -1, objectFit: 'cover', border: 'solid black', borderWidth: { xs: "5px", md: "10px" }, borderRadius: "40%" }}
                                    src={image1}
                                />
                            ) : (
                                <Box
                                    component="img"
                                    sx={{ width: IMAGE_SIZE, height: "85%", display: 'inline-block', mb: -1, objectFit: 'cover', border: 'solid black', borderWidth: { xs: "5px", md: "10px" }, borderRadius: "40%" }}
                                    src={gif}
                                />
                            )} */}
                            <Box
                                component="img"
                                sx={{ width: IMAGE_SIZE, height: "80%", display: 'inline-block', mb: -1, objectFit: 'cover', borderColor: textColor, border: "solid", borderWidth: { xs: "5px", md: "10px" }, borderRadius: "40%" }}
                                src={gif}
                            />
                        </span>
                        rio
                    </Typography>
                </Stack>
                {/* <HeaderV3 textColor={textColor} /> */}
            </Stack>
        </div>
    )
}

export default LandingV3;
import { Box, Container, FormControl, FormControlLabel, Grid, Modal, Radio, RadioGroup, Stack, Switch, ToggleButton, Typography } from '@mui/material';
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
import { DarkMode, LightMode } from '@mui/icons-material';

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

const SettingsModal = ({ isLightMode, textColor, open, setOpen, setIsLightMode, siteVersion, setSiteVersion }) => {
    console.log(siteVersion)
    const [waveHover, setWaveHover] = useState(false);
    const [showMhar, setShowMhar] = useState(false);
    const [buttonTitleHover, setButtonTitleHover] = useState(null);
    const [showButtonTitle, setShowButtonTitle] = useState(0);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 300,
        bgcolor: isLightMode ? 'white' : '#1E1E1E',
        border: '2px solid',
        borderColor: isLightMode ? '#1E1E1E' : 'gray',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        color: textColor
    };

    const handleChange = (event) => {
        setSiteVersion(event.target.value);
    };

    const controlProps = (item) => ({
        checked: siteVersion === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    const CustomRadio = () => {
        return (
            <Radio
                {...controlProps('e')}
                sx={{
                    color: textColor,
                    '&.Mui-checked': {
                        color: textColor,
                    },
                }}
            />
        )
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography variant="h4" fontFamily={FONT_FAMILY} sx={{ mb: 1 }}>
                    Site Settings
                </Typography>
                <Typography variant="h6" fontFamily={FONT_FAMILY}>
                    Appearance
                </Typography>
                <Stack direction="row" columnGap={0} alignItems="center">
                    <LightMode />
                    <Switch checked={!isLightMode} onChange={() => setIsLightMode(!isLightMode)} />
                    <DarkMode />
                </Stack>
                <br />
                <Typography variant="h6" fontFamily={FONT_FAMILY}>
                    Landing Page
                </Typography>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={siteVersion}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="2024" control={<Radio onChange={handleChange} sx={{
                            color: textColor,
                            '&.Mui-checked': {
                                color: textColor,
                            },
                        }} />} label="v3.0 (2024)" />
                        <FormControlLabel value="2023" control={<Radio onChange={handleChange} sx={{
                            color: textColor,
                            '&.Mui-checked': {
                                color: textColor,
                            },
                        }} />} label="v2.0 (2023)" />
                        <FormControlLabel value="2022" control={<Radio onChange={handleChange} sx={{
                            color: textColor,
                            '&.Mui-checked': {
                                color: textColor,
                            },
                        }} />} label="v1.0 (2022)" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Modal>
    );
}

export default SettingsModal;


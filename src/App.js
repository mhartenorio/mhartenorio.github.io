import logo from './logo.svg';
import './App.css';

import Landing from './pages/landing';
import Projects from './pages/projects';
import About from './pages/about';
import Experience from './pages/experience';
import Design from './pages/design.tsx';

import { HashRouter, Routes, Route, Switch, Link, Navigate } from "react-router-dom";
import LandingV2 from './pages/landing-v2';
import { useEffect, useState } from 'react';
import { DarkMode, LightMode, Settings } from '@mui/icons-material';
import { Typography } from '@mui/material';
import LandingV3 from './pages/landing-v3';
import SettingsModal from './components/settings';



function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [siteVersion, setSiteVersion] = useState('2023');
  const [siteToRender, setSiteToRender] = useState(<LandingV2 isLightMode={isLightMode} textColor={textColor}/>);

  useEffect(() => {
    switch (siteVersion) {
        case '2024':
            setSiteToRender(
                <LandingV3 isLightMode={isLightMode} textColor={textColor}/>
            );
            return;
        case '2023':
            setSiteToRender(
                <LandingV2 isLightMode={isLightMode} textColor={textColor}/>
            );
            return;
        case '2022': 
            setSiteToRender(
                <Landing />
            );
        // default:
        //     setSiteToRender(
        //         <LandingV3 isLightMode={isLightMode} textColor={textColor}/>
        //     );;
    }
  }, [siteVersion, textColor])

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
    <div className="App">
      <header className="App-header">
      {/* <div style={{background: 'linear-gradient(0deg, rgba(255,0,101,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%)', position: 'fixed', bottom: 0, width: '100vw', height: '100vh'}}/> */}
      <SettingsModal
        textColor={textColor}
        isLightMode={isLightMode}
        open={showSettings}
        setOpen={setShowSettings}
        setIsLightMode={setIsLightMode}
        siteVersion={siteVersion}
        setSiteVersion={setSiteVersion}
        />
      <div
        // onClick={() => setIsLightMode(!isLightMode)}
        onClick={() => setShowSettings(!showSettings)}
      >
        <Settings fontSize='large' sx={{ position: 'fixed', top: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999, color: textColor }} />
        {isLightMode ?
          <>
            {/* <LightMode fontSize='large' sx={{ position: 'fixed', top: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999 }} /> */}
            {/* <LightMode fontSize='large' sx={{ position: 'fixed', top: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999 }} /> */}
            {/* <LightMode fontSize='large' sx={{ position: 'fixed', bottom: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999 }} /> */}
            {/* <LightMode fontSize='large' sx={{ position: 'fixed', bottom: 16, right: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999}} /> */}
          </>
          :
          <>
            {/* <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', top: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999 }} /> */}
            {/* <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', top: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999 }} /> */}
            {/* <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', bottom: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999 }} /> */}
            {/* <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', bottom: 16, right: 0, padding: 2, '&:hover': { cursor: 'pointer' }, zIndex: 99999 }} /> */}
          </>
        }
      </div>
        <Routes>
          {/* <Route path="/" element={<LandingV3 isLightMode={isLightMode} textColor={textColor}/>} /> */}
          <Route path="/" element={siteToRender} />
          {/* <Route path="/" element={<Landing/>} /> */}
          <Route exact path="/about" element={<About isLightMode={isLightMode} textColor={textColor}/>} />
          <Route exact path="/projects" element={<Projects isLightMode={isLightMode} textColor={textColor}/>} />
          <Route exact path="/experience" element={<Experience isLightMode={isLightMode} textColor={textColor}/>} />
          <Route exact path="/design" element={<Design/>} />
        </Routes>
      <Typography variant='caption' padding={2} sx={{textTransform: 'uppercase', bottom: 0, color: textColor}}>
        Designed and developed by me :D
      </Typography>
      </header>
    </div>
  );
}

export default App;

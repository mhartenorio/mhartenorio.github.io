import logo from './logo.svg';
import './App.css';

import Landing from './pages/landing';
import Projects from './pages/projects';
import About from './pages/about';
import Experience from './pages/experience';

import { HashRouter, Routes, Route, Switch, Link } from "react-router-dom";
import LandingV2 from './pages/landing-v2';
import { useEffect, useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Typography } from '@mui/material';



function App() {
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
    <div className="App">
      <header className="App-header">
      {/* <div style={{background: 'linear-gradient(0deg, rgba(255,0,101,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 40%)', position: 'fixed', bottom: 0, width: '100vw', height: '100vh'}}/> */}
      <div
        onClick={() => setIsLightMode(!isLightMode)}
      >
        {isLightMode ?
          <>
            <LightMode fontSize='large' sx={{ position: 'fixed', top: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <LightMode fontSize='large' sx={{ position: 'fixed', top: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <LightMode fontSize='large' sx={{ position: 'fixed', bottom: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <LightMode fontSize='large' sx={{ position: 'fixed', bottom: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
          </>
          :
          <>
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', top: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', top: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', bottom: 0, left: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
            <DarkMode fontSize='large' htmlColor='white' sx={{ position: 'fixed', bottom: 0, right: 0, padding: 2, '&:hover': { cursor: 'pointer' } }} />
          </>
        }
      </div>
        <Routes>
          <Route path="/" element={<LandingV2 isLightMode={isLightMode} textColor={textColor}/>} />
          <Route exact path="/about" element={<About isLightMode={isLightMode} textColor={textColor}/>} />
          <Route exact path="/projects" element={<Projects isLightMode={isLightMode} textColor={textColor}/>} />
          <Route exact path="/experience" element={<Experience isLightMode={isLightMode} textColor={textColor}/>} />
        </Routes>
      <Typography variant='caption' padding={2} sx={{textTransform: 'uppercase', bottom: 0, color: textColor}}>
        Designed and developed by me :D
      </Typography>
      </header>
    </div>
  );
}

export default App;

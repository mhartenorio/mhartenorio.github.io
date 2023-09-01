import logo from './logo.svg';
import './App.css';

import Landing from './pages/landing';
import Projects from './pages/projects';
import About from './pages/about';

import { HashRouter, Routes, Route, Switch, Link } from "react-router-dom";
import LandingV2 from './pages/landing-v2';
import { useEffect, useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';



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
        <Routes>
          <Route path="/" element={<LandingV2 isLightMode={isLightMode} textColor={textColor}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

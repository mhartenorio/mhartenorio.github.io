import logo from './logo.svg';
import './App.css';

import Landing from './pages/landing';
import Projects from './pages/projects';
import About from './pages/about';

import { HashRouter, Routes, Route, Switch, Link } from "react-router-dom";
import LandingV2 from './pages/landing-v2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Routes>
          <Route path="/" element={<LandingV2/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

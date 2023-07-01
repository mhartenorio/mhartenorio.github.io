import logo from './logo.svg';
import './App.css';

import Landing from './pages/landing';
import Projects from './pages/projects';
import About from './pages/about';

import { HashRouter, Routes, Route, Switch, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
        {/* <About/>
        <Projects/>*/}
        {/* <div className='footer'>Made by Mhar Tenorio &nbsp;|&nbsp; 2022</div>  */}
      </header>
    </div>
  );
}

export default App;

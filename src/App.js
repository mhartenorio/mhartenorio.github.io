import logo from './logo.svg';
import './App.css';

import Landing from './pages/landing';
import Projects from './pages/projects';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing/>
        <Projects/>
        <div className='footer'>Made by Mhar Tenorio &nbsp;|&nbsp; 2022</div>
      </header>
    </div>
  );
}

export default App;

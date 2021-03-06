import React, { useEffect } from 'react';
import Aos from 'aos';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Particles from './Components/Particles/Particle';
import Display from './Components/Display/Display';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import './App.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Display id="display"/>
        <About id="about"/>
        <Skill id="skill"/>
    </div>
  );
}

export default App;

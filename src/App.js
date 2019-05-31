import React from 'react';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Welcome from './Welcome'
import Projects from './Projects';
import Features from './Features';
import Steps from './Steps';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Welcome />
      <Projects />
      <Features />
      <Steps />
    </div>
  );
}

export default App;

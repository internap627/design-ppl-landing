import React from 'react';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Welcome from './Welcome'
import Projects from './Projects';
import Features from './Features';
import Steps from './Steps';
import Testimonials from './Testimonials';
import Logos from './Logos';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Welcome />
      <Projects />
      <Features />
      <Steps />
      <Testimonials />
      <Logos />
    </div>
  );
}

export default App;

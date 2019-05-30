import React from 'react';
import './App.css';
import Nav from './Nav'
import Hero from './Hero'
import Welcome from './Welcome'
import Projects from './Projects';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Welcome />
      <Projects />
    </div>
  );
}

export default App;

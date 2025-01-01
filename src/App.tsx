import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Patents from './components/Patents';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Publications />
      <Projects />
      <Patents />
    </div>
  );
}

export default App;
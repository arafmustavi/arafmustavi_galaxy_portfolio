import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-indigo-950 text-slate-200 overflow-hidden">
      <StarField />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
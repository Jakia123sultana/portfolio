import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Education from './Education';

function App() {
  return (
    <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Education/>
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
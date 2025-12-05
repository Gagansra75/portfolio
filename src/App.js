import React from 'react';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <CustomCursor />
      <WelcomeModal />
      <ThemeToggle />
      <ProgressBar />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Stats />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

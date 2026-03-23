import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import FeaturedProject from './components/sections/FeaturedProject';
import OtherProjects from './components/sections/OtherProjects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Checklist from './components/Checklist';
import './App.css'; // if missing, could be safe to leave or exclude

function App() {
  return (
    <>
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <OtherProjects />
        <Certifications />
        <Checklist />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm glassmorphism">
        <p>&copy; {new Date().getFullYear()} Abhay Jaiswal. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Vite, Tailwind CSS, & Framer Motion.</p>
      </footer>
    </>
  );
}

export default App;

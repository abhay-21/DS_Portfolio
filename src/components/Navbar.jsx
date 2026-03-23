import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#featured-project' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center',
        isScrolled ? 'glassmorphism py-3' : 'bg-transparent'
      )}
    >
      <div className="text-xl font-bold text-white tracking-widest uppercase ml-4">
        <span className="text-primary">A</span>bhay<span className="text-secondary">.</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-1 glassmorphism rounded-full px-2 py-1 mr-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
            onClick={() => setActiveTab(item.name)}
          >
            <span className={cn('relative z-10', activeTab === item.name ? 'text-white' : 'text-gray-400 hover:text-white')}>
              {item.name}
            </span>
            {activeTab === item.name && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Mobile Nav Toggle (Optional for simplicity right now, can be expanded) */}
      <div className="md:hidden">
        {/* Mobile menu toggle would go here */}
      </div>
    </motion.header>
  );
}

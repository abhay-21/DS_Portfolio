import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import Section from '../Section';

const PROFILE_IMG = "https://media.licdn.com/dms/image/v2/D4E03AQF5SSRzq6mcTw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699984659200?e=1775088000&v=beta&t=dx5xTY8GQntgd1YLpRItTDbP0gDLWG7AqbxrLfIorRI";

const stats = [
  { label: 'Projects', value: '2+' },
  { label: 'Certifications', value: '5+' },
  { label: 'LeetCode Problems', value: '100+' },
];

export default function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-6">
        
        {/* Profile Image with Glowing Border */}
        <motion.div 
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur-lg animate-pulse"></div>
          <img 
            src={PROFILE_IMG} 
            alt="Abhay Jaiswal" 
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-background"
          />
        </motion.div>

        {/* Name and Tagline */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Abhay <span className="text-gradient">Jaiswal</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          "Turning Raw Data into Actionable Insights."
        </motion.p>

        {/* Animated Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="glassmorphism rounded-2xl p-6 flex flex-col items-center border border-white/10"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.3)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-bold text-primary mb-2">{stat.value}</span>
              <span className="text-gray-400 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a href="#about" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition-all">
            Scroll Down <ChevronDown size={20} />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

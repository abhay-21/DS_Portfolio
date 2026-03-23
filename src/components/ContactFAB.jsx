import { motion } from 'framer-motion';
import { Download, Linkedin, Github } from 'lucide-react';

export default function ContactFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <motion.a 
        href="https://www.linkedin.com/in/abhayjaiswal21/" 
        target="_blank" 
        rel="noreferrer" 
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-white/5 hover:bg-primary/20 backdrop-blur-xl rounded-full shadow-lg border border-white/10 transition-colors group relative"
      >
        <Linkedin size={24} className="text-white" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-white/10 rounded bg-white/10 backdrop-blur-md text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          LinkedIn
        </span>
      </motion.a>

      <motion.a 
        href="https://github.com/abhay-21" 
        target="_blank" 
        rel="noreferrer" 
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-white/5 hover:bg-primary/20 backdrop-blur-xl rounded-full shadow-lg border border-white/10 transition-colors group relative"
      >
        <Github size={24} className="text-white" />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-white/10 rounded bg-white/10 backdrop-blur-md text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          GitHub
        </span>
      </motion.a>

      <motion.a
        href="/New.docx"
        download="New.docx"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 p-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(157,80,187,0.6)] transition-all group relative cursor-pointer"
      >
        <Download size={24} />
        <span className="font-medium pr-2 whitespace-nowrap hidden md:inline-block">Download Resume</span>
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-white/10 rounded bg-white/10 backdrop-blur-md text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl md:hidden">
          Download Resume
        </span>
      </motion.a>
    </div>
  );
}

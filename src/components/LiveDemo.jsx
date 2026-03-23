import { useState } from 'react';
import Reveal from './Reveal';
import { MonitorPlay, Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveDemo() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dashboardUrl = "https://abhay-21.github.io/India-Payments-Data-Dashboard/";

  return (
    <section id="livedemo" className="py-20">
      <Reveal width="100%">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <MonitorPlay className="text-secondary" size={40} />
            <span className="text-gradient">Live Dashboard</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Visualizing transaction trends and merchant data using <span className="text-primary font-semibold">SQL</span> and <span className="text-primary font-semibold">Power BI</span> to extract geographic market insights.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <a 
              href={dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative px-6 py-3 rounded-xl bg-white/5 border border-primary/30 hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/20 animate-pulse mix-blend-overlay"></div>
              <ExternalLink size={20} className="text-primary" />
              <span className="font-semibold text-white relative z-10">Live View Full</span>
            </a>
          </div>
        </div>

        {/* Mockup Frame */}
        <div className={`transition-all duration-700 mx-auto ${isFullscreen ? 'fixed inset-4 z-[60] bg-background/90 backdrop-blur-3xl m-0' : 'relative max-w-5xl'}`}>
          <div className="glassmorphism rounded-2xl p-2 md:p-4 border border-white/20 shadow-2xl h-full flex flex-col">
            
            {/* Window Controls */}
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-gray-400 text-sm font-medium tracking-wider">
                PhonePe Dynamics Viewer
              </div>
              <button 
                onClick={() => setIsFullscreen(!isFullscreen)} 
                className="text-gray-400 hover:text-white transition-colors"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            </div>

            {/* iFrame Container */}
            <div className={`relative w-full rounded-b-xl overflow-hidden bg-[#1A1A1A] transition-all duration-500 ${isFullscreen ? 'h-[calc(100vh-8rem)]' : 'aspect-video'}`}>
              <iframe 
                src={dashboardUrl}
                title="PhonePe Data Analysis Dashboard"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}

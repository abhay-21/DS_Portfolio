import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Section from '../Section';
import { Award, ExternalLink, Info } from 'lucide-react';

const certs = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    description: "In-depth study on safeguarding data in interconnected ecosystems.",
    url: "https://drive.google.com/file/d/1OXvSdc8KYY2ySEviU-eLpqbd9RwyhP2K/view",
    badges: [
      { name: "Encryption Methods", tooltip: "Used advanced encryption methods to ensure secure data handling." },
      { name: "Threat Modeling", tooltip: "Strategized against potential vulnerabilities mapped via Threat Modeling." }
    ]
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    description: "Strengthened the fundamentals of computation using formal language and automata concepts.",
    url: "https://drive.google.com/file/d/1s9CYPCin5A5SsWmQxoBypwoZO6GZ6gOr/view",
    badges: [
      { name: "Language Principle", tooltip: "Applied language principles to analyze computational patterns." },
      { name: "Finite Automata", tooltip: "Used finite automata theory for rigorous system modeling." }
    ]
  },
  {
    title: "ChatGPT- 4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    description: "Built effective prompts and techniques for generating high-quality responses from LLMs.",
    url: "https://drive.google.com/file/d/1sgcWsZix_tk2J8U96aJP6KA5yZdj6pWf/view",
    badges: [
      { name: "Few-Shot Prompting", tooltip: "Implemented few-shot prompting to improve response consistency." },
      { name: "LLM Guidance", tooltip: "Applied prompt engineering to steer model outputs." }
    ]
  },
  {
    title: "From Data to Decisions: A Hands on Approach to Data Science",
    issuer: "Lovely Professional University",
    description: "Hands-on training bridging raw data processing to actionable insights.",
    url: "https://drive.google.com/file/d/1WbXO91hRu64Gvn4ja26QHlJb0Bl4em91/view",
    badges: [
      { name: "DAX", tooltip: "Used DAX for derived metrics in dynamic business dashboards." },
      { name: "Power Query", tooltip: "Utilized Power Query for robust ETL workflows and data sanitization." }
    ]
  }
];

export default function Certifications() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleTouch = (id) => {
    if (activeTooltip === id) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(id);
    }
  };

  return (
    <Section id="certifications" className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Credentials & <span className="text-gradient">Training</span>
        </h2>

        <div className="space-y-6">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              className="glassmorphism rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 border border-white/10 mt-1 shadow-inner">
                <Award className="text-primary" size={32} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{cert.title}</h3>
                <h4 className="text-primary font-medium mb-4">{cert.issuer}</h4>
                <p className="text-gray-400 mb-6">{cert.description}</p>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg border border-white/10 transition-colors mb-6 w-fit"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                )}
                
                <div className="flex flex-wrap gap-3">
                  {cert.badges.map((badge, bIdx) => {
                    const tooltipId = `${idx}-${bIdx}`;
                    return (
                      <div 
                        key={bIdx}
                        className="relative"
                        onMouseEnter={() => setActiveTooltip(tooltipId)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        onClick={() => handleTouch(tooltipId)}
                      >
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-white/10 rounded-full text-xs font-semibold text-gray-300 cursor-help hover:bg-white/10 transition-colors">
                          {badge.name}
                          <Info size={12} className="text-primary/70" />
                        </div>
                        
                        {/* Tooltip */}
                        <AnimatePresence>
                          {activeTooltip === tooltipId && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-gray-900 border border-white/20 rounded-lg text-xs md:text-sm text-gray-200 z-50 text-center shadow-2xl"
                            >
                              {badge.tooltip}
                              {/* Triangle Pointer */}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-900 drop-shadow-lg"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

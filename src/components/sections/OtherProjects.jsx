import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Github, ExternalLink } from 'lucide-react';
import Section from '../Section';

const projects = [
  {
    title: "Bengaluru House Price Prediction",
    description: "An end-to-end Machine Learning model predicting real estate prices based on spatial and structural features.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Flask"],
    sourceUrl: "https://github.com/junaidraza134/-Bengaluru-House-Price-Prediction",
    liveUrl: "#",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Data Science Jobs in India",
    description: "A dynamic dashboard analyzing salary trends, job roles, and required skills across the Indian data science job market.",
    tags: ["Excel", "Dashboard", "Power Query", "Pivot Tables"],
    sourceUrl: "https://github.com/abhay-21/INT217-PROJECT",
    liveUrl: "#",
    color: "from-green-400 to-emerald-500"
  }
];

const tiltOptions = {
  reverse:        false,
  max:            15,
  perspective:    1000,
  scale:          1.02,
  speed:          1000,
  transition:     true,
  axis:           null,
  reset:          true,
  easing:         "cubic-bezier(.03,.98,.52,.99)",
};

export default function OtherProjects() {
  return (
    <Section id="other-projects" className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          More <span className="text-gradient">Innovations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <Tilt options={tiltOptions} className="h-full">
                <div className="glassmorphism rounded-3xl p-8 h-full flex flex-col border border-white/5 relative overflow-hidden group">
                  
                  {/* Hover Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>

                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons visible on hover on larger screens, always visible on mobile */}
                  <div className="flex items-center gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10">
                      <Github size={16} /> Source Code
                    </a>
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-black bg-primary hover:bg-white px-4 py-2 rounded-lg transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

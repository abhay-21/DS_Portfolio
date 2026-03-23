import Reveal from "./Reveal";
import { Code2, Combine, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skills = {
  languages: ["C++", "Python", "C", "Java"],
  dataScience: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  tools: ["Power BI", "MySQL", "Excel", "Jupyter", "Google Colab"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Reveal width="100%">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The languages, libraries, and tools I use to extract meaning from chaos.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Languages */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glassmorphism p-8 rounded-3xl flex flex-col gap-6 md:row-span-2 group hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-full bg-primary/20">
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3 mt-auto">
              {skills.languages.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 hover:bg-primary/20 hover:text-white transition-colors border border-white/10 rounded-full text-sm font-medium text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Data Science */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glassmorphism p-8 rounded-3xl flex flex-col gap-6 md:col-span-2 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Combine size={150} />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-full bg-secondary/20">
                <Combine className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Data Science</h3>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              {skills.dataScience.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gradient-to-r hover:from-primary/30 hover:to-secondary/30 transition-all cursor-crosshair border border-white/10 rounded-xl text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glassmorphism p-8 rounded-3xl flex flex-col gap-6 md:col-span-2 group hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-full bg-blue-500/20">
                <Wrench className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Tools Core</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <span key={skill} className="px-5 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all border border-transparent hover:border-white/20 rounded-lg text-sm font-semibold shadow-sm tracking-wide">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}

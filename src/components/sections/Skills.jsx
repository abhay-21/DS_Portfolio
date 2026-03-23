import { motion } from 'framer-motion';
import Section from '../Section';
import { Monitor, Globe, Database, Wrench, Library, Bot, Code, Network, Layers, Activity } from 'lucide-react';

const skillsData = [
  {
    category: "Programming Languages",
    icon: Monitor,
    iconColor: "text-blue-400",
    items: [
      { name: "C++", brandUrl: "https://cdn.simpleicons.org/cplusplus/00599C" },
      { name: "Java", brandUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", brandUrl: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "JavaScript", brandUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", brandUrl: "https://cdn.simpleicons.org/typescript/3178C6" }
    ]
  },
  {
    category: "Web Technologies",
    icon: Globe,
    iconColor: "text-cyan-400",
    items: [
      { name: "HTML5", brandUrl: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3", brandUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "JavaScript", brandUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" }
    ]
  },
  {
    category: "Databases",
    icon: Database,
    iconColor: "text-purple-400",
    items: [
      { name: "MongoDB", brandUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "MySQL", brandUrl: "https://cdn.simpleicons.org/mysql/4479A1" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    iconColor: "text-gray-400",
    items: [
      { name: "Git", brandUrl: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", brandUrl: "https://cdn.simpleicons.org/github/white" },
      { name: "Docker", brandUrl: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Linux", brandUrl: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Hadoop", brandUrl: "https://cdn.simpleicons.org/apachehadoop/66CC00" },
      { name: "VS Code", brandUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Postman", brandUrl: "https://cdn.simpleicons.org/postman/FF6C37" }
    ]
  },
  {
    category: "CS Fundamentals",
    icon: Library,
    iconColor: "text-emerald-400",
    items: [
      { name: "DSA", lucide: Code, color: "text-green-400" },
      { name: "Operating Systems", lucide: Monitor, color: "text-blue-400" },
      { name: "DBMS", lucide: Database, color: "text-purple-400" },
      { name: "Computer Networks", lucide: Network, color: "text-gray-400" },
      { name: "OOP", lucide: Layers, color: "text-pink-400" },
      { name: "System Design", lucide: Activity, color: "text-emerald-400" }
    ]
  },
  {
    category: "Machine Learning",
    icon: Bot,
    iconColor: "text-pink-400",
    items: [
      { name: "NumPy", brandUrl: "https://cdn.simpleicons.org/numpy/013243" },
      { name: "Pandas", brandUrl: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "Scikit-learn", brandUrl: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
      { name: "TensorFlow", brandUrl: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "Matplotlib", lucide: Activity, color: "text-blue-500" }
    ]
  }
];

export default function Skills() {
  return (
    <Section id="skills" className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I work with across the full stack and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div 
              key={idx}
              className="glassmorphism bg-[#111827]/80 rounded-3xl p-7 border border-white/5 shadow-lg hover:border-white/10 hover:shadow-[0_0_30px_rgba(0,210,255,0.05)] transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-white/5 ${group.iconColor}`}>
                  <group.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{group.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {group.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="flex items-center gap-2 px-3 py-2 bg-black/60 text-gray-300 border border-white/10 rounded-lg text-sm font-semibold hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {item.brandUrl ? (
                      <img src={item.brandUrl} alt={item.name} className="w-4 h-4 object-contain brightness-110" />
                    ) : item.lucide ? (
                      <item.lucide size={16} className={item.color} />
                    ) : null}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import Reveal from './Reveal';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Database, Activity, Code2, PlaySquare, BarChart, Users, Zap, TrendingUp, Info } from 'lucide-react';

const Card = ({ title, tech, description, highlights, icon: Icon, image, sourceLink, demoLink }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full glassmorphism rounded-3xl cursor-pointer flex flex-col h-full hover:shadow-[0_0_40px_rgba(0,210,255,0.2)] transition-shadow group overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-20 group-hover:opacity-10"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Hover Action Buttons Overlay */}
      <div className="absolute inset-0 z-30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-background/30 rounded-3xl">
        <a 
          href={sourceLink || "#"} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full glassmorphism hover:bg-white/10 hover:text-primary transition-colors translate-y-4 group-hover:translate-y-0 duration-300"
        >
          <Code2 size={18} />
          <span className="text-sm font-semibold">Source Code</span>
        </a>
        <a 
          href={demoLink || "#"} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full glassmorphism hover:bg-white/10 hover:text-secondary transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
        >
          <PlaySquare size={18} />
          <span className="text-sm font-semibold">Live Demo</span>
        </a>
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col pointer-events-none">
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="flex items-start justify-between mb-6"
        >
          <div className="p-4 bg-white/10 rounded-2xl pointer-events-auto">
            <Icon className="text-primary" size={32} />
          </div>
        </div>

        <div style={{ transform: "translateZ(75px)" }} className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
        <p className="text-gray-300">
          {description}
        </p>
        
        <div className="space-y-2 pt-2">
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              {h}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold relative z-20 pointer-events-auto">
            {t}
          </span>
        ))}
      </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: "Bengaluru House Price Prediction",
      description: "End-to-end Machine Learning pipeline predicting real estate prices in Bengaluru based on various physical attributes and locations.",
      highlights: [
        "Rigorous Outlier Removal & Data Cleaning",
        "Feature Engineering for High Cardinality",
        "Business Intelligence Reporting"
      ],
      tech: ["Python", "Scikit-learn", "Power BI"],
      icon: Database,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      sourceLink: "https://github.com/junaidraza134/-Bengaluru-House-Price-Prediction",
      demoLink: "#"
    },
    {
      title: "Data Science Jobs Excel Dashboard",
      description: "Comprehensive analytical dashboard translating raw job market data into strategic hiring insights.",
      highlights: [
        "Advanced Pivot Tables configuration",
        "Interactive Slicers & Dynamic Filtering",
        "Complex Data Validation & Macros"
      ],
      tech: ["Excel", "Data Analysis", "Reporting"],
      icon: Activity,
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=2070",
      sourceLink: "https://github.com/abhay-21/INT217-PROJECT",
      demoLink: "#"
    }
  ];

  const journeySteps = [
    "Data Cleaning",
    "Standardization",
    "Feature Engineering",
    "Visualization"
  ];

  return (
    <section id="projects" className="py-20">
      <Reveal width="100%">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Practical applications of data algorithms and visualization to solve structural problems.
          </p>
        </div>

        {/* Featured Project: PhonePe Dashboard */}
        <div className="mb-16 glassmorphism rounded-3xl p-8 md:p-12 border border-primary/30 relative overflow-hidden group hover:shadow-[0_0_50px_rgba(0,210,255,0.15)] transition-all">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Narrative Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Star size={14} className="fill-primary" /> Major Semester Project (Oct 24 - Jan 25)
              </div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                PhonePe Digital Payments <br/><span className="text-gradient">Analysis Dashboard</span>
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">The Problem:</strong> Analyzing large-scale transaction data to monitor performance and identify causes for payment failures across <span className="text-primary font-semibold">150,000+ transactions</span>.
                </p>
                <p>
                  <strong className="text-white">The Solution:</strong> An end-to-end BI solution visualizing four major segments: Insurance, Loans, Money Transfers, and Recharge & Bills.
                </p>
                <ul className="space-y-2 mt-4 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                    <span>Identified a <strong>95-96% success rate</strong> across all services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                    <span>Analyzed <strong>₹3,333M+</strong> in total transaction volume.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                    <span>Pinpointed failure triggers: Server Errors, Wrong PIN, and Insufficient Balance.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex flex-wrap gap-2 group/tooltip relative">
                {["Power BI", "SQL", "Power Query", "Data Modeling", "Feature Engineering"].map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-full text-xs font-semibold">
                    {t}
                  </span>
                ))}
                
                {/* Performance Justification Tooltip */}
                <div className="absolute -top-12 left-0 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-background border border-primary/50 text-xs text-gray-300 p-2 rounded shadow-xl pointer-events-none flex items-center gap-2 max-w-sm z-50">
                  <Info size={14} className="text-primary shrink-0" />
                  <span>Utilized <strong>Power Query</strong> for advanced data normalization and <strong>DAX</strong> for crafting derived performance metrics.</span>
                </div>
              </div>

              <div className="pt-4">
                 <a 
                  href="https://abhay-21.github.io/India-Payments-Data-Dashboard/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 font-semibold transition-all shadow-[0_0_15px_rgba(0,210,255,0.3)] hover:shadow-[0_0_25px_rgba(0,210,255,0.5)]"
                >
                  <PlaySquare size={20} />
                  View Live Dashboard
                </a>
              </div>
            </div>

            {/* Interactive Visuals */}
            <div className="flex flex-col justify-center gap-8">
              
              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glassmorphism bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <BarChart size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Total Amount</span>
                  </div>
                  <div className="text-2xl font-bold">₹3,333M+</div>
                </div>
                
                <div className="glassmorphism bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-secondary/50 transition-colors">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <TrendingUp size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Success Rate</span>
                  </div>
                  <div className="text-2xl font-bold">~96%</div>
                </div>

                <div className="col-span-2 glassmorphism bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-white/30 transition-colors flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                      <Users size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">Social Proof</span>
                    </div>
                    <div className="font-semibold text-gray-200">1,800+ LinkedIn Impressions</div>
                  </div>
                  <Zap className="text-yellow-400" size={24} />
                </div>
              </div>

              {/* Data Journey Reveal */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">The Data Journey</h4>
                <div className="flex flex-col gap-2 relative">
                  <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-white/10 rounded-full" />
                  
                  {journeySteps.map((step, i) => (
                    <motion.div 
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                      className="flex items-center gap-4 relative z-10"
                    >
                      <div className="w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {i + 1}
                      </div>
                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors flex-1">
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Regular Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 perspective-1000">
          {projects.map((proj, idx) => (
            <div key={idx} className="h-full flex perspective-1000">
               <Card {...proj} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { motion } from 'framer-motion';
import Section from '../Section';
import { ExternalLink, Database, Code, BarChart, Settings } from 'lucide-react';

export default function FeaturedProject() {
  const kpis = [
    { label: "Total Amount", value: "₹3,333M+" },
    { label: "Success Rate", value: "~96%" },
    { label: "LinkedIn Impressions", value: "1,800+" },
  ];

  const journeySteps = [
    { name: "Data Cleaning", icon: Database },
    { name: "Standardization", icon: Settings },
    { name: "Feature Engineering", icon: Code },
    { name: "Visualization", icon: BarChart },
  ];

  return (
    <Section id="featured-project" className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-gray-400 text-lg">Highlighting my premier data analytics project.</p>
        </div>

        <div className="glassmorphism rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group">
          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/30 transition-colors duration-700"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 text-white">PhonePe Data Analysis Dashboard</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                A comprehensive dashboard uncovering transaction patterns and user behavior. By processing massive datasets, this project transforms raw numbers into interactive, actionable business intelligence.
              </p>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {kpis.map((kpi, idx) => (
                  <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5 text-center transform hover:-translate-y-1 transition-transform">
                    <div className="text-primary font-bold text-xl md:text-2xl mb-1">{kpi.value}</div>
                    <div className="text-xs text-secondary uppercase tracking-wider font-semibold">{kpi.label}</div>
                  </div>
                ))}
              </div>

              <a 
                href="https://abhay-21.github.io/India-Payments-Data-Dashboard/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity w-fit shadow-lg shadow-primary/20"
              >
                Live Dashboard <ExternalLink size={18} />
              </a>
            </div>

            {/* Right Content - Data Journey */}
            <div className="flex flex-col justify-center bg-black/40 rounded-2xl p-8 border border-white/5 shadow-inner">
              <h4 className="text-xl font-semibold mb-8 text-white text-center">The Data Journey</h4>
              
              <div className="relative space-y-8 pl-2">
                {/* Vertical Line Background */}
                <div className="absolute left-[1.65rem] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/50 to-secondary/50"></div>
                
                {journeySteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-6 relative z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.2, duration: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center border-2 border-primary shrink-0 z-10 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                        <Icon className="text-primary" size={20} />
                      </div>
                      
                      <div className="flex-1 glassmorphism rounded-xl p-4 border border-white/5 hover:border-primary/50 transition-colors">
                        <span className="font-medium text-white">{step.name}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

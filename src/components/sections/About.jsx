import { GraduationCap, BookOpen } from 'lucide-react';
import Section from '../Section';

export default function About() {
  return (
    <Section id="about" className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">About</span> Me
        </h2>
        
        <div className="glassmorphism rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-700"></div>
          
          <div className="relative z-10 text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              I am a <strong className="text-white">B.Tech CSE student at Lovely Professional University (LPU)</strong>, maintaining a CGPA of 6.91. Proudly hailing from Korba, Chhattisgarh, I have always been fascinated by how information shapes our world.
            </p>
            <p>
              My journey represents a deep passion for bridging engineering and analytics. I don't just write code; I <strong className="text-primary hover:text-white transition-colors">discover patterns</strong>, clean messy data, and build visual stories that drive strategic decisions.
            </p>
            <p>
              Whether it's deploying a machine learning model to predict housing prices or architecting an interactive dashboard for financial transactions, my goal is always to deliver comprehensive, actionable insights. By combining software development principles with data science rigor, I prepare data not just to be seen, but to be understood.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <GraduationCap className="text-secondary shrink-0" size={26} />
            <div>
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm text-gray-400">
                Bachelor of Technology - Computer Science & Engineering (LPU, Phagwara) | Aug 2023 - Present | CGPA: 6.91
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <BookOpen className="text-blue-400 shrink-0" size={26} />
            <div>
              <h4 className="font-semibold">Schooling</h4>
              <p className="text-sm text-gray-400">
                Indus Public School, Korba: Intermediate (71.6%, Apr 2022 - Mar 2023) | Matriculation (96.6%, Apr 2020 - Mar 2021)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

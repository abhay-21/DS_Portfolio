import Reveal from './Reveal';
import { Database, Lightbulb, GraduationCap, MapPin, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 flex justify-center">
      <Reveal width="100%">
        <div className="glassmorphism p-8 md:p-12 rounded-3xl relative overflow-hidden">
          
          {/* Subtle decoration background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
            
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold font-sans">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                I am a <span className="text-primary font-medium">Data Science enthusiast</span> currently pursuing my B.Tech in Computer Science and Engineering at <span className="font-semibold text-white">Lovely Professional University</span>. My journey into the world of tech began in Korba, Chhattisgarh, driven by a fascination with how raw numbers can predict real-world outcomes.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                I specialize in turning complex datasets into actionable insights using <span className="font-semibold text-white">Python, SQL, and Power BI</span>. Whether it’s predicting real estate trends in Bengaluru or analyzing national financial data, I am committed to building solutions that bridge the gap between data and decisions.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[300px]">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <MapPin className="text-primary" size={28} />
                <div>
                  <h4 className="font-semibold">Hometown</h4>
                  <p className="text-sm text-gray-400">Korba, Chhattisgarh</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <GraduationCap className="text-secondary" size={28} />
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-gray-400">B.Tech @ LPU, Phagwara (CGPA: 6.91)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <BookOpen className="text-blue-400" size={28} />
                <div>
                  <h4 className="font-semibold">Schooling</h4>
                  <p className="text-sm text-gray-400">
                    Indus Public School, Korba: Intermediate (71.6%, Apr 22 - Mar 23) | Matriculation (96.6%, Apr 20 - Mar 21)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Database className="text-primary" size={28} />
                <div>
                  <h4 className="font-semibold">Focus</h4>
                  <p className="text-sm text-gray-400">Data Science Expertise</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}

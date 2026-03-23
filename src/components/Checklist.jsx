import Reveal from './Reveal';
import { Award, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Checklist() {
  const items = [
    {
      title: "Training",
      bullets: [
        <div className="flex flex-wrap items-baseline gap-2">
          <a
            href="https://drive.google.com/file/d/1WbXO91hRu64Gvn4ja26QHlJb0Bl4em91/view"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-white underline underline-offset-4 font-semibold"
          >
            From Data to Decisions: A Hands on Approach to Data Science
          </a>
          <span>at Lovely Professional University</span>
        </div>
      ],
      icon: BookOpen,
      color: "text-blue-400",
      bg: "bg-blue-400/20"
    },
    {
      title: "Achievements",
      bullets: [
        <div className="flex flex-wrap items-center gap-2">
          <span>Top Badges on</span>
          <a
            href="https://leetcode.com/u/abhay_1024/"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 bg-yellow-400/10 text-yellow-500 rounded-full text-sm font-bold hover:bg-yellow-400/20 transition-colors"
          >
            LeetCode
          </a>
          <span>&</span>
          <a
            href="https://www.hackerrank.com/profile/abhayjaiswal7891"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 bg-green-400/10 text-green-500 rounded-full text-sm font-bold hover:bg-green-400/20 transition-colors"
          >
            HackerRank
          </a>
        </div>,
        <a
          href="https://www.geeksforgeeks.org/profile/abhayjaiswu44v"
          target="_blank"
          rel="noreferrer"
          className="inline-flex px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-sm font-bold hover:bg-emerald-500/20 transition-colors"
        >
          GeeksforGeeks Profile
        </a>,
        "100+ logical and algorithmic problems solved"
      ],
      icon: Star,
      color: "text-yellow-400",
      bg: "bg-yellow-400/20"
    }
  ];

  return (
    <section id="checklist" className="py-20 mb-20">
      <Reveal width="100%">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Training and achievements that validate the expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02, x: 10 }}
              className="glassmorphism p-6 md:p-8 rounded-2xl flex items-start gap-6 group hover:border-white/30 transition-all cursor-default"
            >
              <div className={`p-4 rounded-full ${item.bg} group-hover:scale-110 transition-transform shrink-0`}>
                <item.icon className={item.color} size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="text-gray-300 md:text-lg flex items-start gap-4">
                      <span className={`w-1.5 h-1.5 mt-[10px] rounded-full shrink-0 ${item.bg.replace('/20', '')}`} />
                      <div className="flex-1 leading-relaxed">
                        {bullet}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

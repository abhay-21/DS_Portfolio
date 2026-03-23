import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Reveal from './Reveal';

function Counter({ from, to, duration = 2, suffix = "+" }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
        }
      };
      animationFrame = window.requestAnimationFrame(step);
      
      return () => window.cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef} className="text-5xl md:text-6xl font-bold font-sans">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 2, label: "Projects Built" },
    { value: 5, label: "Certifications" },
    { value: 100, label: "Coding Problems" },
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-white/[0.02]">
      <Reveal width="100%">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <div className="text-primary mb-2 shadow-primary">
                <Counter from={0} to={stat.value} duration={2} />
              </div>
              <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export default function Section({ id, children, className }) {
  return (
    <section id={id} className={cn("py-20", className)}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

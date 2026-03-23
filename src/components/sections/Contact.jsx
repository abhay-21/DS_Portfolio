import { motion } from 'framer-motion';
import Section from '../Section';
import { Mail, Phone, Github, Linkedin, Download, Send } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" className="container mx-auto px-6 mb-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Let's <span className="text-gradient">Connect</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info & Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              I'm always open to discussing data science opportunities, creative collaborations, or just connecting with fellow tech enthusiasts.
            </p>

            <div className="space-y-6 mb-10">
              <a href="mailto:abhayjaiswal789821@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <div className="font-semibold">abhayjaiswal789821@gmail.com</div>
                </div>
              </a>

              <a href="tel:+917999984422" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Phone</div>
                  <div className="font-semibold">+91-7999984422</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <a href="https://linkedin.com/in/abhayjaiswal21" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 hover:scale-110 flex items-center justify-center border border-white/10 transition-all text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/abhay-21" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 hover:scale-110 flex items-center justify-center border border-white/10 transition-all text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
            </div>

            <motion.a 
              href="/New.docx"
              download="New.docx"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 w-fit"
            >
              Download CV <Download size={20} />
            </motion.a>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism rounded-3xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white cursor-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white cursor-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white cursor-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-bold transition-colors cursor-none"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

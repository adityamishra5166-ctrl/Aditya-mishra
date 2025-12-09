import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";
import NeonButton from "@/components/NeonButton";
import GlitchText from "@/components/GlitchText";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-block px-3 py-1 border border-neon-lime/50 rounded-none bg-neon-lime/10 mb-4">
          <span className="font-mono text-neon-lime text-sm tracking-widest">SYSTEM_READY_V2.5</span>
        </div>

        <p className="font-display text-2xl md:text-3xl text-white/90 tracking-[0.3em] uppercase">
          Aditya Mishra
        </p>

        <h1 className="font-display text-5xl md:text-8xl font-bold leading-tight uppercase tracking-tighter">
          <GlitchText text="FULL STACK" className="block text-white" />
          <GlitchText text="ENGINEER" className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue" />
        </h1>

        <p className="font-mono text-white/70 max-w-xl text-lg leading-relaxed border-l-2 border-neon-purple pl-4">
          I’m Aditya Mishra, a BCA student at Arcade Business College who loves shipping
          fast, polished experiences. Comfortable across the stack with C, C++, Python,
          Java, HTML/CSS, and more—focused on clear UX and performant builds.
        </p>

        <div className="flex flex-wrap gap-4 pt-8">
          <NeonButton onClick={() => setLocation("/projects")}>
            View Projects <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </NeonButton>
          <NeonButton variant="outline" onClick={() => setLocation("/contact")}>
            Contact Me
          </NeonButton>
        </div>

        <div className="flex gap-6 pt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white hover:scale-110 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hello@example.com" className="text-white/50 hover:text-white hover:scale-110 transition-all">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

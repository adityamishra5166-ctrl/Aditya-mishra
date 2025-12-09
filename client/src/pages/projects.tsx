import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import NeonButton from "@/components/NeonButton";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NEON_DASHBOARD",
    desc: "A futuristic analytics dashboard with real-time data visualization.",
    tech: ["React", "D3.js", "WebSockets"],
    color: "border-neon-purple",
    glow: "hover:shadow-[0_0_30px_rgba(176,38,255,0.3)]"
  },
  {
    title: "CYBER_COMMERCE",
    desc: "3D ecommerce experience with interactive product models.",
    tech: ["Three.js", "Next.js", "Stripe"],
    color: "border-neon-blue",
    glow: "hover:shadow-[0_0_30px_rgba(0,234,255,0.3)]"
  },
  {
    title: "GLITCH_SOCIAL",
    desc: "Decentralized social network with privacy-first architecture.",
    tech: ["Solidity", "IPFS", "React"],
    color: "border-neon-lime",
    glow: "hover:shadow-[0_0_30px_rgba(180,255,57,0.3)]"
  },
  {
    title: "AI_GENERATOR",
    desc: "Generative art platform powered by stable diffusion models.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    color: "border-neon-magenta",
    glow: "hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]"
  },
  {
    title: "SONIC_WAVE",
    desc: "Audio reactive music visualizer for Spotify.",
    tech: ["Web Audio API", "Canvas", "React"],
    color: "border-white",
    glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
  },
  {
    title: "METAVERSE_UI",
    desc: "Interface kit for VR/AR applications.",
    tech: ["A-Frame", "React XR", "Tailwind"],
    color: "border-neon-purple",
    glow: "hover:shadow-[0_0_30px_rgba(176,38,255,0.3)]"
  }
];

export default function Projects() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl md:text-6xl mb-12 uppercase tracking-widest text-white border-b border-white/10 pb-4">
          <GlitchText text="PROJECTS" />
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-black border ${project.color} p-6 transition-all duration-300 ${project.glow} hover:-translate-y-2`}
            >
              <div className="absolute top-0 right-0 p-2 opacity-50 font-mono text-xs">
                0{index + 1}
              </div>
              
              <h3 className="font-display text-2xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all">
                {project.title}
              </h3>
              
              <p className="text-white/60 font-mono text-sm mb-6 h-20">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-white/5 text-xs font-mono uppercase tracking-wider border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href="#" className="p-2 border border-white/20 hover:bg-white hover:text-black transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-white/20 hover:bg-white hover:text-black transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Corner Accents */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50" />
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import NeonButton from "@/components/NeonButton";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-12 min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto w-full"
      >
        <h1 className="font-display text-4xl md:text-6xl mb-8 uppercase tracking-widest text-white text-center">
          <GlitchText text="INITIATE_CONTACT" />
        </h1>
        
        <p className="text-center text-white/60 font-mono mb-12 max-w-md mx-auto">
          Have a project in mind? Let's build something that breaks the internet.
        </p>

        <form className="space-y-6 bg-white/5 p-8 border border-white/10 backdrop-blur-md relative overflow-hidden">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neon-purple/20 to-transparent pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-mono text-xs text-neon-blue uppercase tracking-wider">Identity</label>
              <input 
                type="text" 
                placeholder="YOUR NAME"
                className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-neon-purple focus:outline-none focus:shadow-[0_0_15px_rgba(176,38,255,0.2)] transition-all font-mono"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs text-neon-blue uppercase tracking-wider">Coordinates</label>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-neon-purple focus:outline-none focus:shadow-[0_0_15px_rgba(176,38,255,0.2)] transition-all font-mono"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="font-mono text-xs text-neon-blue uppercase tracking-wider">Transmission</label>
            <textarea 
              rows={5}
              placeholder="ENTER MESSAGE..."
              className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-neon-purple focus:outline-none focus:shadow-[0_0_15px_rgba(176,38,255,0.2)] transition-all font-mono resize-none"
            />
          </div>

          <NeonButton className="w-full flex justify-center items-center gap-2 group">
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </NeonButton>
        </form>

        <div className="mt-12 flex justify-center gap-8 font-mono text-sm text-white/40">
          <span>LOC: CYBERSPACE</span>
          <span>LAT: 40.7128</span>
          <span>LON: -74.0060</span>
        </div>
      </motion.div>
    </div>
  );
}

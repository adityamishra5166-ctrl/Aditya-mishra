import { ReactNode } from "react";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon-purple selection:text-white overflow-hidden">
      <div className="scanline" />
      <div className="noise-overlay" />
      <Cursor />
      <ParticleBackground />
      <Navbar />
      
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        {children}
      </main>

      <footer className="py-8 text-center text-white/30 text-xs font-mono">
        <p>© 2025 Aditya Mishra // SYSTEM_ONLINE</p>
      </footer>
    </div>
  );
}

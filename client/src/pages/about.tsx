import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";
import { Code, Database, Layout, Terminal, Cpu, Globe } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Layout, level: 95, color: "bg-neon-purple" },
  { name: "Backend", icon: Database, level: 85, color: "bg-neon-blue" },
  { name: "Three.js", icon: Globe, level: 70, color: "bg-neon-lime" },
  { name: "System Arch", icon: Cpu, level: 80, color: "bg-neon-magenta" },
  { name: "DevOps", icon: Terminal, level: 65, color: "bg-white" },
  { name: "Creative Dev", icon: Code, level: 90, color: "bg-neon-purple" },
];

export default function About() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl md:text-6xl mb-12 uppercase tracking-widest text-white border-b border-white/10 pb-4">
          <GlitchText text="ABOUT_ME" />
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:border-neon-purple transition-colors duration-300">
              <h3 className="font-mono text-neon-blue text-xl mb-4">// WHO_AM_I</h3>
              <p className="text-white/80 leading-relaxed font-sans text-lg">
                I’m Aditya Mishra, a BCA student at Arcade Business College. I build end-to-end
                experiences with a focus on clarity, speed, and polish—bridging design sense with
                solid engineering.
              </p>
              <br />
              <p className="text-white/80 leading-relaxed font-sans text-lg">
                Comfortable across languages and stacks: C, C++, Python, Java, HTML/CSS, and more.
                Passionate about performant UI, accessible UX, and clean architecture.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:border-neon-lime transition-colors duration-300">
              <h3 className="font-mono text-neon-lime text-xl mb-4">// EXPERIENCE_SUMMARY</h3>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>SENIOR_DEV @ TECH_CORP</span>
                  <span className="text-white/50">2023 - PRESENT</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>FULLSTACK @ STARTUP_INC</span>
                  <span className="text-white/50">2021 - 2023</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>UG @ ARCADE BUSINESS COLLEGE</span>
                  <span className="text-white/50">BCA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-mono text-neon-magenta text-xl mb-4">// SKILL_MATRIX</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <skill.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                    <span className="font-mono uppercase tracking-wider text-sm">{skill.name}</span>
                    <span className="ml-auto font-mono text-xs text-white/50">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";

const timeline = [
  {
    year: "Completed",
    role: "Matriculation",
    company: "Singheshwar Seminary Patahi (CBSE)",
    desc: "Built strong fundamentals in math and science; started coding basics.",
    tech: "C fundamentals, problem solving"
  },
  {
    year: "Completed",
    role: "Intermediate",
    company: "Singheshwar Seminary Patahi (Bihar Board)",
    desc: "Deepened analytical skills and explored programming beyond the syllabus.",
    tech: "C++, Java basics, algorithms"
  },
  {
    year: "Ongoing",
    role: "BCA",
    company: "Arcade Business College, Patna",
    desc: "Expanding full-stack skills, building projects, and focusing on practical delivery.",
    tech: "HTML, CSS, JS/TS, React, Java, Python"
  }
];

export default function Experience() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl md:text-6xl mb-12 uppercase tracking-widest text-white border-b border-white/10 pb-4">
          <GlitchText text="EXPERIENCE" />
        </h1>

        <div className="relative border-l border-neon-purple/30 ml-4 md:ml-12 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-neon-purple rounded-full group-hover:bg-neon-purple group-hover:shadow-[0_0_10px_#b026ff] transition-all duration-300" />
              
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm hover:border-neon-blue transition-all duration-300 group-hover:translate-x-2">
                <span className="font-mono text-neon-blue text-sm tracking-widest mb-2 block">
                  {item.year}
                </span>
                <h3 className="font-display text-2xl text-white mb-1">
                  {item.role}
                </h3>
                <h4 className="font-mono text-white/50 text-lg mb-4">
                  @ {item.company}
                </h4>
                <p className="text-white/70 font-sans leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="inline-block px-3 py-1 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-mono">
                  STACK: {item.tech}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

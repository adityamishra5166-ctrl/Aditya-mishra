import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function NeonButton({ children, onClick, className, variant = "primary" }: NeonButtonProps) {
  const baseStyles = "relative px-8 py-3 font-mono font-bold uppercase tracking-wider transition-all duration-300 clip-path-polygon hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-neon-purple text-white hover:bg-neon-blue hover:text-black hover:shadow-[0_0_20px_rgba(0,234,255,0.7)]",
    secondary: "bg-transparent border border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-black hover:shadow-[0_0_20px_rgba(180,255,57,0.7)]",
    outline: "bg-transparent border border-white/20 text-white hover:border-neon-magenta hover:text-neon-magenta hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
      {/* Glitch decorative elements */}
      <span className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-white opacity-50" />
      <span className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-white opacity-50" />
    </motion.button>
  );
}

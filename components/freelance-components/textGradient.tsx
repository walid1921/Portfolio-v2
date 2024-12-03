"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Children } from "react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../ui/animated-gradient-text";

export function TextGradient({ children }: { children: string }) {
  return (
    <motion.div
      className="flex items-center justify-center "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <AnimatedGradientText>
        🌟 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffffff] via-[#3eb680] to-[#ffffff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent `
          )}
        >
          {children}
        </span>
        <ChevronRight className="ml-1 size-3 text-gray-300 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </motion.div>
  );
}

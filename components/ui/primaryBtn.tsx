"use client";

import React from "react";
import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";

// initial={{ opacity: 0, y: 100 }}
// animate={{ opacity: 1, y: 0 }}
// transition={{
//   duration: 1.1,
//   delay: 1.3,
//   type: "tween",
//   ease: "easeInOut",
// }}
const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;
interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}
const PrimaryBtn = ({ children, className, ...props }: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative bg-primary text-primary-foreground  border border-[#289061] rounded-md py-2 px-6 md:py-2 md:px-6  backdrop-blur-xl  transition-all ease-in-out duration-300 hover:bg-[#4b9876] ",
        className
      )}
    >
      <span
        className="relative block z-50 "
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default PrimaryBtn;

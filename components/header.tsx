"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

import { links } from "@/lib/data";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/context/activeSectionContext";

const itemVariants: Variants = {
  closed: { opacity: 0, transition: { duration: 0.2 }, x: 100 },
  open: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
    x: 0,
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="hidden lg:flex justify-center items-center fixed top-3 w-full z-[999]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <ul className="hidden lg:center-center gap-8 text-sm  z-10 py-3 mt-2 px-8 md:text-[16px] md:gap-12 md:py-4 border-b-[0.1px] transition-all ease-in-out duration-500 rounded-full bg-[rgba(114,114,114,.2)] backdrop-blur-md   border-[rgba(114,114,114,.4)]">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative nav-item hover-navLink font-semibold"
            >
              <Link
                className={cn(
                  "hover:text-white ease-in duration-150 font-semibold",
                  { "text-white py-3 px-6": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-[rgba(114,114,114,0.42)] rounded-full inset-0 absolute -z-10 py-4 -top-[5px] "
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <div className="flex justify-end fixed top-3 w-full z-[999]">
        <div className="lg:hidden inline-block sticky mr-4 transition-all ease-in-out duration-500 rounded-full bg-[rgba(114,114,114,.2)] backdrop-blur-md border-[rgba(114,114,114,.4)]">
          <Hamburger
            rounded
            color="#f5f5f5"
            size={25}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </div>

      {/* ======== Mobile Navbar ========= */}
      <div
        className={`top-0 h-full w-[60%] ease-in-out z-40 ${
          !isOpen
            ? "fixed right-[-100%] duration-1000"
            : "fixed right-0  max-lg:block hidden  duration-500"
        }`}
        onClick={toggleMenu}
      >
        <ul className="center-center flex-col h-full gap-20 bg-[rgba(12,12,12,0.35)]  backdrop-blur-sm border-l-[1px] border-neutral-700 border-bg-white/20 md:text-lg text-md">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              variants={itemVariants} // Add variants here
              animate={isOpen ? "open" : "closed"} // Apply animation based on isOpen state
              className="relative font-semibold hover:text-white transition-all ease-in duration-150 cursor-pointer"
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </header>
  );
}

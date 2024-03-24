"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed top-4 lg:flex lg:justify-center lg:items-center w-full xl:justify-end md:top-0 xl:right-24 2xl:right-[80px] z-[999]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <ul className="hidden lg:flex items-center justify-between gap-8 text-sm  z-10 py-3 mt-2 px-6 md:text-[16px] md:gap-12 md:mt-8 md:py-4 border-b-[0.1px]  transition-all ease-in-out duration-500 rounded-full bg-[rgba(114,114,114,.2)] backdrop-blur-md   border-[rgba(114,114,114,.4)]">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="nav-item hover-navLink font-semibold"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className=" hover:text-white ease-in duration-150 font-semibold"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="lg:hidden flex justify-end sticky pr-4 transition-all ease-in-out duration-500 ">
          <Hamburger
            rounded
            color="#f5f5f5"
            size={25}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </motion.nav>

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
            <li
              key={link.hash}
              className="relative font-semibold hover:text-white transition-all ease-in duration-150 cursor-pointer"
            >
              <Link href={link.hash}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex fixed bottom-0 right-0  flex-col">
        <Link
          href="https://github.com/walid1921?tab=repositories"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security reasons
          className=" p-2 mb-5 mr-5 bg-[rgba(114,114,114,0.21)]  backdrop-blur-sm  z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white opacity-50 hover:opacity-100"
        >
          <BsGithub size={28} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/walid-kouider-ayad"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security reasons
          className=" p-2 mb-5 mr-5 bg-[rgba(114,114,114,0.21)]  backdrop-blur-sm  z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white opacity-50 hover:opacity-100"
        >
          <FaLinkedin size={28} />
        </Link>
        <Link
          href="https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ=="
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security reasons
          className=" p-2 mb-5 mr-5 bg-[rgba(114,114,114,0.21)]  backdrop-blur-sm  z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white opacity-50 hover:opacity-100"
        >
          <FiInstagram size={28} />
        </Link>
      </div>
    </header>
  );
}

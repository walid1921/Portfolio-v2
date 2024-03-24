"use client";
import React from "react";
import javascript from "../public/javascript.png";
import html from "../public/html.png";
import typescript from "../public/typescript.png";
import mongodb from "../public/mongo-db.png";
import react from "../public/react.png";
import nodejs from "../public/nodejs.png";
import { motion } from "framer-motion";

import { BsCloudDownloadFill, BsFillSendFill } from "react-icons/bs";
import Image from "next/image";
import Button from "./ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={javascript}
          alt=""
          priority={true}
          className="absolute lg:flex hidden md:left-[600px] 2xl:left-[800px] top-28 h-36 w-36 opacity-40 hover:opacity-60 transition-all ease-in-out duration-150 rotate-[340deg]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={html}
          alt=""
          priority={true}
          className="absolute hidden lg:flex left-36 top-[700px] h-36 w-36 opacity-20 hover:opacity-60 transition-all ease-in-out duration-150 rotate-[22deg]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={typescript}
          alt=""
          priority={true}
          className="absolute hidden lg:flex right-36 top-[400px] h-28 w-28 opacity-40 hover:opacity-60 transition-all ease-in-out duration-150 rotate-[22deg]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        {" "}
        <Image
          src={mongodb}
          alt=""
          priority={true}
          className="absolute hidden lg:flex right-[420px] top-[200px] h-20 w-20 md:h-24 md:w-24 opacity-40 hover:opacity-60 transition-all ease-in-out duration-150 rotate-[10deg]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={react}
          alt=""
          priority={true}
          className="absolute hidden lg:flex lg:right-[430px] 2xl:right-[600px] lg:top-[500px] h-52 w-52 opacity-40 hover:opacity-60 transition-all ease-in-out duration-150 rotate-[22deg] "
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          src={nodejs}
          alt=""
          priority={true}
          className="absolute hidden lg:flex right-[200px] top-[700px] h-36 w-36 opacity-40 hover:opacity-80 rotate-[10deg]"
        />
      </motion.div>

      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute md:hidden -top-[500px] -left-[500px] md:bottom-[600px] md:right-[500px] h-[1100px] w-[1100px] md:h-[900px] md:w-[900px] opacity-40 animate-spin-slow"
      >
        <path
          fill="#61dafb"
          d="M57.9,-43.8C73.7,-26.3,84.4,-2.3,78.7,16.1C73,34.5,51,47.4,30.6,53.3C10.1,59.3,-8.8,58.3,-26.9,51.4C-45.1,44.4,-62.6,31.3,-61.7,18.8C-60.8,6.3,-41.4,-5.7,-28.1,-22.6C-14.7,-39.6,-7.4,-61.5,6.8,-67C21,-72.4,42,-61.4,57.9,-43.8Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative h-[100vh] flex items-center gap-10 lg:w-[60%]">
        <div className=" flex flex-col items-center  justify-center text-[26px]  md:text-[52px] xl:text-6xl  sm:pl-[8px] md:w-full z-10 gap-4 bg-[rgba(114,114,114,.2)] backdrop-blur-sm xl:border-r-[1px] border-[rgba(114,114,114,.4)] h-full dot-blur">
          <div className="flex flex-col xl:items-start gap-8 px-[20px]">
            <motion.h2
              className="font-medium bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-center lg:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              Hello. I'm Walid.
            </motion.h2>

            <motion.h2
              className="font-medium bg-gradient-to-r from-[#58ffb4] to-[#289061] bg-clip-text text-transparent md:mb-8 text-center lg:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.8,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              A Full-Stack Web Developer
            </motion.h2>
            <motion.p
              className=" text-[#bbbbbb] text-lg md:text-2xl max-w-[700px] lg:text-start text-center !leading-[1.5]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 1.1,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              Digital Craftsman deeply passionate about delivering exceptional
              experiences with{" "}
              <span className="font-bold bg-gradient-to-r from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
                Passion
              </span>
              ,{" "}
              <span className="font-bold bg-gradient-to-r from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
                Precision
              </span>
              , and{" "}
              <span className="font-bold bg-gradient-to-r from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
                Artistry
              </span>
            </motion.p>

            <motion.div
              className="center-center gap-6 mt-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 1.3,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              <Button
                text="Let's talk"
                bgColor="#289061"
                borderColor="[#289061]"
                hoverBg="#4b9876"
                icon={<BsFillSendFill size={18} />}
              />
              <Button
                text="Download CV"
                bgColor="transparent"
                borderColor="#727272b3"
                hoverBg="#72727233"
                icon={<BsCloudDownloadFill size={18} />}
              />

              {/* <button className="   backdrop-blur-md  ">
                <BsCloudDownloadFill size={18} />
              
              </button> */}
            </motion.div>
          </div>
        </div>
        {/* <div className='image-container relative hidden md:block animate-moveInRight'>
          <figure>
            <LazyLoadImage className='h-[30vh] w-[300px] md:h-[37vh] rounded-md object-cover ' effect="blur" src={walid} alt='' />
          </figure>
          <div className={`${darkMode ? '' : 'h-[37vh]'} absolute top-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-white`}></div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

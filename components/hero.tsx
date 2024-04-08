"use client";
import Image from "next/image";
import Section from "./section";
import curve from "@/public/curve.png";
import { motion } from "framer-motion";
import { BackgroundCircles, BottomLine } from "@/components/ui/circleHero";
import { useRef } from "react";
import Button from "./ui/button";
import { BsCloudDownloadFill, BsFillSendFill } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import MySkills from "./about";
import { useActiveSection } from "@/context/activeSectionContext";

const Hero = () => {
  const parallaxRef = useRef(null);
  const { ref } = useSectionInView("Home");
  const { setTimeOfLastClick, setActiveSection } = useActiveSection();

  return (
    <Section
      className="lg:pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="home"
    >
      <div className=" relative  mt-24" ref={parallaxRef}>
        <div className=" z-[999] center-center flex-col" ref={ref}>
          <motion.h2
            className="lg:text-6xl text-4xl bg-gradient-to-r from-white to-[#a5a5a5] cursor-pointer bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            {"Hello. I'm Walid.".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </motion.h2>

          <motion.h1
            className="relative lg:text-[70px] text-[40px] font-medium bg-gradient-to-br from-[#58ffb4] to-[#289061] cursor-pointer bg-clip-text text-transparent mt-8 mb-14 text-center "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.8,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            {"A Full-Stack Web Developer".split("").map((child, idx) => (
              <>
                <span className="hoverText" key={idx}>
                  {child}
                </span>
              </>
            ))}

            <Image
              src={curve}
              className="absolute lg:right-0 right-24  xl:-mt-2 lg:w-[320px] w-[200px]"
              alt="Curve"
            />
          </motion.h1>

          <motion.p
            className=" text-[#bbbbbb] text-lg md:text-2xl max-w-[700px] text-center cursor-pointer !leading-[1.5]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 1.1,
              type: "tween",
              ease: "easeInOut",
            }}
          >
            {"Digital Craftsman deeply passionate about delivering exceptional experiences with"
              .split("")
              .map((child, idx) => (
                <span className="hoverText" key={idx}>
                  {child}
                </span>
              ))}{" "}
            <span className="font-bold bg-gradient-to-br from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
              {"Passion".split("").map((child, idx) => (
                <span className="hoverText" key={idx}>
                  {child}
                </span>
              ))}
            </span>
            ,{" "}
            <span className="font-bold bg-gradient-to-br from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
              {"Precision".split("").map((child, idx) => (
                <span className="hoverText" key={idx}>
                  {child}
                </span>
              ))}
            </span>
            {", and".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}{" "}
            <span className="font-bold bg-gradient-to-br from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
              {"Artistry".split("").map((child, idx) => (
                <span className="hoverText" key={idx}>
                  {child}
                </span>
              ))}
            </span>
          </motion.p>

          <div className="center-center gap-6 mt-10">
            <motion.div
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
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
                link="#contact"
                text="Let's talk"
                bgColor="#289061"
                borderColor="#289061"
                hoverBg="#4b9876"
                icon={<BsFillSendFill size={18} />}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 1.5,
                type: "tween",
                ease: "easeInOut",
              }}
            >
              {" "}
              <Button
                text="Download CV"
                bgColor="#131313"
                borderColor="#727272b3"
                hoverBg="#72727233"
                icon={<BsCloudDownloadFill size={18} />}
              />
            </motion.div>
          </div>
        </div>

        <BackgroundCircles />
      </div>
      <BottomLine />
      <MySkills />
    </Section>
  );
};

export default Hero;

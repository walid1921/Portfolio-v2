"use client";
import Image from "next/image";
import Section from "./section";
import curve from "@/public/curve.png";
import robot from "@/public/robot.jpg";
import { motion } from "framer-motion";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "@/components/ui/circleHero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Button from "./ui/button";
import { BsCloudDownloadFill, BsFillSendFill } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { BsGithub } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Popsup from "./ui/popsup";

const HeroSection = () => {
  const parallaxRef = useRef(null);
  const { ref } = useSectionInView("Home");

  return (
    <Section
      className="lg:pt-[12rem] pt-[120px] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="home"
    >
      <div className=" relative" ref={parallaxRef}>
        <div className="relative z-1 center-center flex-col" ref={ref}>
          <motion.h2
            className="lg:text-6xl text-4xl bg-gradient-to-r from-white to-[#a5a5a5] cursor-pointer bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.6,
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
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl lg:mt-20 mt-28">
        <div className="relative z-1 p-0.5 rounded-[14px] bg-conic-gradient">
          <div className="relative bg-n-8 rounded-[14px]">
            <div className="aspect-[33/40] rounded-[14px] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <Image
                src={robot}
                className="w-full translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                width={1024}
                height={490}
                alt="AI"
              />{" "}
              <ScrollParallax isAbsolutelyPositioned>
                <div className="absolute lg:-left-[5.5rem] lg:bottom-[16rem] bottom-[160px] z-50 px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-[14px] xl:flex">
                  <div className="center-center flex-col lg:flex-row gap-5 lg:px-4 lg:py-1 px-1 py-4">
                    <Popsup
                      content="Github"
                      link="https://github.com/walid1921?tab=repositories"
                      side="top"
                      bgColor="#00000033"
                      icon={<BsGithub size={35} />}
                    />

                    <Popsup
                      content="Linkedin"
                      link="https://www.linkedin.com/in/walid-kouider-ayad"
                      side="top"
                      bgColor="#00000033"
                      icon={<FaLinkedin size={35} />}
                    />

                    <Popsup
                      content="Instagram"
                      link="https://instagram.com/dev.n.des?igshid=Y2IzZGU1MTFhOQ=="
                      side="top"
                      bgColor="#00000033"
                      icon={<FiInstagram size={35} />}
                    />
                  </div>
                </div>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                <div className="absolute lg:-right-10 lg:bottom-[8rem] bottom-[20px] z-2 px-1 py-1 bg-n-9/40 backdrop-blur border border-[#58ffb4] rounded-[14px] xl:flex">
                  <p className="px-4 py-1 text-[#58ffb4]">Open to work</p>
                </div>
              </ScrollParallax>
            </div>
          </div>
          <Gradient />
        </div>

        <BackgroundCircles />
      </div>

      <BottomLine />
    </Section>
  );
};

export default HeroSection;

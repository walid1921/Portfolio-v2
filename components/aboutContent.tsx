"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import { useSectionInView } from "@/lib/hooks";
import Popsup from "./ui/popsup";

const AboutContent = () => {
  const { ref } = useSectionInView("About");

  const ref2 = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["0.8 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" scroll-mt-28 "
      ref={ref2}
    >
      <section id="about">
        <div className="container relative rounded-md py-[50px]" ref={ref}>
          <h2 className="lg:text-3xl text-2xl text-center font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
            About Me
          </h2>

          <div className="flex flex-col gap-8">
            <p className="text-justify leading-8 text-md">
              I'm a 25-year-old Developer based in Germany, blending my
              background in Environmental Process Engineering with a passion for
              full-stack development. My journey began when I discovered the joy
              of using creativity to build captivating web experiences. Through
              persistence and self-discipline, I honed my skills to become a
              full-stack developer. Beyond coding, I indulge in side projects,
              exploring new realms of creativity and accomplishing exciting
              feats.
            </p>
          </div>
        </div>
        <div className="z-50 hidden lg:flex">
          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute lg:-right-[80px] lg:bottom-[10rem] bottom-[20px]  px-1 py-1 bg-n-9/40 backdrop-blur border border-[#58ffb4] rounded-[14px] xl:flex">
              <p className="px-4 py-1 text-[#58ffb4]">Open to work</p>
            </div>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute -z-[50] lg:-left-[160px] lg:bottom-[1rem] bottom-[160px]  px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-[14px] xl:flex">
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
        </div>
      </section>
    </motion.div>
  );
};

export default AboutContent;

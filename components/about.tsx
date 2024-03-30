"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import Section from "./section";
import Card from "./card";

const About = () => {
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
      <Section id="about" className=" text-[#bbbbbb] ">
        <div
          className="container relative bg-gradient-to-br from-[#272727] to-[#1a1a1a] rounded-md py-[50px] "
          ref={ref}
        >
          <p className="text-2xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
            About
          </p>

          <div className="flex flex-col gap-8">
            <p className="text-justify leading-8 text-lg z-50">
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
          <Card />
        </div>
      </Section>
    </motion.div>
  );
};

export default About;

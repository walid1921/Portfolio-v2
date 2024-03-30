"use client";
import React, { useState, useRef } from "react";
import reactQuery from "@/public/react-query-logo.png";
import { ScrollParallax } from "react-just-parallax";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Popsup from "./ui/popsup";
import figma from "@/public/figma.png";
import styledComponents from "@/public/styledComponents.png";
import framerMotion from "@/public/framerMotion.png";
import postman from "@/public/postman.svg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { FaLinkedin, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";

//! hoveredIconData
const hoveredIconData = [
  {
    id: "html",
    icon: <SiHtml5 size={32} color="#FF4320" />,
  },
  {
    id: "css",
    icon: <SiCss3 size={32} color="#1E90FF" />,
  },
  {
    id: "js",
    icon: <SiJavascript size={32} color="#F7DF1E" />,
  },
  {
    id: "git",
    icon: <BsGit size={32} color="#FF9900" />,
  },
  {
    id: "github",
    icon: <BsGithub size={32} color="#fff" />,
  },
  {
    id: "react",
    icon: <FaReact size={32} color="#61DAFB" />,
  },
  {
    id: "typescript",
    icon: <SiTypescript size={32} color="#007ACC" />,
  },
  {
    id: "sass",
    icon: <FaSass size={32} color="#CD6799" />,
  },
  {
    id: "bootstrap",
    icon: <SiBootstrap size={32} color="#6f42c1" />,
  },
  {
    id: "tailwind",
    icon: <SiTailwindcss size={32} color="#3490dc" />,
  },
  {
    id: "figma",
    icon: (
      <div className="h-[35px] w-[35px]">
        <Image
          className=" h-full w-full object-cover object-center"
          src={figma}
          alt=""
        />
      </div>
    ),
  },
  {
    id: "reactQuery",
    icon: (
      <div className="h-[35px] w-[35px]">
        <Image
          className=" h-full w-full object-cover object-center"
          src={reactQuery}
          alt=""
        />
      </div>
    ),
  },
  {
    id: "styledComponents",
    icon: (
      <div className="h-[35px] w-[35px]">
        <Image
          className=" h-full w-full object-cover object-center"
          src={styledComponents}
          alt=""
        />
      </div>
    ),
  },
  {
    id: "framerMotion",
    icon: (
      <div className="h-[35px] w-[35px]">
        <Image
          className=" h-full w-full object-cover object-center"
          src={framerMotion}
          alt=""
        />
      </div>
    ),
  },
  {
    id: "postman",
    icon: (
      <div className="h-[35px] w-[35px]">
        <Image
          className=" h-full w-full object-cover object-center"
          src={postman}
          alt=""
        />
      </div>
    ),
  },
  {
    id: "supabase",
    icon: <SiSupabase size={32} color="#3FA037" />,
  },
  {
    id: "mongodb",
    icon: <SiMongodb size={32} color="#3FA037" />,
  },
  {
    id: "express",
    icon: <SiExpress size={32} color="#fff" />,
  },
  {
    id: "node",
    icon: <FaNodeJs size={32} color="#8CC84B" />,
  },
  {
    id: "sql",
    icon: <SiPostgresql size={32} color="#3490dc" />,
  },
  {
    id: "prisma",
    icon: <SiPrisma size={32} color="#fff" />,
  },
  {
    id: "next",
    icon: <TbBrandNextjs size={32} color="#fff" />,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      ease: "easeInOut",
      type: "tween",
    },
  }),
};

const Skills = () => {
  const ref2 = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [skillWindow, setSkillWindow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const { ref } = useSectionInView("Skills");

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref2}
    >
      <div className=" z-50 scroll-mt-28" id="skills">
        <div
          ref={ref}
          className="relative overflow-hidden flex-col items-start justify-around rounded-md py-[50px] md:pb-[100px] pb-8 z-50"
        >
          <p className="text-2xl text-center font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-16 mb-10">
            Skills & Development Tools
          </p>

          <div>
            <div
              ref={tooltipRef}
              className={`absolute hidden md:block top-0  sm:top-[10px] sm:right-[10px] bg-white/10  w-auto rounded-lg ease-in-out duration-300 ${
                skillWindow ? "scale-100" : "scale-0"
              }`}
              style={{
                transformOrigin: "center-center",
                opacity: skillWindow ? 1 : 0,
              }}
            >
              {skillsData.map(
                (data) =>
                  data.id === hoveredIcon && (
                    <div
                      key={data.id}
                      className="flex  items-center px-2  sm:px-2  border rounded-lg border-gray-300 "
                      style={{ borderColor: `${data.borderColor}` }}
                    >
                      <div
                        className="mr-1 bg-cover"
                        style={{ color: `${data.color}` }}
                      >
                        {data.icon}
                      </div>

                      <p className="fira-font text-[12px] ml-2 font-medium">
                        {data.name}
                      </p>

                      <div className="w-[110px] h-2 m-5">
                        <div className="relative w-full h-full  rounded-lg bg-slate-200  flex justify-end">
                          <div
                            className={`absolute left-0  border rounded-full h-full 
                          `}
                            style={{
                              width: `${data.value}%`,
                              backgroundColor: `${data.bgColor}`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <span className="fira-font text-[12px] font-medium">
                        {data.percentage}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>

          <ul className="center-center gap-8 flex-wrap xl:px-[100px] ">
            {hoveredIconData.map((icon, index) => (
              <motion.li
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                key={icon.id}
                onMouseEnter={() => {
                  setIsOpen(true);
                  setHoveredIcon(icon.id);
                  setSkillWindow(true);
                }}
                onMouseLeave={() => {
                  setIsOpen(false);
                  setHoveredIcon(null);
                  setSkillWindow(false);
                }}
                className="md:opacity-70 hover:opacity-100 transition-all ease-in-out duration-250 hover:cursor-pointer mx-2 lg:mx-0"
              >
                {icon.icon}
              </motion.li>
            ))}
            <div className="absolute bottom-4 right-6 text-sm hidden md:block">
              Hover over a skill for current proficiency
            </div>
          </ul>
        </div>
        <div className="-z-50 hidden lg:flex">
          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute lg:-right-[80px] lg:bottom-[10rem] bottom-[20px]  px-1 py-1 bg-n-9/40 backdrop-blur border border-[#58ffb4] rounded-[14px] xl:flex">
              <p className="px-4 py-1 text-[#58ffb4]">Open to work</p>
            </div>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned>
            <div className="absolute -z-[50] lg:-left-[160px] lg:bottom-[4rem] bottom-[160px]  px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-[14px] xl:flex">
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
      </div>
    </motion.div>
  );
};

export default Skills;

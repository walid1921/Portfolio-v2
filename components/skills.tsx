"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import figma from "@/public/figma.png";
import styledComponents from "@/public/styledComponents.png";
import framerMotion from "@/public/framerMotion.png";
import reactQuery from "@/public/react-query-logo.png";
import postman from "@/public/postman.svg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { LeftCurve, RightCurve } from "./ui/skillsLine";
import Section from "./section";
import Popsup from "./ui/popsup";
import { useSectionInView } from "@/lib/hooks";
import Card from "./star";

//! hoveredIconData
const hoveredIconData1 = [
  {
    id: "HTML",
    icon: <SiHtml5 size={32} color="#FF4320" />,
  },
  {
    id: "CSS",
    icon: <SiCss3 size={32} color="#1E90FF" />,
  },
  {
    id: "Javascript",
    icon: <SiJavascript size={32} color="#F7DF1E" />,
  },
  {
    id: "Git",
    icon: <BsGit size={32} color="#FF9900" />,
  },
  {
    id: "Github",
    icon: <BsGithub size={32} color="#fff" />,
  },
  {
    id: "Typescript",
    icon: <SiTypescript size={32} color="#007ACC" />,
  },
  {
    id: "Sass",
    icon: <FaSass size={32} color="#CD6799" />,
  },
  {
    id: "Tailwind",
    icon: <SiTailwindcss size={32} color="#3490dc" />,
  },
];
const hoveredIconData2 = [
  {
    id: "Figma",
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
    id: "React Query",
    icon: (
      <div className="h-[35px] w-[35px]">
        <Image
          className=" h-full w-full object-cover object-center "
          src={reactQuery}
          alt=""
        />
      </div>
    ),
  },
  {
    id: "Styled Components",
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
    id: "Framer Motion",
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
    id: "Postman",
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
    id: "Supabase",
    icon: <SiSupabase size={32} color="#3FA037" />,
  },
  {
    id: "Mongodb",
    icon: <SiMongodb size={32} color="#3FA037" />,
  },
  {
    id: "Express.js",
    icon: <SiExpress size={32} color="#fff" />,
  },
  {
    id: "Node.js",
    icon: <FaNodeJs size={32} color="#8CC84B" />,
  },
  {
    id: "Mysql",
    icon: <SiPostgresql size={32} color="#3490dc" />,
  },
  {
    id: "Prisma",
    icon: <SiPrisma size={32} color="#fff" />,
  },
  {
    id: "Next.js",
    icon: <TbBrandNextjs size={32} color="#fff" />,
  },
];

const Skills = () => {
  const [angles, setAngles] = useState([]); // State to store angles for positioning icons
  const { ref, inView } = useSectionInView("Skills");

  useEffect(() => {
    // Function to calculate angles for positioning icons in a circle
    const calculateAngles = (numIcons: number) => {
      const angleStep = (2 * Math.PI) / numIcons; // Calculate angle step
      const initialAngle = 0; // Initial angle (starts from top)
      const anglesArray = []; // Array to store angles
      for (let i = 0; i < numIcons; i++) {
        anglesArray.push(initialAngle + i * angleStep); // Push calculated angles into the array
      }
      return anglesArray; // Return array of angles
    };

    setAngles(calculateAngles(hoveredIconData2.length));
    // Set angles using the calculated angles
  }, []);

  return (
    <Section id="skills">
      <div className="container  center-center flex-col">
        <p className="lg:text-3xl text-2xl text-start font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent my-24 ">
          Skills & Development Tools
        </p>
        <div className="relative  flex md:w-[34rem] w-[20rem] aspect-square border border-n-6 rounded-full scale-100  hover:border-[#58ffb4] transition-all ease-in-out duration-300">
          <div className="relative flex md:w-[20rem] w-[12rem] aspect-square m-auto border border-n-6  rounded-full hover:border-[#58ffb4] transition-all ease-in-out duration-300">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div
                className="center-center w-full h-full bg-n-8 opacity-90 rounded-full "
                ref={ref}
              >
                <motion.div
                  className="z-50 center-center"
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          rotate: 360, // Rotate continuously in a circle
                          transition: {
                            duration: 0.8, // Duration of each rotation
                            loop: Infinity, // Infinite loop
                            ease: "linear", // Linear easing
                          },
                        }
                      : { opacity: 1 }
                  }
                >
                  <Popsup
                    icon={<FaReact size={40} color="#61DAFB" />}
                    content="React"
                    side="top"
                  />
                </motion.div>
              </div>
            </div>

            <ul>
              {hoveredIconData1.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className={`absolute z-30 top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    idx * 45
                  }`}
                  whileInView="animate"
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,

                          // rotate: idx * 45 + 360, // Rotate continuously in a circle
                          transition: {
                            delay: 0.5,
                            duration: 1, // Duration of each rotation
                            loop: Infinity, // Infinite loop
                            ease: "linear", // Linear easing
                          },
                        }
                      : { opacity: 0 }
                  }
                >
                  <span
                    className={`md:h-14  md:w-14 h-12 w-12 relative -top-[1.6rem] bg-n-7 border border-n-1/15 hover:border-[#58ffb4] transition-all ease-in-out duration-300 center-center rounded-xl -rotate-${
                      idx * 45
                    }`}
                  >
                    <Popsup icon={skill.icon} content={skill.id} side="top" />
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <ul>
            {hoveredIconData2.map((skill, idx) => (
              <li
                key={idx}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                style={{ transform: `rotate(${angles[idx]}rad)` }} // Set rotation angle for each icon
              >
                <motion.span
                  className={`md:h-14 md:w-14 h-12 w-12 relative -top-[1.6rem] bg-n-7 border border-n-1/15 hover:border-[#58ffb4] transition-all ease-in-out duration-300 center-center rounded-xl `}
                  style={{ transform: `rotate(-${angles[idx]}rad)` }} // Apply reverse rotation
                  initial={{ opacity: 0 }}
                  animate={
                    inView
                      ? {
                          opacity: 1,

                          // rotate: idx * 45 + 360, // Rotate continuously in a circle
                          transition: {
                            delay: 0.5,
                            duration: 2, // Duration of each rotation
                            loop: Infinity, // Infinite loop
                            ease: "linear", // Linear easing
                          },
                        }
                      : { opacity: 0 }
                  }
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <Popsup icon={skill.icon} content={skill.id} side="top" />
                </motion.span>
              </li>
            ))}
          </ul>
          <Card />
          <LeftCurve />
          <RightCurve />
        </div>
      </div>
    </Section>
  );
};

export default Skills;

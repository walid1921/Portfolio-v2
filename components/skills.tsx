"use client";
import React, { useState, useRef } from "react";

import figma from "@/public/figma.png";
import reactQuery from "@/public/react-query-logo.png";
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
import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";
import { skillsData } from "@/lib/data";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";

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
    icon: <BsGithub size={32} color="#000" />,
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
    icon: <SiExpress size={32} color="#000" />,
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
    icon: <TbBrandNextjs size={32} color="#000" />,
  },
];

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [skillWindow, setSkillWindow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mb-20">
      <div className="relative container flex-col items-start justify-around rounded-md py-[50px] md:pb-[100px] bg-[#1c1c1c]">
        <p className="text-2xl font-medium  bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent md:mb-16 mb-10">
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
                    className="flex   items-center px-2  sm:px-2  border rounded-lg border-gray-300 "
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
                          className={`absolute left-0 bg-gradient-to-br ${
                            data.bgColor
                          } border rounded-full h-full transition-all ease-in-out duration-500 ${
                            skillWindow ? "tooltip-bar" : ""
                          }`}
                          style={{
                            width: skillWindow ? `${data.value}%` : "0%",
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

        <div className="center-center gap-8 flex-wrap xl:px-[260px]">
          {hoveredIconData.map((icon) => (
            <div
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
              className="md:opacity-70 hover:opacity-100 transition-all ease-in-out duration-250 hover:cursor-pointer"
            >
              {icon.icon}
            </div>
          ))}
          <div className="absolute bottom-4 right-6 text-sm text-[#bbb] hidden md:block">
            Hover over a skill for current proficiency
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

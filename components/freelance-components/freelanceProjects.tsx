"use client";

import React from "react";
import BlurFade from "../ui/blur-fade";
import ProjectCard from "./projectCard";
import { Button } from "../ui/button";
import Link from "next/link";
import Section from "../section";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Evoke is a Framer Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website. It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.",
    role: "Designer & Frontend Developer",
    Deliverables: "Web Design, Development, SEO",
    Company: "Google",
    images: ["/portfolio1.png", "/portfolio4.png", "/portfolio11.png"],
    url: "/project1",
    year: "2023",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Evoke is a Framer Template made for digital marketing agencies and SaaS businesses. It features multiple pages, and tons of unique sections to help build your new website. It's built to help you showcase your business's services or products, your past work, and gives your users an easy way to get in touch with you through the Calendly embed.",
    role: "Designer & Frontend Developer",
    Deliverables: "Web Design, Development, SEO",
    Company: "Google",
    images: ["/portfolio1.png", "/portfolio13.jpeg"],
    url: "/project2",
    year: "2023",
  },
];

const FreelanceProjects = () => {
  return (
    <Section crosses className="relative w-full pt-36 ">
      <div className="flex flex-col gap-10 container">
        <BlurFade delay={0.4} inView>
          <h2 className="lg:text-4xl text-2xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
            Recent Projects
          </h2>
        </BlurFade>

        <div className=" flex flex-col gap-28 items-start w-full">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Button className="inline-flex justify-center items-center w-full">
          <Link href="/freelance/projects">See More</Link>
        </Button>
      </div>
    </Section>
  );
};

export default FreelanceProjects;

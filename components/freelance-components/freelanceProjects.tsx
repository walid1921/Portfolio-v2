"use client";

import React from "react";
import BlurFade from "../ui/blur-fade";
import ProjectCard from "./projectCard";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Kuchen Trend",
    description:
      "Developed a modern, SEO-optimized website for Kuchen Trend, a digital marketing agency. The project involved creating a user-friendly design and optimizing for lead generation.",
    role: "Designer & Frontend Developer",
    Deliverables: "Web Design, Development, SEO",
    images: ["/portfolio1.png", "/portfolio4.png", "/portfolio11.png"],
    url: "/project1",
    year: "2023",
    timeSpent: "2 Weeks",
    challenges:
      "Redesigning the site without disrupting existing SEO rankings.",
    technologies: ["React", "Next.js", "TailwindCSS"],
    results: "Boosted page load speed by 40% and improved bounce rate by 20%.",
    clientFeedback:
      "The team exceeded expectations, delivering a polished product ahead of schedule!",
    projectType: "Corporate Website Redesign",
  },
  {
    id: 2,
    title: "GroomGrid",
    description:
      "Designed and developed a comprehensive platform for GroomGrid, a pet grooming SaaS solution. Focused on a responsive interface and seamless booking integration for pet care businesses.",
    role: "UI/UX Designer & Fullstack Developer",
    Deliverables: "UI/UX Design, Fullstack Development, API Integration",
    images: ["/portfolio1.png", "/portfolio13.jpeg", "/portfolio11.png"],
    url: "/project2",
    year: "2023",
    timeSpent: "4 months",
    challenges:
      "Implementing a custom scheduling algorithm and ensuring high scalability for the backend.",
    technologies: ["React", "Next.js", "TailwindCSS"],
    results:
      "Achieved 99.9% uptime post-launch and onboarded 100+ businesses in the first quarter.",
    clientFeedback:
      "The platform exceeded our expectations! It's intuitive and scalable for our growing customer base.",
    projectType: "SaaS Platform Development",
  },
];

const FreelanceProjects = () => {
  return (
    <section className="relative w-full py-32 ">
      <div className="flex flex-col container">
        <BlurFade delay={0.4} inView>
          <h2 className="lg:text-4xl text-3xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-10">
            Recent Projects
          </h2>
        </BlurFade>

        <div className=" flex flex-col gap-28 items-start w-full">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10">
          <Button>
            <Link
              href="/freelance/projects"
              className="flex gap-3 items-center justify-center "
            >
              All Projects <ArrowUpRight size={25} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreelanceProjects;

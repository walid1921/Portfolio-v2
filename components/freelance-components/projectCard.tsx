import React from "react";
import Image from "next/image";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Popsup from "../ui/popsup";
import BlurFade from "../ui/blur-fade";

type Project = {
  id: number;
  title: string;
  description: string;
  role: string;
  Deliverables: string;
  images: string[];
  url: string;
  year: string;
  timeSpent: string;
  challenges?: string;
  technologies?: string[];
  results?: string;
  clientFeedback?: string;
  projectType?: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-28 items-start w-full">
      {/* Left side */}
      <div className="flex flex-col gap-6 md:w-[40%] md:sticky md:top-[70px]">
        <span className="py-1 text-sm px-3 border border-[#2b2d2d] bg-[#1d1d1d] rounded-full w-fit">
          {project.year}
        </span>
        <h4 className="text-2xl">{project.title}</h4>
        <p>{project.description}</p>
        <div className="flex flex-col gap-5 mt-14 w-full">
          {project.projectType && (
            <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
              <p className="text-[#737373]">Project Type</p>
              <p className="text-sm text-right">{project.projectType}</p>
            </div>
          )}
          <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
            <p className="text-[#737373]">Role</p>{" "}
            <p className="text-sm text-right">{project.role}</p>
          </div>
          <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
            <p className="text-[#737373]">Deliverables</p>
            <p className="text-sm text-right">{project.Deliverables}</p>
          </div>
          <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
            <p className="text-[#737373]">Time Spent</p>
            <p className="text-sm text-right">{project.timeSpent}</p>
          </div>
          
          {project.challenges && (
            <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
              <p className="text-[#737373]">Challenges</p>
              <p className="text-sm text-right">{project.challenges}</p>
            </div>
          )}
          {project.technologies && (
            <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
              <p className="text-[#737373]">Technologies</p>
              <p className="text-sm text-right">
                {project.technologies.join(", ")}
              </p>
            </div>
          )}
          {project.results && (
            <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
              <p className="text-[#737373]">Results</p>
              <p className="text-sm text-right">{project.results}</p>
            </div>
          )}
          {project.clientFeedback && (
            <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
              <p className="text-[#737373]">Client Feedback</p>
              <p className="text-sm text-right">{project.clientFeedback}</p>
            </div>
          )}

          <div className="flex w-full justify-between border-b border-[#ffffff14] pb-4 gap-10">
            <p className="text-[#737373]">Visit Site</p>
            <Popsup
              content="Visit Site"
              link={project.url}
              side="top"
              borderColor="#5fcf65a3"
              bgColor="#5fcf656a"
              icon={<HiOutlineStatusOnline size={28} />}
            />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-[60%]">
        <BlurFade delay={0.6} inView>
          <div className="flex flex-col gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full group hover:opacity-60 ease-in-out transition-all duration-300"
              >
                <Image
                  src={image}
                  height={800}
                  width={800}
                  quality={80}
                  className="object-cover rounded-lg"
                  alt={`${project.title} - Image ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default ProjectCard;

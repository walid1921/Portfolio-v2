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
  Company: string;
  images: string[];
  url: string;
  year: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex  gap-28 items-start w-full">
      {/* Left side */}
      <div className="flex flex-col gap-6 w-[40%] sticky top-[70px]">
        <span className="py-1 text-sm px-3 border border-[#2b2d2d] bg-[#1d1d1d] rounded-full w-fit">
          {project.year}
        </span>
        <h4 className="text-2xl">{project.title}</h4>
        <p>{project.description}</p>
        <div className="flex flex-col gap-5 mt-14 w-full">
          <div className="flex w-full justify-between border-b pb-6">
            <p className="text-[#737373]">Role</p> <p>{project.role}</p>
          </div>
          <div className="flex w-full justify-between border-b pb-6">
            <p className="text-[#737373]">Deliverables</p>{" "}
            <p>{project.Deliverables}</p>
          </div>
          <div className="flex w-full justify-between border-b pb-6">
            <p className="text-[#737373]">Company</p> <p>{project.Company}</p>
          </div>
          <div className="flex w-full justify-between border-b pb-6">
            <p className="text-[#737373]">Visit Site</p>{" "}
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

      {/* Right side  */}
      <div className="w-[60%]">
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

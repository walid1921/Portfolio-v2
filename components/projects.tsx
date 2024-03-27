"use client";
import React, { useEffect, useState } from "react";
import { projectsData } from "@/lib/data";
import { BsGithub } from "react-icons/bs";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const [nextItems, setNextItems] = useState(4);
  const [project, setProject] = useState(projectsData);
  const [filter, setFilter] = useState("all");

  const { ref } = useSectionInView("Projects", 0.5);

  const loadHandler = () => {
    setNextItems((prev) => prev + 2);
  };

  useEffect(() => {
    if (filter === "all") {
      setProject(projectsData);
    }

    if (filter === "landing-page") {
      const filteredData = projectsData.filter(
        (item) => item.category === "Landing Page"
      );
      setProject(filteredData);
    }

    if (filter === "App") {
      const filteredData = projectsData.filter(
        (item) => item.category === "App"
      );
      setProject(filteredData);
    }

    if (filter === "realProject") {
      const filteredData = projectsData.filter(
        (item) => item.tag === "Real Project"
      );
      setProject(filteredData);
    }

    if (filter === "sideProject") {
      const filteredData = projectsData.filter(
        (item) => item.tag === "Side Project"
      );
      setProject(filteredData);
    }
  }, [filter]);

  return (
    <section
      ref={ref}
      id="projects"
      className="flex justify-center mb-20 scroll-mt-28"
    >
      <div className="max-w-[1300px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
          <p className="text-2xl pl-[20px] font-medium bg-gradient-to-br from-white to-[#4d4d4d] bg-clip-text text-transparent mb-10">
            Projects <span className="text-sm">({project.length})</span>
          </p>

          <div className="center-center">
            <div className="center-center border rounded z-10 bg-[#1c1c1c] border-[#72727266]">
              <button
                onClick={() => setFilter("all")}
                className=" hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200 "
              >
                All
              </button>

              <button
                onClick={() => setFilter("landing-page")}
                className=" hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
              >
                Landing Page
              </button>

              <button
                onClick={() => setFilter("App")}
                className="hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
              >
                Web Application
              </button>

              <button
                onClick={() => setFilter("realProject")}
                className="hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
              >
                Real Project
              </button>

              <button
                onClick={() => setFilter("sideProject")}
                className="hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
              >
                Side Project
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12 ">
          {project?.slice(0, nextItems)?.map((project) => (
            <div
              className="relative mx-2 md:mx-0 group sm:w-full md:w-[49%] w-full h-[250px] lg:h-[400px] rounded-md cursor-pointer "
              key={project.id}
            >
              <Image
                className="rounded-md h-full w-full z-0 object-cover object-center opacity-60  transition-opacity ease-in duration-150 "
                src={project.imgUrl}
                alt={project.title}
                placeholder="blur"
                priority
              />

              <div className="h-full w-full absolute inset-0 hover:backdrop-blur-sm transition-all ease-in duration-300 flex justify-center items-start opacity-0 hover:opacity-100">
                {/* <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#000000] bg-opacity-50 text-white text-lg font-semibold px-4 py-2 rounded-md z-10 select-none"
                >
                  View Github
                </motion.a> */}

                <div className="relative center-center flex-col  gap-5 mt-12 md:mt-32 w-full  transition-all ease-in duration-300">
                  {" "}
                  <div className="flex gap-10 items-center ">
                    {" "}
                    <TooltipProvider
                      delayDuration={100}
                      skipDelayDuration={100}
                    >
                      <Tooltip>
                        <TooltipTrigger className="z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 text-white hover:scale-110">
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h hover:scale-75"
                          >
                            <BsGithub size={40} />
                          </Link>
                        </TooltipTrigger>

                        <TooltipContent
                          className=" border border-[#fff] text-[#fff] rounded-md px-2 py-1  bg-black/20 backdrop-blur-md text-xs"
                          sideOffset={10}
                          align="center"
                          side="top"
                        >
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider
                      delayDuration={100}
                      skipDelayDuration={100}
                    >
                      <Tooltip>
                        <TooltipTrigger className="z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:text-white hover:scale-110">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <HiOutlineStatusOnline
                              size={40}
                              color="#5fcf65a3"
                            />
                          </Link>
                        </TooltipTrigger>

                        <TooltipContent
                          className=" border border-[#5fcf65a3] rounded-md px-2 py-1  bg-[#5fcf656a] backdrop-blur-md text-xs"
                          sideOffset={10}
                          align="center"
                          side="top"
                        >
                          <p className="text-[#fff]">Live</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <p className="text-sm">
                    Visit Github for Project's documentation
                  </p>
                </div>
              </div>
              <div className="absolute  bottom-0 left-0 md:px-4 px-2 py-1 md:py-4 right-3 z-1 bg-black/20 backdrop-blur-md w-full ">
                <div className="flex justify-between items-center">
                  <p className="  md:text-xl font-semibold">{project.title}</p>
                  {project.tag === "Side Project" && (
                    <span className="border-[#f7b50097] text-[#f7b50097] border rounded-sm md:rounded-md px-2 md:py-1 py-[2px]  bg-black/20 backdrop-blur-md text-xs">
                      {project.tag}
                    </span>
                  )}
                  {project.tag === "Real Project" && (
                    <span className="border-[#5fcf6562] text-[#5fcf6562] border rounded-sm md:rounded-md px-2 md:py-1 py-[2px]  bg-black/20 backdrop-blur-md text-xs">
                      {project.tag}
                    </span>
                  )}
                </div>

                <p className=" text-sm overflow-hidden text-ellipsis whitespace-nowrap pr-36 mb-1 md:my-2">
                  {project.description}
                </p>

                <div className="flex md:gap-4 gap-1 flex-wrap ">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="border border-[#bab7b766] rounded-sm md:rounded-md px-2 md:py-1 py-[2px]  bg-black/20 backdrop-blur-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center-center mt-12 ">
          {nextItems < projectsData.length && projectsData.length > 4 && (
            <button
              onClick={loadHandler}
              className="text-[#bbb] text-sm font-semibold tracking-wide bg-gradient-to-br from-[#404040] to-[#232323] rounded py-2 px-4 cursor-pointer transition-all ease-in duration-150 hover:opacity-75 center gap-2 z-10"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

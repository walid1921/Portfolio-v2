"use client";
import React, { useEffect, useState } from "react";
import { projectsData } from "@/lib/data";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { CalendarDays, CircleArrowDown } from "lucide-react";
import Popsup from "@/components/ui/popsup";
import BlurFade from "@/components/ui/blur-fade";
import PrimaryBtn from "@/components/ui/primaryBtn";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import MySwiper from "@/components/ui/swiper";
import FreelanceFooter from "@/components/freelance-components/freelanceFooter";

const data = [
  {
    id: 1,
    imgUrl: "/portfolio1.png",
    category: "Landing Page",
  },
  {
    id: 2,
    imgUrl: "/portfolio13.jpeg",
    category: "App",
  },
  {
    id: 3,
    imgUrl: "/portfolio4.png",
    category: "Real Project",
  },
  {
    id: 4,
    imgUrl: "/portfolio8.png",
    category: "Side Project",
  },
];

const Page = () => {
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
    <section className="flex flex-col relative justify-center md:pt-36 pt-20">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <div className="md:px-20 z-1" ref={ref}>
        <div className="container flex flex-col pb-32  gap-20 md:grid md:grid-cols-2 md:grid-rows-1 items-center w-full ">
          <div className="flex flex-col justify-between h-full ">
            <div className="flex flex-col justify-start h-full">
              <BlurFade delay={0.4} inView>
                <h2 className="lg:text-4xl text-3xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
                  Projects
                </h2>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <p className="md:text-3xl text-xl">
                  Some of the projects We've worked on over the years.
                </p>
              </BlurFade>

              <BlurFade delay={0.6} inView>
                <div className=" leading-7 text-justify mt-6">
                  <p className="mb-[1rem]">
                    We have worked with clients all over the US and Canada for
                    home services contractors, restaurants, consulting agencies,
                    start ups, dermatologists, doctors, accountants, and more.
                    No matter what your business is, we can build a website that
                    is effective, beautiful, performant, and tailored to your
                    industry.
                  </p>
                </div>
              </BlurFade>
            </div>

            <div className="flex gap-6 mt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.3,
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <PrimaryBtn>
                  {" "}
                  <Link
                    href="/freelance/contact"
                    className="flex items-center justify-center gap-4"
                  >
                    {" "}
                    Get Started <CalendarDays size={16} />
                  </Link>{" "}
                </PrimaryBtn>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.6,
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
              >
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="text-white py-2 px-4 md:py-4 md:px-6"
                >
                  <Link href="/services"> Our Services</Link>
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="relative">
            <MySwiper data={data} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-end ">
          <div className="center-center">
            <div className="center-center border rounded z-10 bg-[#1c1c1c] border-[#72727266]">
              <button
                onClick={() => setFilter("all")}
                className=" hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-[10px] md:text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200 "
              >
                All
              </button>

              <button
                onClick={() => setFilter("landing-page")}
                className=" hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-[10px] md:text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
              >
                Landing Page
              </button>

              <button
                onClick={() => setFilter("App")}
                className="hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-[10px] md:text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
              >
                Web Application
              </button>

              <button
                onClick={() => setFilter("realProject")}
                className="hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-[10px] md:text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
              >
                Real Project
              </button>

              <button
                onClick={() => setFilter("sideProject")}
                className="hover:bg-[rgba(114,114,114,0.6)] text-[#bbb] border-[#72727266] text-[10px] md:text-sm border-r py-2 px-4 cursor-pointer transition-all ease-in duration-200"
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
                <div className="relative center-center flex-col  gap-5 mt-12 md:mt-32 w-full  transition-all ease-in duration-300">
                  {" "}
                  <div className="flex gap-10 items-center ">
                    <Popsup
                      content="Live"
                      link={project.liveUrl}
                      side="top"
                      borderColor="#5fcf65a3"
                      bgColor="#5fcf656a"
                      icon={
                        <HiOutlineStatusOnline size={40} color="#5fcf65a3" />
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="absolute  bottom-0 left-0 md:px-4 px-2 py-2 md:py-4 right-3 z-1 bg-black/20 backdrop-blur-md w-full ">
                <div className="flex justify-between items-center">
                  <p className="  md:text-xl font-semibold">{project.title}</p>
                </div>

                <p className=" md:text-sm text-[12px] overflow-hidden text-ellipsis whitespace-nowrap pr-36 mb-1 md:my-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="center-center mt-16 ">
          {nextItems < projectsData.length && projectsData.length > 4 && (
            <Popsup
              onClick={loadHandler}
              content="Load More"
              side="top"
              icon={<CircleArrowDown size={40} color="#404040" />}
            />
          )}
        </div>
      </div>
      <FreelanceFooter/>
    </section>
  );
};

export default Page;

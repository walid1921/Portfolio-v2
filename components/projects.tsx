import React from "react";
import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";

const Projects = () => {
  return (
    <section id="work" className=" text-[#bbbbbb] flex justify-center mb-20">
      <div className="max-w-[1300px]">
        <p className="text-2xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-16 mb-10 pl-[20px]">
          Projects
        </p>

        <HorizontalScrollCarousel />
      </div>
    </section>
  );
};

export default Projects;

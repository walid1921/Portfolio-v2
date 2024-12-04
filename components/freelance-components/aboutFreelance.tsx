"use client";
import React from "react";
import { ScrollParallax } from "react-just-parallax";
import Founder from "./founder";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutFreelance = () => {
  return (
    <section id="about" className="relative mt-10">
      <div className="container  relative rounded-md py-[50px] ">
        <h2 className="lg:text-3xl text-2xl text-center font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
          About Me
        </h2>

        <div className="flex justify-center  items-center gap-8">
          <p className="text-justify leading-8 text-md w-[80%] z-10">
            I'm a 26-year-old Developer based in Germany, blending my background
            in Environmental Process Engineering with a passion for full-stack
            development. My journey began when I discovered the joy of using
            creativity to build captivating web experiences. Through persistence
            and self-discipline, I honed my skills to become a full-stack
            developer. Beyond coding, I indulge in side projects, exploring new
            realms of creativity and accomplishing exciting feats.
            <Link
              href="/freelance/about"
              className=" inline-flex items-center gap-2 hover:underline hover:text-white ease-in-out transition-all duration-200 text-[#58ffb4] cursor-pointer ml-4 "
            >
              Read more <ChevronRight size={16} />
            </Link>
          </p>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute lg:right-[80px] lg:bottom-[10rem] bottom-[20px]  px-4 py-2 bg-n-9/40 backdrop-blur border border-[#58ffb4] rounded-[14px] xl:flex">
            <Founder
              url={"https://i.pravatar.cc/150?u=a042581f4e29026024d"}
              name={"Walid Kouider Ayad"}
              subtitle={"Available for freelance work"}
            />
          </div>
        </ScrollParallax>
      </div>
    </section>
  );
};

export default AboutFreelance;

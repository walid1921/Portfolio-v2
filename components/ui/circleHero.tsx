"use client";
import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import tailwind from "../../public/tailwind.png";
import html from "../../public/html.png";
import typescript from "../../public/typescript.png";
import mongodb from "../../public/mongo-db.png";
import react from "../../public/react.png";
import nodejs from "../../public/nodejs.png";

import PlusSvg from "./plusSvg";
import Image from "next/image";

export const Gradient = () => {
  return (
    <>
      {/* <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" /> */}
      <div className="relative z-1 h-5 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-4 lg:mx-6" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[1005px] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute  top-[1000px] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute  top-[1000px] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
}; 

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

type BackgroundCirclesProps = {
  parallaxRef?: React.RefObject<HTMLDivElement>;
};

export const BackgroundCircles = ({ parallaxRef }: BackgroundCirclesProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute hidden lg:flex top-[500px] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[150px] -z-50">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div className="h-10 w-10 rounded-full opacity-60 transition-all duration-150 ease-in-out">
            <Image
              src={typescript}
              alt=""
              priority={true}
              className={` -ml-1 w-full h-full -mt-36  transition-transform duration-500 ease-out -rotate-[20deg] ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div className="h-[60px] w-[60px] rounded-full opacity-60 transition-all duration-150 ease-in-out">
            <Image
              src={mongodb}
              alt=""
              priority={true}
              className={` -ml-1 w-full h-full -mt-36  transition-transform duration-500 ease-out rotate-[20deg] ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div className="h-10 w-10 rounded-full opacity-60 transition-all duration-150 ease-in-out">
            <Image
              src={react}
              alt=""
              priority={true}
              className={` -ml-1 w-full h-full mt-[12.9rem]  transition-transform duration-500 ease-out -rotate-[20deg] ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div className="h-10 w-10 rounded-full opacity-60 transition-all duration-150 ease-in-out">
            <Image
              src={nodejs}
              alt=""
              priority={true}
              className={` -ml-1 w-full h-full mt-52  transition-transform duration-500 ease-out rotate-[20deg] ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div className="h-10 w-10 rounded-full opacity-60 transition-all duration-150 ease-in-out">
            <Image
              src={html}
              alt=""
              priority={true}
              className={` -ml-3 -mt-3 w-full h-full   transition-transform duration-500 ease-out rotate-[50deg] ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div className="h-[60px] w-[60px] rounded-full opacity-60 transition-all duration-150 ease-in-out">
            <Image
              src={tailwind}
              alt=""
              priority={true}
              className={` -ml-3 -mt-3 w-full h-full   transition-transform duration-500 ease-out -rotate-[50deg] ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        </div>
      </MouseParallax>
    </div>
  );
};

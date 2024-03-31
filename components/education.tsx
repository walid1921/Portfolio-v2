import React from "react";
import { Slider } from "./slider";
import Section from "./section";
import { EducationData } from "@/lib/data";
import Image from "next/image";
import grid from "@/public/grid.png";
import Gradient from "./ui/gradient";

const Education = () => {
  return (
    <Section className="overflow-hidden" id="education">
      <div className="container md:pb-10">
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {EducationData.map((data) => (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                data.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={data.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.5rem] overflow-hidden xl:p-15">
                <div >
                  <Image
                    src={grid}
                    alt="grid"
                    className="w-full"
                    width={550}
                    height={550}
                  />
                  <div className="relative z-1">
                    <h3 className="text-3xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
                      {data.category}
                    </h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Education;

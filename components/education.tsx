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
        <p className="lg:text-3xl text-2xl text-start font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-24 ">
          Education
        </p>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {EducationData.map((data) => (
            <div
              className={`md:flex even:md:translate-y-[10rem]  p-0.25 rounded-[2.5rem] ${
                data.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={data.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.5rem] h-full w-full overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 w-full">
                  <Image
                    src={grid}
                    alt="grid"
                    className="w-full"
                    width={550}
                    height={550}
                  />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {data.content.map((content) => (
                      <div key={content.title}>
                        <h4 className="text-2xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
                          {content.title}
                        </h4>
                        <p>{content.subtitle}</p>
                      </div>
                    ))}
                  </div>
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

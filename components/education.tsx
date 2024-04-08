"use client";
import React from "react";
import Section from "./section";
import { EducationData } from "@/lib/data";
import Image from "next/image";
import grid from "@/public/grid.png";
import Gradient from "./ui/gradient";
import { FiLoader } from "react-icons/fi";
import { HiCheck } from "react-icons/hi";
import { AiOutlineLink, AiOutlineSafetyCertificate } from "react-icons/ai";
import Popsup from "@/components/ui/popsup";

const Education = () => {
  return (
    <Section crosses  id="education">
      <div className="container md:pb-10">
        <p className="lg:text-3xl text-2xl text-start font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-24 ">
          Education
        </p>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 ">
          {EducationData.map((data) => (
            <div
              className={`md:flex even:md:translate-y-[15rem]  p-0.25 rounded-[6px] ${
                data.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={data.id}
            >
              <div className="relative p-8 bg-[#181818] rounded-[6px] h-full w-full overflow-hidden xl:pt-15 xl:px-15">
                <div className="absolute top-0 left-0 w-full">
                  <Image src={grid} alt="grid" />
                </div>
                <div className="flex flex-col h-full gap-10">
                  <div className="relative z-1">
                    <h3 className="text-3xl text-center font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-5">
                      {data.category}
                    </h3>
                  </div>
                  <div>
                    {data.content.map((content) => (
                      <div
                        key={content.title}
                        className="flex items-center justify-between gap-10 mb-10"
                      >
                        <div>
                          <h4 className="text-xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent ">
                            {content.title}
                          </h4>
                          <p className="text-n-4">{content.subtitle}</p>
                        </div>
                        {content.linkUrl && (
                          <div className="md:flex gap-4 hidden items-center ">
                            {content.status === "completed" ? (
                              <Popsup
                                content="See Certificate"
                                icon={<AiOutlineSafetyCertificate size={25} />}
                                side="top"
                                link={content.certificationPdf}
                              />
                            ) : (
                              <Popsup
                                content="Currently studying"
                                icon={<FiLoader size={25} />}
                                side="top"
                              />
                            )}
                            <Popsup
                              content="Visit Course"
                              icon={<AiOutlineLink size={25} />}
                              side="top"
                              link={content.linkUrl}
                            />{" "}
                          </div>
                        )}
                      </div>
                    ))}
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

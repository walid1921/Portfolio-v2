"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { EducationData } from "@/lib/data"; // Assuming EducationData is correctly exported

export function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden pb-10 " ref={emblaRef}>
        <div className="flex gap-3 md:ml-0 ml-3">
          {EducationData.map((data) => (
            <div
              key={data.id}
              className="md:px-[40px] md:mx-[20px] py-6 bg-neutral-300 hover:bg-neutral-200 hover:cursor-grab transition-all ease-in-out duration-300"
            >
              <p className="text-primary fill-transparent text-center font-extrabold text-[40px] 2xl:text-[130px] 2xl:mx-16 mx-32">
                {data.category}
              </p>
              {data.content.map((item, index) => (
                <div key={index}>
                  <p className="text-secondary text-center mb-3 md:text-[22px] text-[14px] font-bold">
                    {item.title}
                  </p>
                  <p className="text-secondary text-justify 2xl:text-[16px] text-[13px] 2xl:leading-[40px] md:leading-[30px] leading-[25px] md:px-0 px-6">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-center w-full">
        <button
          className="text-primary hover:text-white hover:border-white transition-all ease-linear duration-200 p-1 border rounded-full border-primary"
          onClick={scrollPrev}
        >
          <HiChevronLeft size={25} />
        </button>

        <button
          className="text-primary hover:text-white hover:border-white transition-all ease-linear duration-200 p-1 border rounded-full border-primary"
          onClick={scrollNext}
        >
          <HiChevronRight size={25} />
        </button>
      </div>
    </div>
  );
}

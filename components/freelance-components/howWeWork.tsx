"use client";
import kitchen from "../../public/kitchen.jpg";
import room from "../../public/room.jpg";
import bathroom from "../../public/bathroom.jpg";
import hallway from "../../public/hallway.jpg";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import BlurFade from "../ui/blur-fade";
import { TooltipComp } from "../ui/tooltipComp";

type ButtonTypes = {
  name: string;
  image: StaticImageData;
};

const buttons: ButtonTypes[] = [
  { name: "Kitchen", image: kitchen },
  { name: "Rooms", image: room },
  { name: "Bathroom", image: bathroom },
  { name: "Hallway", image: hallway },
];

type PositionTypes = {
  top: string;
  left: string;
};

type LiveIconTypes = {
  text: string;
  position: PositionTypes;
};

const liveIconsData: Record<string, LiveIconTypes[]> = {
  Kitchen: [
    { text: "Clean facade hood", position: { top: "10%", left: "20%" } },
    { text: "Take out the trash", position: { top: "40%", left: "60%" } },
  ],
  Rooms: [
    { text: "Change the sheets", position: { top: "15%", left: "30%" } },
    { text: "Vacuum the carpet", position: { top: "50%", left: "70%" } },
  ],
  Bathroom: [
    { text: "Scrub the tiles", position: { top: "20%", left: "40%" } },
    { text: "Restock toiletries", position: { top: "50%", left: "30%" } },
  ],
  Hallway: [
    { text: "Dust the shelves", position: { top: "10%", left: "20%" } },
    { text: "Wipe the light fixtures", position: { top: "30%", left: "60%" } },
  ],
};

const SectionHowWeWork = () => {
  const [activeButton, setActiveButton] = useState("Kitchen");

  const handleBtnClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const activeImage = buttons.find(
    (button) => button.name === activeButton
  )?.image;

  return (
    <section className="section container relative">
      <div className="flex flex-col md:flex-row items-center md:gap-32">
        <div className="md:col-span-1">
          <BlurFade delay={0.4} inView>
            <h2 className="lg:text-4xl text-3xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-10 leading-[1.2]">
              How do we clean the{" "}
              <span className="font-bold text-primary">apartments.</span>
            </h2>
          </BlurFade>
        </div>
        <div className="md:col-span-2 flex flex-col">
          <BlurFade delay={0.6} inView>
            <div className="font-normal leading-6 mb-8">
              Cleaner arrives at the appointed time with everything you need and
              immediately gets down to business. You just have to evaluate the
              result.
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-20">
        {/* Button Section */}
        <div className="relative flex border border-[#2b2d2d] p-1 rounded-lg w-full ">
          <div
            className="absolute left-0 top-0 h-full w-1/4  border bg-[#1b1d1d] rounded-lg transition-all duration-300 ease-in-out"
            style={{
              transform: `translateX(${
                buttons.findIndex((button) => button.name === activeButton) *
                100
              }%)`,
            }}
          ></div>

          {buttons.map(({ name }) => (
            <button
              key={name}
              onClick={() => handleBtnClick(name)}
              className={`${
                activeButton === name ? "text-white" : "hover:text-white"
              }  font-semibold rounded-full py-1 flex-1 transition-all ease-in-out duration-300 cursor-pointer z-10`}
            >
              {name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="relative w-full"
            key={activeButton}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {activeImage ? (
              <>
                <Image
                  src={activeImage}
                  placeholder="blur"
                  quality={80}
                  className="object-cover w-full h-auto md:h-[700px] transition-opacity duration-300 rounded-lg"
                  alt={`Image of ${activeButton}`}
                />
                {/* Display Live Icons */}
                {liveIconsData[activeButton]?.map((icon, index) => (
                  <div
                    key={index}
                    className="absolute z-50"
                    style={{ top: icon.position.top, left: icon.position.left }}
                  >
                    <TooltipComp text={icon.text} />
                  </div>
                ))}
              </>
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center bg-slate-200">
                <p className="text-gray-500 text-lg">
                  No image available for this section.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SectionHowWeWork;

"use client";
import Image from "next/image";
import curve from "@/public/curve.png";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import ButtonJob from "@/components/ui/buttonJob";
import { MarqueeVertical } from "@/components/freelance-components/marqueeVertical";
import { TextGradient } from "@/components/freelance-components/textGradient";
import Reviews from "@/components/freelance-components/reviews";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PrimaryBtn from "@/components/ui/primaryBtn";

const FreelancePage = () => {
  return (
    <section
      className="relative lg:pt-[12rem] -mt-[5.25rem] h-screen"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <MarqueeVertical />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="mb-20">
        <TextGradient>Stay Updated on our latest services</TextGradient>
      </div>

      {/* Foreground Content */}
      <div className="relative z-[999] flex flex-col items-center">
        <motion.h2
          className="lg:text-6xl text-4xl bg-gradient-to-r from-white to-[#a5a5a5] cursor-pointer bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          {"Hello. I'm Walid.".split("").map((child, idx) => (
            <span className="hoverText" key={idx}>
              {child}
            </span>
          ))}
        </motion.h2>

        <motion.h1
          className="relative lg:text-[70px] text-[40px] font-medium bg-gradient-to-br from-[#58ffb4] to-[#289061] cursor-pointer bg-clip-text text-transparent mt-4 mb-14 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.8,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          {"A Full-Stack Web Developer".split("").map((child, idx) => (
            <span className="hoverText" key={idx}>
              {child}
            </span>
          ))}
          <Image
            src={curve}
            className="absolute lg:right-0 right-24 xl:-mt-2 lg:w-[320px] w-[200px]"
            alt="Curve"
          />
        </motion.h1>

        <motion.p
          className="text-[#bbbbbb] text-lg md:text-2xl max-w-[700px] text-center cursor-pointer !leading-[1.5]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 1.1,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          {"Digital Craftsman deeply passionate about delivering exceptional experiences with"
            .split("")
            .map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}{" "}
          <span className="font-bold bg-gradient-to-br from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
            {"Passion".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </span>
          ,{" "}
          <span className="font-bold bg-gradient-to-br from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
            {"Precision".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </span>
          {", and".split("").map((child, idx) => (
            <span className="hoverText" key={idx}>
              {child}
            </span>
          ))}{" "}
          <span className="font-bold bg-gradient-to-br from-[#58ffb4] to-[#289061] bg-clip-text text-transparent">
            {"Artistry".split("").map((child, idx) => (
              <span className="hoverText" key={idx}>
                {child}
              </span>
            ))}
          </span>
        </motion.p>

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
                href="/contact"
                className="flex items-center justify-center gap-4"
              >
                {" "}
                Let's Talk <BsFillSendFill size={16} />
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
      <div className="absolute bottom-8 right-4">
        {" "}
        <Reviews />
      </div>
    </section>
  );
};

export default FreelancePage;

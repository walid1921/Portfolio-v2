import Image from "next/image";
import curve from "@/public/curve.png";
import { motion } from "framer-motion";
import { MarqueeVertical } from "@/components/freelance-components/marqueeVertical";
import { TextGradient } from "@/components/freelance-components/textGradient";
import Reviews from "@/components/freelance-components/reviews";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PrimaryBtn from "@/components/ui/primaryBtn";
import { CalendarDays } from "lucide-react";

const FreelanceHero = () => {
  return (
    <section className="relative md:pt-[12rem] pt-[4rem] h-screen " id="home">
      {/* Background */}
      <div className="absolute inset-0">
        <MarqueeVertical />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>

      <div className="mb-20">
        <TextGradient>Stay Updated on our latest services</TextGradient>
      </div>

      {/* Foreground Content */}
      <div className="relative flex flex-col items-center">
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
          {"Your website".split("").map((child, idx) => (
            <span className="hoverText" key={idx}>
              {child}
            </span>
          ))}
        </motion.h2>

        <motion.h1
          className="relative lg:text-[40px]  text-[20px] font-medium bg-gradient-to-br from-[#58ffb4] to-[#289061] cursor-pointer bg-clip-text text-transparent mt-4 mb-14 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.8,
            type: "tween",
            ease: "easeInOut",
          }}
        >
          {"is not just a page...it's your brand identity".split("").map((child, idx) => (
            <span className="hoverText" key={idx}>
              {child}
            </span>
          ))}
          <Image
            src={curve}
            className="absolute lg:right-0 right-24 h-[7px] xl:-mt-2 lg:w-[250px] w-[200px]"
            alt="Curve"
          />
        </motion.h1>

        <div className="flex gap-6 mt-10">
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
                href="freelance/contact"
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
      <div className="absolute bottom-8 right-10">
        {" "}
        <Reviews />
      </div>
    </section>
  );
};

export default FreelanceHero;

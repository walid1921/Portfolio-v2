"use client";

import Founder from "@/components/freelance-components/founder";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import walid from "@/public/walid.jpg";
import SectionTowCol from "@/components/freelance-components/sectionTowCol";
import signature from "@/public/signature.png";
import PrimaryBtn from "@/components/ui/primaryBtn";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const page = () => {
  return (
    <SectionTowCol>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full "
        )}
      />
      <div className="relative flex flex-col justify-evenly h-full">
        <div className="flex flex-col items-start">
          <section className="flex flex-col gap-6">
            <BlurFade delay={0.4} inView>
              <h2 className="lg:text-4xl text-2xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
                About Me
              </h2>
            </BlurFade>
            <BlurFade delay={0.6} inView>
              <div className=" leading-7 text-justify">
                <p className="mb-[1rem]">
                  Hey there! I'm Walid, a freelance web developer based in
                  Bremen. With over 2 years of experience, I specialize in
                  crafting dynamic websites that leave a lasting impression. My
                  skills span HTML, CSS, JavaScript, and more, allowing me to
                  bring your digital vision to life with precision and
                  creativity.
                </p>
                <p className="mb-[1rem]">
                  From sleek landing pages to robust e-commerce platforms, I've
                  got you covered. I thrive on exceeding client expectations,
                  whether it's building responsive designs or optimizing for
                  SEO. I take the time to understand your goals, ensuring the
                  end product meets your needs.
                </p>
                <p className="mb-[1rem]">
                  Located in Bremen, I draw inspiration from the city's diverse
                  culture and innovative spirit. Let's collaborate and turn your
                  ideas into captivating online experiences!
                </p>
              </div>
            </BlurFade>
          </section>

          <motion.div
            className="mt-10 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.3,
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Founder
              name={"Walid Kouider Ayad"}
              signature={signature}
              subtitle={"Full Stack Developer"}
              className="p-1 border-2 border-primary object-cover "
            />
          </motion.div>
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1,
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
                Get Started <CalendarDays size={16} />
              </Link>{" "}
            </PrimaryBtn>
          </motion.div>
        </div>
      </div>

      <div className="relative rounded-lg p-1 bg-conic-gradient w-[500px]">
        <Image
          src={walid}
          height={500}
          width={500}
          quality={80}
          className="object-cover z-20 grid-span-1  rounded-lg"
          alt="Family sitting around a fire pit in front of cabin"
          loading="lazy"
        />
      </div>
    </SectionTowCol>
  );
};

export default page;

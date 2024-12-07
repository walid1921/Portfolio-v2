"use client";
import React from "react";
import Founder from "./founder";
import Image from "next/image";
import BlurFade from "../ui/blur-fade";
import walid from "@/public/walid.jpg";
import Link from "next/link";
import signature from "@/public/signature.png"; 

const FreelanceAbout = () => {
  return (
    <section className="relative w-full pt-36 container">
      <BlurFade delay={0.4} inView>
        <h2 className="lg:text-4xl text-2xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
          About
        </h2>
      </BlurFade>
      <div className="flex flex-col gap-28 md:grid md:grid-cols-2 md:grid-rows-1 items-start w-full">
        <div className="flex items-start gap-8 sticky top-[120px]">
          <Image
            src={walid}
            height={90}
            width={90}
            quality={80}
            className="object-cover z-20 grid-span-1  rounded-full"
            alt="Family sitting around a fire pit in front of cabin"
            loading="lazy"
          />
          <div>
            <p className="text-2xl">
              I’m Walid - an experienced freelance web developer crafting
              Digital experiences from Bremen
            </p>
            <div className=" mt-10 relative">
              <Founder
                name={"Walid Kouider Ayad"}
                signature={signature}
                subtitle={"Web Developer"}
                className="p-1 border-2 border-primary object-cover "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <BlurFade delay={0.6} inView>
            <div className=" leading-7 text-justify">
              <p className="mb-[1rem]">
                Hey there! I'm Walid, a freelance web developer based in Bremen.
                With over 2 years of experience, I specialize in crafting
                dynamic websites that leave a lasting impression. My skills span
                HTML, CSS, JavaScript, and more, allowing me to bring your
                digital vision to life with precision and creativity.
              </p>
              <p className="mb-[1rem]">
                From sleek landing pages to robust e-commerce platforms, I've
                got you covered. I thrive on exceeding client expectations,
                whether it's building responsive designs or optimizing for SEO.
                I take the time to understand your goals, ensuring the end
                product meets your needs.{" "}
              </p>
              <p className="mb-[1rem]">
                Located in Bremen, I draw inspiration from the city's diverse
                culture and innovative spirit. Let's collaborate and turn your
                ideas into captivating online experiences!{" "}
                <span
                  className="
                  text-primary hover:text-secondary transition-colors duration-300 ease-in-out ml-4
                  "
                >
                  <Link href="#"> Read more</Link>
                </span>
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default FreelanceAbout;

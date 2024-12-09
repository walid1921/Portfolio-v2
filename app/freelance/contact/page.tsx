"use client";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import FreelanceContact from "@/components/freelance-components/freelanceContact";
import FreelanceFooter from "@/components/freelance-components/freelanceFooter";
import FreelanceQst from "@/components/freelance-components/freelanceQst";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import MySwiper from "@/components/ui/swiper";
import GridPattern from "@/components/ui/grid-pattern";

const data = [
  {
    id: 1,
    imgUrl: "/Insta1.jpg",
    category: "Landing Page",
  },
  {
    id: 2,
    imgUrl: "/Insta2.jpg",
    category: "App",
  },
  {
    id: 3,
    imgUrl: "/Insta3.jpg",
    category: "Real Project",
  },
];

const page = () => {
  return (
    <section className="relative w-full md:pt-32 pt-20 my-2 mx-2">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="container md:pb-32 pb-20">
        <BlurFade delay={0.4} inView>
          <h2 className="text-2xl md:text-4xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
            Contact
          </h2>
        </BlurFade>
        <div className="flex flex-col gap-12 md:gap-28 md:grid md:grid-cols-2 md:grid-rows-1 items-start w-full">
          <BlurFade
            delay={0.6}
            inView
            className="flex items-start gap-8 md:sticky md:top-[120px]"
          >
            <p className="text-lg md:text-2xl">
              Let’s bring your ideas to life! Fill out the form, and we’ll get
              back to you within 24 hours.
            </p>
          </BlurFade>

          <div className="flex flex-col gap-6 ">
            <BlurFade delay={1} inView>
              <div className="leading-7 text-justify text-sm md:text-base">
                <p className="mb-4">
                  Whether you’re looking to revamp your current website or build
                  one from the ground up, we’re here to help.
                </p>
                <p className="mb-4">
                  Prefer a direct conversation? Give us a call for an immediate
                  chat. If we’re unavailable, we’ll return your call the same
                  day.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <FreelanceContact />
      <div className="container">
        <FreelanceQst />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 pt-32 container">
        {/* Socials */}
        <div className="flex flex-col justify-between border border-[#ffffff14] rounded-[6px] p-4 md:row-span-3">
          <Twitter size={25} />
          <span className="text-sm">
            <Link href="">@Walid</Link>
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 border border-[#ffffff14] rounded-[6px] p-4">
          <Linkedin size={25} />
          <span className="text-sm">
            <Link href="">@Walid</Link>
          </span>
        </div>
        {/* Main content and other social links */}
        <div className="col-span-2 row-span-7 border border-[#ffffff14] rounded-[6px] p-4 relative">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className="inset-x-0"
          />
        </div>
        <div className="flex flex-col justify-between col-span-2 row-span-7 border border-[#ffffff14] rounded-[6px]">
          <span className="p-4">
            <Instagram size={25} />
          </span>

          <MySwiper data={data} />
          <span className="p-4">
            <Link
              href=""
              className="hover:text-primary transition-all ease-in-out duration-150"
            >
              @dev.n.des
            </Link>
          </span>
        </div>

        <div className="border border-[#ffffff14] rounded-[6px] p-4">
          000-000-0000
        </div>
        <div className="border border-[#ffffff14] rounded-[6px] p-4">
          Something
        </div>

        <div className="flex gap-4 col-span-2 border border-[#ffffff14] rounded-[6px] p-4">
          <Mail size={25} /> Buisness@email.com
        </div>
        <div className="flex relative justify-center items-center text-center row-span-3 col-span-2 border border-[#ffffff14] rounded-[6px] p-4">
          <BlurFade delay={0.4} inView>
            {" "}
            <p>
              {" "}
              "Design is not just what it looks like and feels like. Design is
              how it works." - Steve Jobs
            </p>{" "}
          </BlurFade>
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
        </div>
      </div>

      <FreelanceFooter />
    </section>
  );
};

export default page;

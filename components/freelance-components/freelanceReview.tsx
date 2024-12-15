import ReviewCard from "./reviewCard";
import Marquee from "../ui/marquee";
import BlurFade from "../ui/blur-fade";
import Link from "next/link";
import { motion } from "framer-motion";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import PrimaryBtn from "../ui/primaryBtn";
import { CalendarDays } from "lucide-react";

const randomData = [
  {
    id: 1,
    owner: "Walid Kouider Ayad",
    position: "CEO",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate repudiandae recusandae sed beatae laborum ipsa rep",
  },
  {
    id: 2,
    owner: "Walid Kouider Ayad",
    position: "CEO",
    img: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate repudiandae recusandae sed beatae laborum ipsa rep",
  },
  {
    id: 3,
    owner: "Walid Kouider Ayad",
    position: "CEO",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate repudiandae recusandae sed beatae laborum ipsa rep",
  },
];

const FreelanceReviews = () => {
  const firstRow = randomData.slice(0, randomData.length / 2);
  const secondRow = randomData.slice(randomData.length / 2);

  return (
    <section className="relative w-full md:py-32 mt-2 ml-2 z-10">
      <DotPattern
        reverse
        width={20}
        height={20}
        cx={15}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row md:gap-16 md:items-start  ">
          <div className=" relative  flex  md:h-[80vh] h-[50vh] flex-row items-center justify-center overflow-hidden bg-background ">
            <Marquee
              className="[--duration:20s] hidden md:flex"
              pauseOnHover
              vertical
            >
              {firstRow.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              vertical
              className="[--duration:20s] hidden md:flex"
            >
              {secondRow.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
            <Marquee
              className="[--duration:20s] w-screen md:hidden"
              pauseOnHover
            >
              {firstRow.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0E1010] hidden md:flex"></div>
            <div className="pointer-events-none md:absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0E1010] hidden md:flex"></div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0E1010] md:hidden"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0E1010] md:hidden"></div>
          </div>

          <div className="flex flex-col md:gap-6 md:w-[40%] mt-10 md:mt-0">
            <BlurFade delay={0.4} inView>
              <h2 className="lg:text-4xl text-3xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-10 ">
                What others say about us!
              </h2>
            </BlurFade>
            <BlurFade delay={0.6} inView>
              <div className=" leading-7 text-justify">
                <p className="mb-[1rem]">
                  We have considered our solutions to support every stage of
                  your business growth. We have a team of experts who are ready
                  to help you with your business needs.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.8} inView>
              <PrimaryBtn className="mt-8">
                {" "}
                <Link
                  href="freelance/contact"
                  className="flex items-center justify-center gap-4 "
                >
                  {" "}
                  Get Started <CalendarDays size={16} />
                </Link>{" "}
              </PrimaryBtn>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceReviews;

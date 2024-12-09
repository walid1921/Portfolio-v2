import React from "react";
import ReviewCard from "./reviewCard";
import Marquee from "../ui/marquee";
import BlurFade from "../ui/blur-fade";

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
  return (
    <section className="w-screen md:max-w-screen-2xl mx-auto">
      <BlurFade delay={0.4} inView>
        <h2 className="lg:text-4xl container text-2xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-10">
          What others say about us
        </h2>
      </BlurFade>
      <div className=" h-[400px] mt-8 flex items-center justify-center overflow-hidden">
        <Marquee className="[--duration:35s]" pauseOnHover>
          {randomData.map((random) => (
            <ReviewCard key={random.id} {...random} />
          ))}
        </Marquee>
        
      </div>
    </section>
  );
};

export default FreelanceReviews;

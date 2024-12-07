import React from "react";
import ReviewCard from "./reviewCard";
import Marquee from "../ui/marquee";

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
    <section className="container ">
      <div className="relative h-[400px] flex w-full md:flex-row items-center justify-center overflow-hidden">
        <Marquee className="[--duration:35s]" pauseOnHover>
          {randomData.map((random) => (
            <ReviewCard key={random.id} {...random} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 opacity-30 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 opacity-30 bg-gradient-to-l from-black"></div>
      </div>
    </section>
  );
};

export default FreelanceReviews;

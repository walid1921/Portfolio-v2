import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const randomData = [
  {
    img: "/portfolio4.png",
  },
  {
    img: "/portfolio13.jpeg",
  },
  {
    img: "/portfolio2.png",
  },
];

const Kuchentrend = [
  {
    img: "/portfolio6.png",
  },
  {
    img: "/portfolio6.jpeg",
  },
  {
    img: "/portfolio6.png",
  },
];

const MagicClean = [
  {
    img: "/portfolio1.png",
  },
  {
    img: "/portfolio1.jpeg",
  },
  {
    img: "/portfolio1.png",
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className={cn("relative overflow-hidden")}>
      <img alt="dg" src={img} />
    </figure>
  );
};

export function MarqueeVertical() {
  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center overflow-hidden  bg-background ">
      <Marquee reverse vertical className="[--duration:35s]">
        {randomData.map((random) => (
          <ReviewCard key={random.img} {...random} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:35s]">
        {MagicClean.map((magic) => (
          <ReviewCard key={magic.img} {...magic} />
        ))}
      </Marquee>
      <Marquee reverse vertical className="[--duration:35s]">
        {Kuchentrend.map((kuchen) => (
          <ReviewCard key={kuchen.img} {...kuchen} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black "></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black "></div>
    </div>
  );
}

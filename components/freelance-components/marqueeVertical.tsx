import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";

const randomData = [
  {
    id: 1,
    img: "/portfolio1.png",
  },
  {
    id: 2,
    img: "/portfolio2.jpeg",
  },
  {
    id: 3,
    img: "/portfolio3.png",
  },
];

const Kuchentrend = [
  {
    id: 1,
    img: "/portfolio1.png",
  },
  {
    id: 2,
    img: "/portfolio1.jpeg",
  },
  {
    id: 3,
    img: "/portfolio1.png",
  },
];

const MagicClean = [
  {
    id: 1,
    img: "/portfolio1.png",
  },
  {
    id: 2,
    img: "/portfolio2.jpeg",
  },
  {
    id: 3,
    img: "/portfolio3.png",
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className={cn("relative overflow-hidden")}>
      <img alt="Image" src={img} className="w-full h-auto object-cover" />
    </figure>
  );
};

export function MarqueeVertical() {
  return (
    <div className="relative flex h-screen w-full flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Single Column on Mobile */}
      <div className="block md:hidden w-full h-full">
        <Marquee vertical className="[--duration:35s]">
          {randomData.map((random) => (
            <ReviewCard key={random.id} {...random} />
          ))}
        </Marquee>
      </div>

      {/* Three Columns on Larger Screens */}
      <div className="hidden md:flex h-full w-full">
        <Marquee reverse vertical className="[--duration:35s]">
          {randomData.map((random) => (
            <ReviewCard key={random.id} {...random} />
          ))}
        </Marquee>
        <Marquee vertical className="[--duration:35s]">
          {MagicClean.map((magic) => (
            <ReviewCard key={magic.id} {...magic} />
          ))}
        </Marquee>
        <Marquee reverse vertical className="[--duration:35s]">
          {Kuchentrend.map((kuchen) => (
            <ReviewCard key={kuchen.id} {...kuchen} />
          ))}
        </Marquee>
      </div>

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black "></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black "></div>
    </div>
  );
}

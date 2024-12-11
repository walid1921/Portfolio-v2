import { Sparkle } from "lucide-react";
import GridPattern from "../ui/grid-pattern";
import { cn } from "@/lib/utils";

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  longDescription?: string;
};

type CardData = {
  cardData: CardProps[];
};

const Card = ({ cardData }: CardData) => {
  return cardData?.map((card, index) => (
    <div
      key={index}
      className={`relative overflow-hidden rounded-lg py-6 border shadow-md border-[#2b2d2d]  bg-[#1b1d1d] transition-all duration-700 ease-in-out group md:w-[300px] md:h-[240px] h-[180px] ${
        card.longDescription ? "hover:bg-background hover:border-background transition-all duration-700 ease-in-out " : ""
      }`}
    >
      {/* Initial Content */}
      <div
        className={`mx-6 flex flex-col gap-8 transition-opacity duration-700 ease-in-out ${
          card.longDescription ? "group-hover:hidden" : ""
        }`}
      >
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        {card.icon}
        <p className="md:mt-4  flex items-center gap-2 text-primary font-semibold">
          <Sparkle className="size-6 text-" />
          {card.title}
        </p>
        <p className="text-sm md:text-base">{card.description}</p>
      </div>

      {/* Hover Content (Only if longDescription exists) */}
      {card.longDescription && (
        <div className="mx-6 hidden group-hover:flex h-full items-center transition-opacity duration-700 ease-in-out">
          <p className=" text-sm md:text-base">{card.longDescription}</p>
        </div>
      )}

      {/* Blur Effect */}
      {!card.longDescription && (
        <div className="absolute -bottom-20 -left-2 w-[300px] h-[150px] bg-[#51AEE5] rounded-full blur-[150px] pointer-events-none"></div>
      )}
    </div>
  ));
};

export default Card;

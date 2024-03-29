import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";

type PopsupProps = {
  content: string;
  icon: React.ReactNode;
  iconColor?: string;
  link?: string;
  side: "top" | "right" | "bottom" | "left";
  borderColor?: string;
  bgColor?: string;
  onClick?: () => void;
};

const Popsup = ({
  content,
  icon,
  link,
  side,
  borderColor = "#fff",
  bgColor,
  onClick,
}: PopsupProps) => {
  return (
    <TooltipProvider delayDuration={100} skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="z-30 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:text-white hover:scale-110">
          {link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </Link>
          )}
          {!link && (
            <button
              className="hover:text-[#bbb] cursor-pointer transition-all ease-in duration-150 hover:scale-105 active:scale-100"
              onClick={onClick}
            >
              {icon}
            </button>
          )}
        </TooltipTrigger>

        <TooltipContent
          className=" border  rounded-md px-2 py-1  backdrop-blur-md text-xs"
          style={{
            borderColor: borderColor,
            backgroundColor: bgColor,
          }}
          sideOffset={10}
          align="center"
          side={side}
        >
          <p className="text-[#fff]">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Popsup;

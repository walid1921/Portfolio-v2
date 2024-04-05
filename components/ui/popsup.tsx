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
  children?: React.ReactNode;
};

const Popsup = ({
  content,
  icon,
  link,
  side,
  borderColor = "#fff",
  bgColor,
  onClick,
  children,
}: PopsupProps) => {
  return (
    <TooltipProvider delayDuration={100} skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger
          className={`z-50 rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:text-white`}
        >
          {children}
          {link && (
            <Link href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </Link>
          )}
          {!link && (
            <div
              className="hover:text-[#bbb] cursor-pointer transition-all ease-in duration-150 hover:scale-105 active:scale-100 p-0 m-0"
              onClick={onClick}
            >
              {icon}
            </div>
          )}
        </TooltipTrigger>

        <TooltipContent
          className=" border rounded-md px-2 py-1  backdrop-blur-md text-xs"
          style={{
            borderColor: borderColor,
            backgroundColor: bgColor,
          }}
          sideOffset={15}
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

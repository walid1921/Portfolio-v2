import Link from "next/link";
import React from "react";

type ButtonProps = {
  icon?: React.ReactNode;
  bgColor: "#289061" | "#131313";
  borderColor: string;
  hoverBg: string;
  text: string;
  type?: "button" | "submit" | "reset";
  link?: string;
  onClick?: () => void;
};

const Button = ({
  icon,
  bgColor,
  hoverBg,
  text,
  borderColor,
  type,
  onClick,
  link,
}: ButtonProps) => {
  // If link is not provided or is an empty string, render the button without Link
  if (!link) {
    return (
      <button
        type={type ? type : "button"}
        className={`gap-[8px] flex items-center font-semibold border rounded-full  px-[20px] py-[8px] md:px-[25px] md:py-[12px] text-sm 
      transition-all ease-in-out duration-150 hover:text-white disabled:bg:opacity-65 hover:bg-${hoverBg}`}
        style={{ borderColor: `${borderColor}`, backgroundColor: `${bgColor}` }}
        onClick={onClick}
      >
        {text}
        {icon}
      </button>
    );
  }

  // Otherwise, render the button wrapped in a Link
  return (
    <Link href={link}>
      <span
        className={`gap-[8px] flex items-center font-semibold border rounded-full px-[20px] py-[8px] md:px-[25px] md:py-[12px] text-sm 
      transition-all ease-in-out duration-150 hover:text-white hover:bg-${hoverBg}`}
        style={{ borderColor: `${borderColor}`, backgroundColor: `${bgColor}` }}
        onClick={onClick}
      >
        {text}
        {icon}
      </span>
    </Link>
  );
};

export default Button;

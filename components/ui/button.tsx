import Link from "next/link";
import React from "react";

type ButtonProps = {
  icon?: React.ReactNode;
  bgColor: "#289061" | "#131313";
  borderColor: string;
  hoverBg: string;
  text: string;
  link: string;
  onClick?: () => void;
};

const Button = ({
  icon,
  bgColor,
  hoverBg,
  text,
  borderColor,
  onClick,
  link,
}: ButtonProps) => {
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

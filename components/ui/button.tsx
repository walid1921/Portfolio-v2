import Link from "next/link";
import React from "react";

type ButtonProps = {
  icon?: React.ReactNode;
  text: string;
  link: string;
  onClick?: () => void;
};

const Button = ({
  icon,
  text,
  onClick,
  link,
}: ButtonProps) => {
  return (
    <Link href={link}>
      <span
        className={`gap-[8px] flex items-center font-semibold border rounded-full px-[20px] py-[8px] md:px-[25px] md:py-[10px] text-md 
      transition-all ease-in-out duration-300 text-white hover:bg-[#4b9876] bg-[#289061] border-[#289061]`}
        
        onClick={onClick}
      >
        {text}
        {icon}
      </span>
    </Link>
  );
};

export default Button;

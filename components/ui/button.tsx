import React from "react";

type ButtonProps = {
  icon?: React.ReactNode;
  bgColor: string;
  borderColor: string;
  hoverBg: string;
  text: string;
};

const Button = ({ icon, bgColor, hoverBg, text, borderColor }: ButtonProps) => {
  return (
    <button
      className={`gap-[8px] flex items-center font-semibold border rounded-full  px-[20px] py-[8px] md:px-[25px] md:py-[12px] bg-[${bgColor}] text-sm 
     border-${borderColor} transition-all ease-in-out duration-150 hover:text-white hover:bg-[${hoverBg}]`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;

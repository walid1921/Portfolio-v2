import Image from "next/image";
import React from "react";

type CardProps = {
  id: number;
  title: string;
  description: string;
  imgUrl: any;
};

export function Card({ id, title, imgUrl, description }: CardProps) {
  return (
    <div
      key={id}
      className="group relative h-[450px] w-[700px] overflow-hidden"
    >
      <Image
        src={imgUrl}
        alt=""
        className="absolute inset-0 z-0 object-cover object-center h-full rounded-md"
      />
      <div className="absolute bottom-0 z-10 grid place-content-center bg-black/20  backdrop-blur-lg py-6 px-10">
        <p className=" text-2xl font-medium text-[#fff] bg-clip-text text-transparent  rounded-md">
          {title}
        </p>
        <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-[#fff]">
          {description}
        </p>
      </div>
    </div>
  );
}

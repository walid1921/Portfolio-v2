import llline2 from "@/public/llline2.svg";
import llline from "@/public/llline.svg";
import Image from "next/image";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[32.625rem] -mt-1 ml-10 pointer-events-none xl:block">
      <Image src={llline} width={500}  alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <Image src={llline2} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

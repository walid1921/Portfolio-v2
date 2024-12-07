import Image, { StaticImageData } from "next/image";

import Avatar from "./avatar";

type FounderProps = {
  url?: string;
  name: string;
  signature?: StaticImageData | string;
  subtitle?: string;
  className?: string;
};

const Founder = ({
  url,
  name,
  signature,
  subtitle,
  className,
}: FounderProps) => {
  return (
    <div className="flex items-center space-x-3 ">
      {url && (
        <div className={`flex  rounded-full ${className}`}>
          <Avatar url={url} height={50} width={50} />
        </div>
      )}

      <div className="relative flex flex-col">
        <strong className="z-10">{name}</strong>
        <div className="flex items-center space-x-2 z-10">
          {!signature && (
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          )}
          <span className="text-[12px] text-primary">{subtitle}</span>
        </div>
        {signature && (
          <Image
            src={signature}
            alt="The Founder"
            height={120}
            width={120}
            className="absolute -top-1 left-0 z-2 invert brightness-200 opacity-15"
          />
        )}
      </div>
    </div>
  );
};

export default Founder;

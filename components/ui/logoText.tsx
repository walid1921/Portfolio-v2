import { cn } from "@/lib/utils";

type LogoTextProps = {
  className?: string;
};

const LogoText = ({ className }: LogoTextProps) => {
  return (
    <div
      className={cn("flex flex-col items-center text-2xl relative", className)}
    >
      <div className="flex items-center">
        <span className="text-[50px] font-extralight text-primary">[</span>
        <div className="flex items-center gap-1 md:gap-2 mx-1">
          <span className="text-[20px]  font-extralight">Dev</span>
          <span className="text-[20px] md:text-[22px]  font-semibold ">&</span>
          <span className="text-[20px]  font-extralight">Des</span>
        </div>
        <span className="text-[50px] font-extralight text-primary">]</span>
      </div>

      <span className="text-[8px] md:text-[10px] absolute -bottom-[18px] md:-bottom-[23px] text-primary">
        STUDIO
      </span>
    </div>
  );
};

export default LogoText;

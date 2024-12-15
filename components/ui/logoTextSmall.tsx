import { cn } from "@/lib/utils";

type LogoTextSmallProps = {
  className?: string;
};

const LogoTextSmall = ({ className }: LogoTextSmallProps) => {
  return (
    <div
      className={cn("flex flex-col items-center text-2xl relative", className)}
    >
      <div className="flex items-center">
        <span className="md:text-[50px] text-[35px] font-extralight text-primary">
          [
        </span>
        <div className="flex items-center gap-1 md:gap-2 mx-1">
          <span className="md:text-[20px] text-[16px]  font-extralight">
            Dev
          </span>
          <span className="md:text-[20px] text-[16px] font-semibold ">&</span>
          <span className="md:text-[20px] text-[16px]  font-extralight">
            Des
          </span>
        </div>
        <span className="md:text-[50px] text-[35px] font-extralight text-primary">
          ]
        </span>
      </div>

      <span className="text-[8px] md:text-[10px] absolute -bottom-[18px] md:-bottom-[23px] text-primary">
        STUDIO
      </span>
    </div>
  );
};

export default LogoTextSmall;

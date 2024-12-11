import { Plus } from "lucide-react";
import {
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
  Tooltip,
} from "../ui/tooltip";

export function TooltipComp({ text }: { text: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative inline-block max-w-fit">
            <div className="relative flex items-center justify-center max-w-fit">
              {/* Tooltip Trigger Button */}
              <div className=" bg-primary rounded-full p-2 cursor-pointer z-50 transition-transform duration-500 hover:rotate-45">
                <Plus size={16} className="text-white" />
              </div>
              {/* Live Indicator */}
              <span className="bg-[#217CB2] absolute w-4 h-4 rounded-full border border-black/10 animate-live -z-10"></span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

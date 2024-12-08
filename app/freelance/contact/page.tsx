import FreelanceContact from "@/components/freelance-components/freelanceContact";
import FreelanceFooter from "@/components/freelance-components/freelanceFooter";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-36 relative">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <div>sdgdsgh</div>
      <FreelanceContact />
      <FreelanceFooter />
    </section>
  );
};

export default page;

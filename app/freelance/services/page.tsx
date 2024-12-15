import Card from "@/components/freelance-components/card";
import BlurFade from "@/components/ui/blur-fade";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { cardData } from "@/lib/data";
import SectionHowWeWork from "@/components/freelance-components/howWeWork";
import FreelanceFooter from "@/components/freelance-components/freelanceFooter";

const page = () => {
  return (
    <section className="flex relative flex-col md:pt-36 pt-20">
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
      <div className="container relative pb-32">
        <div className="flex flex-col md:flex-row  gap-10">
          <BlurFade delay={0.4} inView>
            <h2 className="lg:text-4xl text-3xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-10">
              Experience Ultimate Level Of Cleaning Power With Tailored Industry{" "}
              <span className="font-bold text-primary">Leading Services.</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.6} inView>
            <div className="leading-7 text-justify">
              <p className="mb-[1rem]">
                We&apos;ll take the time to discuss your preferences and
                priorities with you before your first home cleaning service and
                our residential housekeepers will always arrive with your
                customized cleaning plan to ensure that all of your needs are
                taken into account.
              </p>
              <p className="mb-[1rem]">
                Our cleaning experts deliver the highest quality of clean you
                can always count, let us help you with all of your cleaning and
                disinfecting responsibilities now.
              </p>
            </div>
          </BlurFade>
        </div>
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-4 mt-20  ">
          <Card cardData={cardData} />
        </div>
      </div>
      <SectionHowWeWork />

      <FreelanceFooter />
    </section>
  );
};

export default page;

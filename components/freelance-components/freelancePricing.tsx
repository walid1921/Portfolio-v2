import { cn } from "@/lib/utils";
import DotPattern from "../ui/dot-pattern";
import BlurFade from "../ui/blur-fade";
import PrimaryBtn from "../ui/primaryBtn";
import Link from "next/link";
import { CalendarDays, Check } from "lucide-react";
import PricingCard from "./pricingCard";
import { pricingData } from "@/lib/data";

const FreelancePricing = () => {
  return (
    <section className="relative w-full md:py-32 mt-2 ml-2">
      <DotPattern
        reverse
        width={20}
        height={20}
        cx={15}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="container">
        {/* Main Content Section */}
        <div className="flex flex-col-reverse md:flex-row md:gap-16 gap-14 md:items-start">
          {/* Left Section */}
          <div className="relative flex flex-row items-center justify-center ">
            <BlurFade delay={0.6} inView>
              <div className="flex flex-col md:gap-6 font-normal text-lg leading-6 mb-8">
                <p>
                  Our pricing is transparent and reflects the unique needs of
                  your business. Factors influencing costs include:
                </p>
                <ul className="flex flex-col gap-3 mt-6">
                  {[
                    "Scope and complexity of the project",
                    "Number of pages or features required",
                    "Integration of advanced tools (e.g., analytics, SEO)",
                    "Level of customization and branding",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4 items-center">
                      <Check size={20} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-10 mt-10 md:mt-0 md:w-[70%]">
            <BlurFade delay={0.4} inView>
              <h2 className="lg:text-4xl text-3xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-10">
                Good. What About the{" "}
                <span className="text-primary">Prices</span>?
              </h2>
              <p>
                We’ve crafted tailored solutions to meet every stage of your
                business growth. Whether you're just starting out or scaling to
                new heights, our expert team is here to support your journey.
              </p>
            </BlurFade>

            <BlurFade delay={0.8} inView>
              <PrimaryBtn>
                <Link
                  href="freelance/pricing"
                  className="flex items-center justify-center gap-4"
                >
                  View All Details
                </Link>
              </PrimaryBtn>
            </BlurFade>
          </div>
        </div>

        {/* Pricing Cards Section */}
        <div className="flex items-center flex-wrap gap-6 mt-16">
          <PricingCard pricingData={pricingData} />
        </div>
      </div>
    </section>
  );
};

export default FreelancePricing;

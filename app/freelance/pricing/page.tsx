"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/freelance-components/pricingCard";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import ComparisonTable from "@/components/freelance-components/comparisonTable";
import { pricingData, swiperData } from "@/lib/data";
import FreelanceFooter from "@/components/freelance-components/freelanceFooter";
import MySwiper from "@/components/ui/swiper";

const Page = () => {
  const [showComparison, setShowComparison] = useState(false);

  const toggleComparison = () => setShowComparison(!showComparison);

  return (
    <section className="flex flex-col relative justify-center md:pt-36 pt-20">
      {/* Background Pattern */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] z-3"
        )}
      />

      <div className="container flex flex-col pb-32  gap-20 md:grid md:grid-cols-2 md:grid-rows-1 items-center w-full z-5">
        <div className="flex flex-col justify-between h-full ">
          <div className="flex flex-col justify-start h-full">
            <BlurFade delay={0.4} inView>
              <h2 className="lg:text-4xl text-3xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
                Pricing
              </h2>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <p className="md:text-3xl text-xl ">
                Find the plan that fits your business needs.
              </p>
            </BlurFade>

            <BlurFade delay={0.6} inView>
              <div className="leading-7  mt-6 max-w-2xl mx-auto">
                <p className="mb-4">
                  Select an affordable plan tailored to help you grow your
                  business. Engage your audience, foster customer loyalty, and
                  drive sales with ease.
                </p>
                <p>
                  Each plan is packed with powerful features to support your
                  journey, no matter the stage of your business.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
        <div className="relative">
          <MySwiper data={swiperData} />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex items-center flex-wrap gap-6">
          <PricingCard pricingData={pricingData} />
        </div>

        {/* Comparison Toggle */}
        <div
          className="flex z-5 items-center gap-2 text-primary hover:text-secondary cursor-pointer transition-all ease-in-out duration-150"
          onClick={toggleComparison}
        >
          <span>
            {showComparison
              ? "Hide Detailed Plan Comparison"
              : "Show Detailed Plan Comparison"}
          </span>
          <motion.div
            animate={{ rotate: showComparison ? 360 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {showComparison ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={
            showComparison
              ? { opacity: 1, height: "auto" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
          className="overflow-hidden z-5"
        >
          {showComparison && <ComparisonTable pricingData={pricingData} />}
        </motion.div>
      </div>

      {/* Footer */}
      <FreelanceFooter />
    </section>
  );
};

export default Page;

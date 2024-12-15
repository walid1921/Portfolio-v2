import Link from "next/link";
import { CalendarDays, Check, X } from "lucide-react";
import { Button } from "../ui/button";

type PricingCardProps = {
  pricingData: {
    id: number;
    title: string;
    description: string;
    price: string;
    billingCycle: string;
    features: { text: string; included: boolean }[];
    popular: boolean;
    hasGradientStyle: boolean;
  }[];
};

const PricingCard = ({ pricingData }: PricingCardProps) => {
  return (
    <>
      {pricingData.map((plan) => (
        <div
          key={plan.id}
          className={`${
            plan.hasGradientStyle ? "p-0.25 bg-conic-gradient" : ""
          } rounded-lg z-5`}
        >
          <div
            className={`${
              plan.hasGradientStyle ? "bg-[#1b1d1d]" : ""
            } flex flex-col rounded-lg gap-8 py-10 border border-[#2b2d2d] bg-[#1b1d1d] px-6 w-[400px]`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-xl">{plan.title}</span>
              {plan.popular && (
                <span className="py-1 text-sm px-3   bg-green-500/50 font-semibold  rounded-full w-fit">
                  Most popular
                </span>
              )}
            </div>
            <p>{plan.description}</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold">{plan.price}</span>
              <span className="text-sm">{plan.billingCycle}</span>
            </div>

            {plan.popular ? (
              <Button variant="default">
                <Link
                  href="/freelance/contact"
                  className="flex items-center justify-center gap-4"
                >
                  Get Started
                  <CalendarDays size={16} />
                </Link>
              </Button>
            ) : (
              <Button variant="secondary">
                <Link
                  href="/freelance/contact"
                  className="flex items-center justify-center gap-4"
                >
                  Get Started
                  <CalendarDays size={16} />
                </Link>
              </Button>
            )}

            <ul className="flex flex-col gap-2 mt-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  {feature.included ? (
                    <Check size={16} className="text-primary" />
                  ) : (
                    <X size={16} className="text-red-500" />
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PricingCard;

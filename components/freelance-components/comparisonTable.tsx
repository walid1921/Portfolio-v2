import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

type ComparisonTableProps = {
  pricingData: {
    features: { text: string; included: boolean }[];
  }[];
};

const ComparisonTable = ({ pricingData }: ComparisonTableProps) => {
  return (
    <div className="w-full max-w-4xl overflow-x-auto bg-[#1b1d1d] border border-[#2b2d2d] rounded-lg shadow-lg">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#2b2d2d] text-white">
            <th className="px-6 py-3 font-normal">Feature</th>
            <th className="px-6 py-3 font-normal text-center">Starter Plan</th>
            <th className="px-6 py-3 font-normal text-center">Growth Plan</th>
            <th className="px-6 py-3 font-normal text-center">Enterprise Plan</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamically map through the features of the first plan */}
          {pricingData[0].features.map((feature, index) => (
            <tr
              key={index}
              className={cn(
                "border-t border-[#2b2d2d]",
                index % 2 === 0 ? "bg-[#1e1f1f]" : "bg-[#1b1d1d]"
              )}
            >
              <td className="px-6 py-4">{feature.text}</td>
              {/* Starter Plan */}
              <td className="px-6 py-4 text-center">
                {pricingData[0].features[index].included ? (
                  <Check size={20} className="text-primary mx-auto" />
                ) : (
                  <X size={20} className="text-red-500 mx-auto" />
                )}
              </td>
              {/* Growth Plan */}
              <td className="px-6 py-4 text-center">
                {pricingData[1].features[index].included ? (
                  <Check size={20} className="text-primary mx-auto" />
                ) : (
                  <X size={20} className="text-red-500 mx-auto" />
                )}
              </td>
              {/* Enterprise Plan */}
              <td className="px-6 py-4 text-center">
                {pricingData[2].features[index]?.included ? (
                  <Check size={20} className="text-primary mx-auto" />
                ) : (
                  <X size={20} className="text-red-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

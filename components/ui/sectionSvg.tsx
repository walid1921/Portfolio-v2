import PlusSvg from "./plusSvg";

interface SectionSvgProps {
  crossesOffset?: string; // Define the type of crossesOffset prop
}

const SectionSvg = ({ crossesOffset }: SectionSvgProps) => { // Use SectionSvgProps interface to define the type of the prop
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;

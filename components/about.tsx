import AboutContent from "./aboutContent";
import { Gradient } from "./ui/circleHero";


const About = () => {
  return (
    <div className="relative  max-w-[23rem] mx-auto md:max-w-4xl lg:mt-[200px] mt-28">
      <div className="relative  p-0.5 rounded-[14px] bg-conic-gradient z-1">
        <div className="relative bg-n-8 rounded-[14px] z-2">
          <div className="aspect-[33/40] rounded-[14px] z-3  md:aspect-[688/490] lg:aspect-[1024/300]">
            <AboutContent />
          </div>
        </div>
        <Gradient />
      </div>
      

    </div>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <section id="about" className="  my-20 text-[#bbbbbb]">
      <div className="container ">
        <p className="text-2xl font-medium bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent md:mb-10 mb-10">
          About
        </p>

        <div className="flex flex-col gap-8">
          <p className="text-justify leading-8 ">
            I'm a 25-year-old Developer based in Germany, blending my background
            in Environmental Process Engineering with a passion for full-stack
            development. My journey began when I discovered the joy of using
            creativity to build captivating web experiences. Through persistence
            and self-discipline, I honed my skills to become a full-stack
            developer. Beyond coding, I indulge in side projects, exploring new
            realms of creativity and accomplishing exciting feats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

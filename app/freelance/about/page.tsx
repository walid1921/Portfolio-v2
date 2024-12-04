import Founder from "@/components/freelance-components/founder";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import walid from "@/public/walid.jpg";
import SectionTowCol from "@/components/freelance-components/sectionTowCol";

const page = () => {
  return (
    <SectionTowCol>
      <div className="relative flex flex-col justify-evenly h-full">
        <div className="flex flex-col items-start">
          <section className="flex flex-col gap-6">
            <BlurFade delay={0.4} inView>
              <h2 className="lg:text-4xl text-2xl font-medium bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent md:mb-10 mb-10">
                About Me
              </h2>
            </BlurFade>
            <BlurFade delay={0.6} inView>
              <div className="font-normal  text-[17px] leading-6 mb-8 ">
                I'm a 26-year-old Developer based in Germany, blending my
                background in Environmental Process Engineering with a passion
                for full-stack development. My journey began when I discovered
                the joy of using creativity to build captivating web
                experiences. Through persistence and self-discipline, I honed my
                skills to become a full-stack developer. Beyond coding, I
                indulge in side projects, exploring new realms of creativity and
                accomplishing exciting feats.
              </div>
            </BlurFade>
          </section>

          <div className=" mt-10 relative">
            <Founder
              url={"https://i.pravatar.cc/150?u=a042581f4e29026024d"}
              name={"Walid Kouider Ayad"}
              signature={"/public/signature1.png"}
              subtitle={"Full Stack Developer"}
              className="p-1 border-2 border-primary object-cover "
            />
          </div>
          <div className="mt-10">
            <Button size={"lg"} className="text-white">
              Read more
            </Button>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src={walid}
          height={500}
          width={500}
          quality={80}
          className="object-cover z-20 grid-span-1  rounded-lg"
          alt="Family sitting around a fire pit in front of cabin"
          loading="lazy"
        />
      </div>
    </SectionTowCol>
  );
};

export default page;

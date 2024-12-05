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
              <div className=" leading-7 text-justify">
                <p className="mb-[1rem]">
                  Hey there! I'm Walid, a freelance web developer based in
                  Bremen. With over 2 years of experience, I specialize in
                  crafting dynamic websites that leave a lasting impression. My
                  skills span HTML, CSS, JavaScript, and more, allowing me to
                  bring your digital vision to life with precision and
                  creativity.
                </p>
                <p className="mb-[1rem]">
                  From sleek landing pages to robust e-commerce platforms, I've
                  got you covered. I thrive on exceeding client expectations,
                  whether it's building responsive designs or optimizing for
                  SEO. I take the time to understand your goals, ensuring the
                  end product meets your needs.
                </p>
                <p className="mb-[1rem]">
                  Located in Bremen, I draw inspiration from the city's diverse
                  culture and innovative spirit. Let's collaborate and turn your
                  ideas into captivating online experiences!
                </p>
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

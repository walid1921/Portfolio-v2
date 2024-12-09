import React from "react";
import BlurFade from "../ui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const featuresData = [
  {
    title: "What is the purpose of the application?",
    description:
      "Our application is designed to streamline your online presence, making it easier for your audience to connect with your brand.",
  },
  {
    title: "How can I get started?",
    description:
      "Simply fill out our contact form or give us a call. We'll schedule a consultation to discuss your goals and create a tailored plan.",
  },
  {
    title: "What services do you offer?",
    description:
      "We specialize in web development, design, SEO, and creating user-friendly experiences tailored to your business needs.",
  },
  {
    title: "How long does it take?",
    description:
      "The timeline depends on the complexity of your project, but most projects are completed within 2–6 weeks.",
  },
  {
    title: "Do you offer support?",
    description:
      "Yes! We provide ongoing support to ensure your site runs smoothly and remains updated post-launch.",
  },
  {
    title: "What tools do you use?",
    description:
      "We use industry-leading tools like React, Next.js, and Tailwind CSS to build modern, scalable applications.",
  },
];

const FreelanceQst = () => {
  return (
    <section className="relative w-full pt-32 flex flex-col ">
      <BlurFade delay={0.4} inView>
        <h2 className="lg:text-4xl text-2xl font-semibold bg-gradient-to-br from-white to-[#000000] bg-clip-text text-transparent mb-8">
          Frequently Asked Questions
        </h2>
      </BlurFade>
      <div className="flex flex-col justify-center items-center md:gap-28 gap-12 md:grid md:grid-cols-2 md:grid-rows-1 w-full relative">
        <BlurFade delay={0.6} inView className="flex justify-start items-start h-full">
          <p className="leading-7 text-lg ">
            Have questions? We’ve got answers. Browse our FAQs to learn more
            about how we work and the services we offer. Don’t see your
            question? Reach out directly!
          </p>
        </BlurFade>

        <BlurFade delay={1} inView>
          <Accordion type="single" collapsible>
            {featuresData.map((feature, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {feature.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm ">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
};

export default FreelanceQst;

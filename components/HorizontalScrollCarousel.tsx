"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { Card } from "@/components/card";
import { useRef } from "react";

export function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);

  return (
    <section
      ref={targetRef}
      className="relative rounded-md overflow-hidden mt-12 "
    >
      <div className="flex items-center ">
        <motion.div style={{ x }} className="flex gap-6">
          {projectsData.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                imgUrl={card.imgUrl}
                description={card.description}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

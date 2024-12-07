"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";

const data = [
  {
    id: 1,
    imgUrl: "/portfolio1.png",
    category: "Landing Page",
  },
  {
    id: 2,
    imgUrl: "/portfolio13.jpeg",
    category: "App",
  },
  {
    id: 3,
    imgUrl: "/portfolio4.png",
    category: "Real Project",
  },
  {
    id: 4,
    imgUrl: "/portfolio8.png",
    category: "Side Project",
  },
];

const TWEEN_FACTOR = 4.2;

type TweenValues = {
  number: number;
  min: number;
  max: number;
};

const numberWithinRange = ({ number, min, max }: TweenValues) =>
  Math.min(Math.max(number, min), max);

const ImageSlider = () => {
  const option = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [Autoplay()]);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange({ number: tweenValue, min: 0, max: 1 });
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container xl:gap-[160px] gap-8">
          {data.map((item, index) => (
            <div
              className="embla__slide relative"
              key={item.id}
              style={{
                opacity: tweenValues[index] || 1,
              }}
            >
              <div className="imageFade">
                <img
                  className="embla__slide__img hover:cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"
                  src={item.imgUrl}
                  alt={item.category}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

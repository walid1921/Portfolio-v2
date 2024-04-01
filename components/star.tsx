"use client";
import { useRef, useState } from "react";
import StarSvg from "./ui/starSvg";

const Star = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <div
      ref={cardsRef}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
      onMouseMove={(event) => handleMouseMove(event)}
      className="absolute hidden xl:flex -top-[150px] -right-[500px] -rotate-12"
    >
      <StarSvg cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
    </div>
  );
};

export default Star;

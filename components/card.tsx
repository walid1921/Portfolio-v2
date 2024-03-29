"use client";
import { useRef, useState } from "react";
import Stars from "./ui/stars";

const Card = () => {
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
      className="absolute -bottom-[45px] -left-4 -rotate-12"
    >
      <Stars cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
    </div>
  );
};

export default Card;

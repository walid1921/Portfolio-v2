"use client";
import React, { useEffect, useState, RefObject } from "react";

type JsIconProps = {
  cursor: { x: number; y: number };
  cardRef: RefObject<HTMLElement>;
  mouseOnCard: boolean;
};

const Stars = ({ cursor, cardRef, mouseOnCard }: JsIconProps) => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect();

      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24;
      const cyPercentage = (cursor.y / cardRect.height) * 100;
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, cardRef]);

  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="250"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-sparkles hover:cursor-pointer transition-all duration-200"
    >
      <defs>
        <radialGradient
          id="emeraldGradient"
          gradientUnits="userSpaceOnUse"
          r="35%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && <stop stopColor="#10b981" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        stroke="url(#emeraldGradient)"
        d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
      />
      <path stroke="url(#emeraldGradient)" d="M5 3v4" />
      <path stroke="url(#emeraldGradient)" d="M19 17v4" />
      <path stroke="url(#emeraldGradient)" d="M3 5h4" />
      <path stroke="url(#emeraldGradient)" d="M17 19h4" />
    </svg>
  );
};

export default Stars;


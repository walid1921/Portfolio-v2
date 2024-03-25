"use client";
import React, { createContext, useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

const ActiveSectionContext = createContext<{
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}>({
  activeSection: "Home",
  setActiveSection: () => {},
});

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return children;
};

export default ActiveSectionContextProvider;

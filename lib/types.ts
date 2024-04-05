import type {
  EducationData,
  links,
} from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type EducationDataProps = (typeof EducationData)[number];

import type {
  EducationData,
  OnlineCourses,
  SoftSkills,
  links,
} from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];
export type EducationDataProps = (typeof EducationData)[number];
export type SoftSkillsDataProps = (typeof SoftSkills)[number];
export type OnlineCoursesDataProps = (typeof OnlineCourses)[number];

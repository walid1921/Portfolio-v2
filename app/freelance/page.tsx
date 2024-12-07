"use client";
import FreelanceAbout from "@/components/freelance-components/freelanceAbout";
import FreelanceHero from "@/components/freelance-components/freelanceHero";
import FreelanceProjects from "@/components/freelance-components/freelanceProjects";
import FreelanceReviews from "@/components/freelance-components/freelanceReview";

const FreelancePage = () => {
  return (
    <main>
      <FreelanceHero />
      <FreelanceAbout />
      <FreelanceReviews />
      <FreelanceProjects />
    </main>
  );
};

export default FreelancePage;

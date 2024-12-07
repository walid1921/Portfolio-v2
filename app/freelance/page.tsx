"use client";
import FreelanceAbout from "@/components/freelance-components/freelanceAbout";
import FreelanceContact from "@/components/freelance-components/freelanceContact";
import FreelanceFooter from "@/components/freelance-components/freelanceFooter";
import FreelanceHero from "@/components/freelance-components/freelanceHero";
import FreelanceProjects from "@/components/freelance-components/freelanceProjects";
import FreelanceReviews from "@/components/freelance-components/freelanceReview";

const FreelancePage = () => {
  return (
    <main className="flex flex-col gap-36">
      <FreelanceHero />
      <FreelanceAbout />
      <FreelanceReviews />
      <FreelanceProjects />
      <FreelanceContact />
      <FreelanceFooter />
    </main>
  );
};

export default FreelancePage;

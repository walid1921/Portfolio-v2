"use client";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
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
      <Contact />
      <Footer />
    </main>
  );
};

export default FreelancePage;

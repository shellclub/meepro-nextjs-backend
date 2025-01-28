

import { HeroSection } from "@/app/components/frontend-pages/blog/heroSection/HeroSection";
import { FeatureBanner } from "@/app/components/frontend-pages/homepage/featureBanner/FeatureBanner";
import PortfolioApp from "@/app/components/frontend-pages/portfolio/Portfolio";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio page",
};

const page = () => {
  
  return (
    <>
      <HeroSection title="Portfolio" desc="Explore Our Latest Works"/>
      <PortfolioApp/>
      <FeatureBanner/>
    </>
  );
};

export default page;

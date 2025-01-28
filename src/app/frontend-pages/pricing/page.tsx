

import { HeroSection } from "@/app/components/frontend-pages/blog/heroSection/HeroSection";
import { FeatureBanner } from "@/app/components/frontend-pages/homepage/featureBanner/FeatureBanner";
import { Licenseuse } from "@/app/components/frontend-pages/homepage/licenseuse/Licenseuse";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing page",
};

const page = () => {
  
  return (
    <>
      <HeroSection title="Pricing Page" desc="Choose Your Plan"/>
      <Licenseuse/>
      <FeatureBanner/>
    </>
  );
};

export default page;

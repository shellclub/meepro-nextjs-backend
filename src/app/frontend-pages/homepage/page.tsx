
import { DemosSection } from "@/app/components/frontend-pages/homepage/demosSection/DemosSection";
import { FAQ } from "@/app/components/frontend-pages/homepage/faq/FAQ";
import { FeatureBanner } from "@/app/components/frontend-pages/homepage/featureBanner/FeatureBanner";
import { Features } from "@/app/components/frontend-pages/homepage/features/Features";
import { HeroSection } from "@/app/components/frontend-pages/homepage/herosection/HeroSection";
import { InfoStrip } from "@/app/components/frontend-pages/homepage/infoStrip/InfoStrip";
import { Leadership } from "@/app/components/frontend-pages/homepage/leadership/Leadership";
import { Licenseuse } from "@/app/components/frontend-pages/homepage/licenseuse/Licenseuse";
import { PowerfulTemplates } from "@/app/components/frontend-pages/homepage/powerfulTemplates/PowerfulTemplates";
import { TeamWorks } from "@/app/components/frontend-pages/homepage/teamWorks/TeamWorks";
import { Testimonials } from "@/app/components/frontend-pages/homepage/testimonials/Testimonials";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Homepage",
};

const page = () => {
  
  return (
    <>
      <HeroSection/>
      <DemosSection/>
      <TeamWorks/>
      <Leadership/>
      <InfoStrip/>
      <PowerfulTemplates/>
      <Testimonials/>
      <Features/>
      <Licenseuse/>
      <FAQ/>
      <FeatureBanner/>
    </>
  );
};

export default page;

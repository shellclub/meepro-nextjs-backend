
import { HeroSection } from "@/app/components/frontend-pages/aboutpage/herosection/HeroSection";
import { Metrics } from "@/app/components/frontend-pages/aboutpage/metrics/Metrics";
import { Process } from "@/app/components/frontend-pages/aboutpage/process/Process";
import { FeatureBanner } from "@/app/components/frontend-pages/homepage/featureBanner/FeatureBanner";
import { InfoStrip } from "@/app/components/frontend-pages/homepage/infoStrip/InfoStrip";
import { Leadership } from "@/app/components/frontend-pages/homepage/leadership/Leadership";
import { Licenseuse } from "@/app/components/frontend-pages/homepage/licenseuse/Licenseuse";
import { Testimonials } from "@/app/components/frontend-pages/homepage/testimonials/Testimonials";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "AboutUs Page",
};

const page = () => {
  
  return (
    <>
     <HeroSection/>
     <Process/>
     <Metrics/>
     <Leadership/>
     <InfoStrip/>
     <Testimonials/>
     <Licenseuse/>
     <FeatureBanner/>
    </>
  );
};

export default page;

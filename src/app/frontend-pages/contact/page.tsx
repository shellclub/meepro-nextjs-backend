
import ContactForm from "@/app/components/frontend-pages/contact/contactForm/ContactForm";
import ContactMap from "@/app/components/frontend-pages/contact/contactMap/ContactMap";
import { HeroSection } from "@/app/components/frontend-pages/contact/heroSection/HeroSection";
import { FeatureBanner } from "@/app/components/frontend-pages/homepage/featureBanner/FeatureBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact page",
};

const page = () => {
  
  return (
    <>
    <HeroSection/>
      <ContactMap/>
      <ContactForm/>
      <FeatureBanner/>
    </>
  );
};

export default page;

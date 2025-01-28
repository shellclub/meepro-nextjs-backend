

import { AllBlogs } from "@/app/components/frontend-pages/blog/allBlogs/AllBlogs";
import { HeroSection } from "@/app/components/frontend-pages/blog/heroSection/HeroSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Post page",
};

const page = () => {
  
  return (
    <>
      <HeroSection title="BLOG" desc="Our most recent articles"/>
      <AllBlogs/>
    </>
  );
};

export default page;

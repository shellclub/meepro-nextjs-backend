
import BreadcrumbComp from '@/app/(DashboardLayout)/layout/shared/breadcrumb/BreadcrumbComp';
import BlogDetailData from '@/app/components/apps/blog/detail';
import React from 'react'
import { BlogProvider } from '@/app/context/BlogContext/index';
import type { Metadata } from "next";
import { HeroSection } from '@/app/components/frontend-pages/blog/heroSection/HeroSection';
export const metadata: Metadata = {
  title: "Blog Details",
};

const BlogDetail = () => {
  return (
    <>
      <HeroSection title="BLOG PAGE" desc="Latest blog & news" />
     <div className="container mt-6 p-4">
     <BlogProvider>
        <BlogDetailData />
      </BlogProvider>
     </div>
    </>
  )
}

export default BlogDetail

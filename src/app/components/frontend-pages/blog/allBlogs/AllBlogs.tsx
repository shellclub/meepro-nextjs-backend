import { BlogProvider } from "@/app/context/BlogContext"
import { CustomBlogCard } from "./CustomBlogCard"
import BlogListing from "./BlogListing"


export const AllBlogs = () =>{
    return (
        <>
          <div className="container-md px-4 lg:pb-24 pb-12 pt-12">
            <BlogProvider>
        <BlogListing />
      </BlogProvider>
          </div>

        </>
    )
}
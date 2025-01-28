"use client"
import Image from "next/image"
import blogbg from "/public/images/blog/blog-img6.jpg"
import user from "/public/images/profile/user-4.jpg"
import { Badge } from "flowbite-react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { GoDot } from "react-icons/go";
import { format } from "date-fns";

export const CustomBlogCard = () => {
    return (
        <>
           <div className="w-full grid grid-cols-12 rounded-base overflow-hidden dark:shadow-dark-md shadow-md mb-6">
            <div className="lg:col-span-6 col-span-12 relative pe-2">
               <Image src={blogbg} alt="blog" className="w-full max-w-full" />
               <Badge color={"white"} className="absolute bottom-6 end-6">
                2 min Read
              </Badge>
              <Image src={user} alt="user-image" className="absolute top-6 start-6 w-10 h-10 rounded-full" />
            </div>
            <div className="lg:col-span-6 col-span-12 lg:ps-10 ps-0 pe-6 flex items-center">
             <div className="flex flex-col gap-4">
             <Badge color={"graysubtle"} className="bg-lightemphasis py-1.5" >
                Web Development
              </Badge>
              <h4 className="text-32 leading-tight font-bold text-link dark:text-white">Building responsive websites: tips and tricks for modern developers</h4>
              <p className="text-base text-lightmuted dark:text-darklink">Learn the best practices for creating responsive websites that look great on any device, from mobile phones to desktops.</p>
              <div className="flex gap-3">
                <div className="flex gap-2 text-link font-semibold items-center dark:text-darklink text-sm">
                  <Icon icon="tabler:eye" height="18" className="text-ld" /> 6941
                </div>
                <div className="flex gap-2 font-semibold items-center text-link dark:text-darklink text-sm">
                <Icon icon="tabler:message-2" height="18" className="text-ld" /> 3
                </div>
                <div className="ms-auto flex gap-1 items-center  text-darklink text-sm">
                <GoDot  size="16" className="text-ld" />
                  <small className="text-link dark:text-darklink font-semibold text-xs" >{format(new Date(), "E, MMM d")}</small>
                </div>
              </div>
             </div>
            </div>
           </div>
        </>
    )
}
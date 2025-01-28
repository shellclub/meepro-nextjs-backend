"use client";
import React, { useState } from "react";
import { Badge, Button, Drawer } from "flowbite-react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";
import { usePathname } from "next/navigation";
const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const Links = [
    {
      key:"link1",
      title:"About Us",
      link:"/frontend-pages/about",
      isBadge:false
    },
    {
      key:"link2",
      title:"Blog",
      link:"/frontend-pages/blog/post",
      isBadge:false
    },
    {
      key:"link6",
      title:"Portfolio",
      link:"/frontend-pages/portfolio",
      isBadge:true
    },
    {
      key:"link3",
      title:"Dashboard",
      link:"/",
      isBadge:false
    },
    {
      key:"link4",
      title:"Pricing",
      link:"/frontend-pages/pricing",
      isBadge:false
    },
    {
      key:"link5",
      title:"Contact",
      link:"/frontend-pages/contact",
      isBadge:false
    },
  ]
  const pathname = usePathname();
  return (
    <>
      <div className="xl:hidden flex">
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center text-dark dark:text-white  h-10 w-10 rounded-full bg-transparent hover:bg-lightprimary"
        >
          <IconMenu2 />
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="h-full p-6" >
        <Drawer.Items>
           <div className="my-6">
           <FullLogo />
           </div>
           <div className="flex flex-col gap-4 mt-8">
            {
              Links.map((item)=>{
                if(!item.isBadge){
                  return(
                    <Link key={item.key} href={item.link} className={`text-[15px] py-2.5 px-4 ${pathname===item.link?"text-primary rounded-md dark:text-primary bg-lightprimary":" text-link dark:text-darklink font-medium"} text-[15px]  font-medium`}>
                     {item.title}
                 </Link>
                  )
                }else{
                  return(
                    <Link key={item.key} href={item.link} className={`py-2.5 px-4 flex items-center rounded-md group gap-2 ${pathname==="/frontend-pages/portfolio"?"text-primary dark:text-primary bg-lightprimary":"text-link dark:text-darklink"}`}>
                    <span className={` group-hover:text-primary text-[15px] block  font-medium`}>Portfolio</span>
                    <Badge size={"xs"} color={"lightprimary"} className="text-xs rounded-md px-2 font-semibold" >New</Badge>
                 </Link>
                  )
                }
              })
            }
           </div>

          <Button
            color={"primary"}
            className="mt-6"
            as={Link}
            href="/auth/auth2/login"
          >
            Login
          </Button>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MobileDrawer;

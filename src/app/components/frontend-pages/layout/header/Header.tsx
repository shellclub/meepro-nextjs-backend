"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "flowbite";
import {Badge, Button, Navbar } from "flowbite-react";
import FullLogo from "@/app/(DashboardLayout)/layout/shared/logo/FullLogo";
import MobileDrawer from "./MobileDrawer";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

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


  return (
    <>
      <header
        className={`sticky  top-0 z-50 ${
          isSticky
            ? "bg-white dark:bg-dark shadow-md "
            : "bg-lightprimary dark:bg-lightprimary"
        }`}
      >
        <Navbar className="fluid custom-nav lg:px-4 px-0 sm:px-0 py-6 bg-transparent dark:bg-transparent border-transparent dark:border-transparent">
          <div className="lg:order-1 order-0">
          <FullLogo />
          </div>
          <MobileDrawer/>
          <Navbar.Collapse className="xl:block hidden order-1">
            {
              Links.map((item)=>{
                if(!item.isBadge){
                  return(
                    <Navbar.Link as={Link} key={item.key} href={item.link} className={`text-[15px] ${pathname===item.link?"text-primary rounded-md dark:text-primary bg-lightprimary":"text-link dark:text-darklink"}  font-medium`}>
                     {item.title}
                 </Navbar.Link>
                  )
                }else{
                  return(
                    <Navbar.Link key={item.key} as={Link} href={item.link} className={` flex items-center rounded-md group gap-2 ${pathname==="/frontend-pages/portfolio"?"text-primary dark:text-primary bg-lightprimary":"text-link dark:text-darklink"}`}>
                    <span className={` group-hover:text-primary text-[15px] block  font-medium`}>Portfolio</span>
                    <Badge size={"xs"} color={"lightprimary"} className="text-xs rounded-md px-2 font-semibold" >New</Badge>
                 </Navbar.Link>
                  )
                }
              })
            }

          </Navbar.Collapse>
          <Button color={"primary"} className="lg:block hidden order-2" as={Link} href="/auth/auth1/login" >Login</Button>
        </Navbar>
      </header>
    </>
  );
};

export default Header;

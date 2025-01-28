"use client";
import React, { useContext } from "react";
import { Sidebar, Tooltip } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import { CustomizerContext } from "@/app/context/customizerContext";
import SimpleBar from "simplebar-react";
import FullLogo from "../../shared/logo/FullLogo";
import { Icon } from "@iconify/react";
import profileimg from "/public/images/profile/user-1.jpg"
import Image from "next/image";
const MobileSidebar = () => {
  return (
    <>
     <div className="flex">
          <Sidebar
            className="fixed menu-sidebar pt-0 bg-white dark:bg-dark z-[10]"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <div className="px-6 flex items-center brand-logo overflow-hidden">
              <FullLogo />
            </div>
            <SimpleBar className="h-[calc(100vh_-_170px)]">
              <Sidebar.Items className={`px-6`}>
                <Sidebar.ItemGroup className="sidebar-nav">
                  {SidebarContent.map((item, index) => (
                    <React.Fragment key={index}>
                     <h5 className="text-link font-bold text-xs dark:text-darklink caption">
                        <span className="hide-menu leading-21">{item.heading?.toUpperCase()}</span>
                        <Icon
                        icon="tabler:dots"
                        className="text-ld block mx-auto leading-6 dark:text-opacity-60 hide-icon"
                        height={18}
                      />
                      </h5>


                      {item.children?.map((child, index) => (
                        <React.Fragment key={child.id && index}>
                          {child.children ? (
                            <div className="collpase-items">
                              <NavCollapse item={child} />
                            </div>
                          ) : (
                            <NavItems item={child} />
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </SimpleBar>
             {/* Sidebar Profile */}
             <div className={` my-4 mx-6`}>
                 <div className={` py-4 px-4 bg-lightsecondary rounded-md overflow-hidden`}>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 items-center">
                        <Image src={profileimg} alt="profile-image" width={40} height={40} className="rounded-full" />
                        <div>
                          <h3 className="text-base font-semibold" >Mathew</h3>
                           <p className="text-xs font-normal text-muted dark:text-darklink" >Designer</p>
                        </div>
                      </div>
                  <Tooltip content="Logout">
                    <div className="cursor-pointer">
                      <Icon icon="tabler:power"  className="text-primary text-2xl" />
                    </div>
                  </Tooltip>

                    </div>
                 </div>
             </div>
          </Sidebar>
        </div>
    </>
  );
};

export default MobileSidebar;

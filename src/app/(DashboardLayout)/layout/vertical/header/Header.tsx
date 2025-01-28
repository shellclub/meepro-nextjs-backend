"use client";
import "flowbite";
import React, { useState, useEffect, useContext } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Search from "./Search";
import { Icon } from "@iconify/react";
import AppLinks from "./AppLinks";
import Messages from "./Messages";
import Profile from "./Profile";
import { CustomizerContext } from "@/app/context/customizerContext";

import { Language } from "./Language";
import FullLogo from "../../shared/logo/FullLogo";
import MobileHeaderItems from "./MobileHeaderItems";
import { Drawer } from "flowbite-react";
import MobileSidebar from "../sidebar/MobileSidebar";
import HorizontalMenu from "../../horizontal/header/HorizontalMenu";
import Link from "next/link";
import CartItems from "./CartItems";

interface HeaderPropsType {
  layoutType: string;
}

const Header = ({ layoutType }: HeaderPropsType) => {
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

  const { setIsCollapse, isCollapse, isLayout, setActiveMode, activeMode,isMobileSidebar,setIsMobileSidebar } = useContext(CustomizerContext);

  const [mobileMenu, setMobileMenu] = useState("");

  const handleMobileMenu = () => {
    if (mobileMenu === "active") {
      setMobileMenu("");
    } else {
      setMobileMenu("active");
    }
  };

  const toggleMode = () => {
    setActiveMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
  };

  // mobile-sidebar
 
  const handleClose = () => setIsMobileSidebar(false);
  return (
    <>
      <header
        className={`sticky top-0 z-[5] ${isSticky
          ? "bg-white dark:bg-dark shadow-md fixed w-full"
          : "bg-transparent"
          }`}
      >
        <Navbar
          fluid
          className={`rounded-none bg-transparent dark:bg-transparent py-4 sm:px-6 ${layoutType == "horizontal" ? "container mx-auto" : ""
            }  ${isLayout == "full" ? "!max-w-full" : ""}`}
        >
          {/* Mobile Toggle Icon */}
          <span
            onClick={() => setIsMobileSidebar(true)}
            className="px-[15px] hover:text-primary dark:hover:text-primary text-link dark:text-darklink relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent rounded-full xl:hidden flex justify-center items-center cursor-pointer"
          >
            <Icon icon="tabler:menu-2" height={20} />
          </span>
          {/* Toggle Icon   */}
          <Navbar.Collapse className="xl:block ">
            <div className="flex gap-0 items-center relative">
              {layoutType == "horizontal" ? (
                <div className="me-3">
                  <FullLogo />
                </div>
              ) : null}
              {/* Toggle Menu    */}
              {layoutType != "horizontal" ? (
                <span
                  onClick={() => {
                    if (isCollapse === "full-sidebar") {
                      setIsCollapse("mini-sidebar");
                    } else {
                      setIsCollapse("full-sidebar");
                    }
                  }}
                  className="px-[15px] relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary  after:bg-transparent text-link hover:text-primary dark:text-darklink dark:hover:text-primary rounded-full flex justify-center items-center cursor-pointer"
                >
                  <Icon icon="tabler:menu-2" height={20} />
                </span>
              ) : null}

              <Search />

              {/* App Link Dropwown   */}
              <AppLinks  />

              {/* Chat */}
              <Link href="/apps/chats" className="text-sm text-link dark:text-darklink dark:hover:text-primary px-15 h-10 hover:text-primary flex items-center justify-center" >Chat</Link>

              {/* Calendar */}
              <Link href="/apps/calendar" className="text-sm text-link dark:text-darklink dark:hover:text-primary px-15 h-10 hover:text-primary flex items-center justify-center" >Calendar</Link>

              {/* Email */}
              <Link href="/apps/email" className="text-sm text-link dark:text-darklink dark:hover:text-primary px-15 h-10 hover:text-primary flex items-center justify-center" >Email</Link>
            </div>
          </Navbar.Collapse>

          {/* mobile-logo */}
          <div className="block xl:hidden">
            <FullLogo />
          </div>

          <Navbar.Collapse className="xl:block hidden">
            <div className="flex gap-0 items-center">
              {/* Theme Toggle */}
              {activeMode === "light" ? (
                <div
                  className=" hover:text-primary px-15 group  dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink relative"

                  onClick={toggleMode}
                >
                  <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">
                    <Icon
                      icon="tabler:moon"
                      width="20"
                      // className="text-link group-hover:text-primary"
                    />
                  </span>
                </div>
              ) : (
                // Dark Mode Button
                <div
                  className=" hover:text-primary px-15   dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative"

                  onClick={toggleMode}
                >
                  <span className="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2   group-hover:after:bg-lightprimary">

                    <Icon
                      icon="tabler:sun"
                      width="20"
                      className="group-hover:text-primary"
                    />
                  </span>
                </div>
              )}
              {/* Language Dropdown*/}
              <Language  />

              {/* Shopping Cart */}
              {/* <CartItems/> */}

              {/* Messages Dropdown */}
              <Messages  />

              {/* Profile Dropdown */}
              <Profile  />
            </div>
          </Navbar.Collapse>
          {/* Mobile Toggle Icon */}
          <span
            className="h-10 w-10 flex xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer"
            onClick={handleMobileMenu}
          >
            <Icon icon="tabler:dots" height={21} />
          </span>
        </Navbar>
        <div
          className={`w-full  xl:hidden block mobile-header-menu ${mobileMenu}`}
        >
          <MobileHeaderItems />
        </div>

        {/* Horizontal Menu  */}
        {layoutType == "horizontal" ? (
          <div className="xl:border-y xl:border-ld">
            <div className={`${isLayout == "full" ? "w-full px-6" : "container"}`}>
              <HorizontalMenu />
            </div>
          </div>
        ) : null}
      </header>

      {/* Mobile Sidebar */}
      <Drawer open={isMobileSidebar} onClose={handleClose} className="w-130">
        <Drawer.Items>
          <MobileSidebar />
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default Header;

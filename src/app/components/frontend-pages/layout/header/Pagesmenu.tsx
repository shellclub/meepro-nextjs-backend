"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import * as AppsData from "@/app/(DashboardLayout)/layout/vertical/header/Data";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";
import { Button, Dropdown } from "flowbite-react";
import MegamenuImg from "/public/images/backgrounds/mega-dd-bg.jpg";
import Quicklinks from "@/app/(DashboardLayout)/layout/vertical/header/Quicklinks";
const PagesMenu = () => {
  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className=" w-[900px]  rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="relative">
            <span className="py-1.5 px-4 text-base text-ld hover:text-primary hover:bg-lightprimary rounded-md flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
              Pages <IconChevronDown className="ms-1" size={15} />
            </span>
          </div>
        )}
      >
       
       <div className="grid grid-cols-12 w-full">
                <div className="xl:col-span-8 col-span-12 flex items-stretch xl:pr-0  px-5 py-5">
                  <div className="grid grid-cols-12 gap-3 w-full">
                    {AppsData.appsLink.map((links, index) => (
                      <div
                        className="col-span-12 xl:col-span-6 flex items-stretch"
                        key={index}
                      >
                        <ul>
                          <li>
                            <Link
                              href={links.href}
                              className="flex gap-3 items-center hover:text-primary group relative"
                            >
                              <span className="bg-lightprimary  h-10 w-10 flex justify-center items-center rounded-md">
                                <Image
                                  src={links.avatar}
                                  width={20}
                                  height={20}
                                  alt="materialm"
                                />
                              </span>
                              <div>
                                <h6 className="font-semibold text-sm text-ld hover:text-primary mb-1 ">
                                  {links.title}
                                </h6>
                                <p className="text-xs text-link dark:text-darklink opacity-90 font-medium">
                                  {links.subtext}
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-12 md:col-span-12 border-t border-border dark:border-darkborder hidden xl:flex items-stretch pt-4 pr-4">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center text-dark dark:text-darklink">
                          <i className="ti ti-help text-lg "></i>
                          <Link
                            href={"/theme-pages/faq"}
                            className="text-sm font-semibold hover:text-primary ml-2 flex gap-2 items-center"
                          >
                            <IconHelp width={20} />
                            Frequently Asked Questions
                          </Link>
                        </div>
                        <Button color={"primary"}>Check</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-4 col-span-12  flex items-strech">
                  <Quicklinks />
                </div>
              </div>
       
      </Dropdown>
    </div>
  );
};

export default PagesMenu;

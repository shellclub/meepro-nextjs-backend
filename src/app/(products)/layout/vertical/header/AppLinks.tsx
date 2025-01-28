"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useState } from "react";
import * as AppsData from "./Data";
import Link from "next/link";
import Quicklinks from "./Quicklinks";
import { IconHelp } from "@tabler/icons-react";
import { Button, Drawer } from "flowbite-react";
import SimpleBar from "simplebar-react";

const AppLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="relative group ">
        <p className=" rounded-full text-link dark:text-darklink px-[15px] relative after:rounded-md after:absolute after:w-full after:h-9 hover:after:bg-lightprimary pb-0.5 justify-center items-center cursor-pointer group-hover:text-primary group-hover:after:bg-lightprimary xl:flex hidden">
          <span className="text-sm" >Apps</span>
          <Icon icon="tabler:chevron-down" height={15} className="shrink-0" />
        </p>

        <span
          className="xl:hidden text-link dark:text-darklink flex rounded-full px-[15px] pb-0.5 justify-center items-center cursor-pointer group-hover:text-primary"
          onClick={() => setIsOpen(true)}
        >
          <Icon icon="tabler:apps" className="shrink-0" height={20} />
        </span>

        <div className="sm:w-[900px] w-screen dropdown top-[28px] z-[6] invisible  group-hover:visible absolute">
          <Drawer
            open={isOpen}
            onClose={handleClose}
            position="right"
            className="xl:relative xl:transform-none xl:h-auto xl:bg-transparent xl:z-[0] xl:w-[900px] w-64"
          >
            <SimpleBar className="md:h-auto h-[calc(100vh_-_50px)]">
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
            </SimpleBar>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default AppLinks;

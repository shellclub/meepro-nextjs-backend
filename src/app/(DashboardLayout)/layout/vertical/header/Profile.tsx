import { Icon } from "@iconify/react";
import { Button, Dropdown } from "flowbite-react";
import React from "react";
import * as profileData from "./Data";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import unlimitedbg from "/public/images/backgrounds/unlimited-bg.png"

const Profile = () => {
  return (
    <div className="relative group/menu ps-15">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6  rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className=" hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <Image
              src="/images/profile/user-1.jpg"
              alt="logo"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        )}
      >
        <div className="px-6">
          <h3 className="text-lg font-semibold text-ld">User Profile</h3>
          <div className="flex items-center gap-6 pb-5 border-b dark:border-darkborder mt-5 mb-3">
            <Image
              src="/images/profile/user-1.jpg"
              alt="logo"
              height="80"
              width="80"
              className="rounded-full"
            />
            <div>
              <h5 className="card-title text-sm  mb-0.5 font-medium">Mathew Anderson</h5>
              <span className="card-subtitle text-muted font-normal">Designer</span>
              <p className="card-subtitle font-normal text-muted mb-0 mt-1 flex items-center">
                <Icon
                  icon="tabler:mail"
                  className="text-base me-1 relative top-0.5"
                />
                info@modernize.com
              </p>
            </div>
          </div>
        </div>
        <SimpleBar>
        {profileData.profileDD.map((items, index) => (
          <Dropdown.Item
            as={Link}
            href={items.url}
            className="px-6 py-3 flex justify-between items-center bg-hover group/link w-full"
            key={index}
          >
            <div className="flex items-center w-full">
              <div
                className={`h-11 w-11 flex-shrink-0 rounded-md flex justify-center items-center bg-lightprimary`}
              >
                <Image src={items.img} alt="icon" />
              </div>
              <div className="ps-4 flex justify-between w-full">
                <div className="w-3/4 ">
                  <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                    {items.title}
                  </h5>
                  <div className="text-xs  text-darklink">{items.subtitle}</div>
                </div>
              </div>
            </div>
          </Dropdown.Item>
        ))}
        </SimpleBar>

        <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 m-30 my-4 rounded-md  bg-lightprimary">
                            <div className="grid grid-cols-12 p-6 gap-6">
                              <div className="col-span-6">
                                <h5 className="text-base mb-3.5 font-semibold leading-5">Unlimited Access</h5>
                                <Button color={"primary"} className=" rounded-md" >
                                  <span className="leading-4" >Upgrade</span>
                                </Button>
                              </div>
                              <div className="col-span-6">
                                <div className="-m-6 unlimited-img">
                                  <Image src={unlimitedbg} alt="modernize-img" className="w-100 scale-[1.17] rtl:-scale-[1.17]"/>
                                </div>
                              </div>
                            </div>
                          </div>

        <div className="pt-2 px-30">
          <Button
            color={"outlineprimary"}
            as={Link}
            href="/auth/auth1/login"
            className="w-full rounded-md"
          >
            Logout
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;

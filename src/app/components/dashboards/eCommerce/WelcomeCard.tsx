"use client"
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import user1 from "/public/images/profile/user-1.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"
import backgroungImg from "/public/images/backgrounds/welcome-bg.svg"

export const WelcomeCard = () => {
    return(
<CardBox className="pb-10 bg-lightprimary dark:bg-lightprimary overflow-hidden">
  <div className="grid grid-cols-12">
    <div className="lg:col-span-7 md:col-span-7 sm:col-span-12 col-span-12">
      <div className="flex gap-3 items-center mb-9">
        <div className="rounded-full overflow-hidden">
          <Image
            src={user1}
            className="h-10 w-10"
            alt="user-image"
          />
        </div>
        <h5 className="text-lg lg:whitespace-nowrap">Welcome back Natalia!</h5>
      </div>
      <div className="flex gap-6 items-center">
        <div className="pe-6 rtl:pe-auto rtl:ps-6  border-e border-border border-opacity-20  dark:border-darkborder">
          <h3 className="flex items-start mb-0 text-3xl">
            $2,340
            <Icon icon="tabler:arrow-up-right" className='text-base  text-success' />
          </h3>
          <p className="text-sm mt-1">Today’s Sales</p>
        </div>
        <div className="">
          <h3 className="flex items-start mb-0 text-3xl">
            35%
            <Icon icon="tabler:arrow-up-right" className='text-base  text-success' />
          </h3>
          <p className="text-sm mt-1">Overall Performance</p>
        </div>
      </div>
    </div>
    <div className="lg:col-span-5 md:col-span-5 sm:col-span-12 col-span-12">
      <div className="sm:absolute relative right-0 rtl:right-auto rtl:left-0 -bottom-8">
        <Image
          src={backgroungImg}
          alt="background-image"
          className="w-full"
        />
      </div>
    </div>
  </div>
</CardBox>

    )
}
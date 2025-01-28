"use client"

import Image from "next/image"
import user2 from "/public/images/profile/user-2.jpg"
import user3 from "/public/images/profile/user-3.jpg"
import user4 from "/public/images/profile/user-4.jpg"
import user5 from "/public/images/profile/user-5.jpg"
import Link from "next/link"
import CardBox from "../../shared/CardBox"
import { Icon } from "@iconify/react/dist/iconify.js"
const Social = () => {

     const SocialFigure = [
        {
            key:"socialFig1",
            img:user2
        },
        {
            key:"socialFig12",
            img:user3
        },
        {
            key:"socialFig13",
            img:user4
        },
        {
            key:"socialFig14",
            img:user5
        },
     ]
    return(
<CardBox className="mt-6">
  <div className="flex items-center gap-6 mb-10 pb-2">
    <div className="shrink-0">
      <Image
        src={user2}
        className="rounded-md shrink-0" 
        alt="user-img"
        width={72}
        height={72}
      />
    </div>
    <div>
      <h5 className="card-title mb-2.5 leading-tight">
        Super awesome, Vue coming soon!
      </h5>
      <p className="card-subtitle">22 March, 2023</p>
    </div>
  </div>
  <div className="flex justify-between">
    <div className="flex">
      {
        SocialFigure.map((item)=>{
            return(
                <Link key={item.key} href="#" className="relative -ms-2 first:-ms-0">
                <Image
                src={item.img}
                className="rounded-full h-11 w-11 border-2 border-body dark:border-dark"
                alt="user-img"
              />
              </Link> 
            )
        })
      }
    </div>
    <div className="bg-lightgray dark:bg-darkgray h-10 w-10 flex justify-center items-center rounded-md">
      <Icon icon="tabler:message-2" className='text-primary text-xl' />
    </div>
  </div>
</CardBox>

    )
}

export {Social}
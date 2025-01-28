"use client"
import Image from "next/image"
import user1 from "/public/images/profile/user-1.jpg"
import user2 from "/public/images/profile/user-2.jpg"
import user3 from "/public/images/profile/user-3.jpg"
import { Button, Modal, Tooltip } from "flowbite-react"
import { Icon } from "@iconify/react/dist/iconify.js"
import reactimg from "/public/images/frontend-pages/technology/Categories=React.svg"
import flowbiteimg from "/public/images/frontend-pages/technology/flowbite.svg"
import nextimg from "/public/images/frontend-pages/technology/Categories=Nextjs.svg"
import typescriptimg from "/public/images/frontend-pages/technology/Typescript.svg"
import tailwindimg from "/public/images/frontend-pages/technology/Categories=Tailwind.svg"
import headlessUIimg from "/public/images/frontend-pages/technology/headless-ui-seeklogo.svg"
import leftWidget from "/public/images/frontend-pages/background/banner-left-widget.jpg"
import rightWidget from "/public/images/frontend-pages/background/banner-right-widget.jpg"
import bottomBanner from "/public/images/frontend-pages/background/banner-bottom.png"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"


export const HeroSection = () => {
  const TechnStacks = [
    {
      key: "tech1",
      img: reactimg,
      title:"React"
    },
    {
      key: "tech2",
      img: flowbiteimg,
      title:"Flowbite"
    },
    {
      key: "tech3",
      img: nextimg,
      title:"NextJS"
    },
    {
      key: "tech4",
      img: typescriptimg,
      title:"Typescript"
    },
    {
      key: "tech5",
      img: tailwindimg,
      title:"Tailwind"
    },
    {
      key: "tech6",
      img: headlessUIimg,
      title:"Headless UI"
    },
  ]
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="lg:pt-6 pt-0 bg-lightprimary">
        <div className="container py-4 pb-0 px-4">
          <div className="flex w-full justify-center">
            <div className="md:w-8/12 w-full pt-8">
              <h1 className="lg:text-[56px] text-4xl leading-tight text-center font-bold text-link dark:text-white">
                Most powerful & <span className="text-primary">Developer friendly</span> dashboard
              </h1>
            </div>
          </div>
          <div className="w-full pt-5">
            <div className="flex flex-wrap gap-6 items-center justify-center mx-auto mb-3">
              <div className="flex">
                <Image src={user1} alt="user-image" className="w-10 h-10  rounded-full border-2 border-white relative -mr-2.5 z-[2]" />
                <Image src={user2} alt="user-image" className="w-10 h-10  rounded-full border-2 border-white relative -mr-2.5 z-[1]" />
                <Image src={user3} alt="user-image" className="w-10 h-10  rounded-full border-2 border-white" />
              </div>
              <div className="text-lg text-bodytext dark:text-darklink font-medium text-center">52,589+
                developers & agencies using our templates</div>
            </div>
            <div className="w-full relative p-3 img-wrapper">
              <div className="flex items-center justify-center gap-5 mx-auto">
                <Button as={Link} href="/auth/auth1/login" color={"primary"} className="text-sm font-medium" >Login</Button>
                <div onClick={() => setOpenModal(true)} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full flex items-center text-primary group-hover:bg-primary group-hover:text-white justify-center border-2 border-primary">
                    <Icon icon="tabler:player-play-filled" className=" text-base" />
                  </div>
                  <p className="text-link group-hover:text-primary dark:text-darklink font-medium text-[15px]">
                    See how it works
                  </p>
                </div>
              </div>
              <div className="py-9 flex justify-center item-center gap-6 flex-wrap">
                {
                  TechnStacks.map((item) => {
                    return (
                      <Tooltip content={item.title} key={item.key}>
                        <div key={item.key} className="h-14 w-14 rounded-[16px] custom-shadow bg-white dark:bg-darkgray flex items-center justify-center cursor-pointer">
                        <Image src={item.img} alt={"tech-icon"} width={30} height={30} />
                      </div>
                    </Tooltip>
                    )
                  })
                }
              </div>
              <Image src={leftWidget} alt="widget" className="absolute top-0 start-0 rounded-base custom-shadow animated-img xl:block hidden"  />
              <Image src={rightWidget} alt="widget" className="absolute -top-7 end-0 rounded-base custom-shadow animated-img xl:block hidden" />
            </div>
            <div className="mt-4">
              <Image src={bottomBanner} alt="banner-img" className="rounded-base" />
            </div>
          </div>
        </div>
      </div>
      <Modal dismissible popup show={openModal} size={"3xl"} onClose={() => setOpenModal(false)}>
<Modal.Header className="!p-0 !h-0 overflow-hidden" />
<Modal.Body className="p-0 rounded-md">
          <iframe className="w-full h-96" src="https://www.youtube.com/embed/57QrNWhnbxg" title="How to Get Started with our NextJs Dashboard Template? | AdminMart&#39;s NextJsTemplate" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}
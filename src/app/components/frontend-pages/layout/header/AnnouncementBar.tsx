import { Button } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import ellpise from "/public/images/frontend-pages/background/left-ellipse.png"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"


export const AnnouncementBar = () => {
  const [isHidden , setIsHidden] = useState(false)
  const handleHidden = (value:boolean) => {
     setIsHidden(value)
  }
    return (
        <>
          <div className={`py-1 cursor-pointer relative before:absolute before:h-full before:w-[200px] before:bg-no-repeat before:bg-cover before:bg-[url('/images/frontend-pages/background/transparent-elilpse.png')] lg:before:block before:hidden before:top-0 before:right-0 after:absolute after:bg-[url('/images/frontend-pages/background/right-ellipse.png')] lg:after:block after:hidden after:h-full after:w-[325px] after:right-[21%] after:1top-1 after:end-1/2 bg-primary overflow-hidden flex items-center justify-center gap-4 ${isHidden?"hidden":null}`}>
          <Button size={"xs"} className="text-xs font-semibold py-1.5 px-2.5 bg-white/15 text-white hover:bg-white hover:text-primary" >New</Button>
             <p className="text-fs_13 text-white font-medium">
             Frontend Pages Added
             </p>
             <Image src={ellpise} alt="ellipse" className="absolute top-0 start-0 lg:block hidden" />
             <div onClick={()=> handleHidden(true)} className="h-6 w-6 rounded-full bg-secondary absolute top-1/2 -translate-y-1/2 end-3 text-white flex items-center justify-center hover:bg-secondaryemphasis">
              <Icon icon="tabler:x" className="shrink-0 text-lg text-white" />
             </div>
          </div>
        </>
    )
}
import user1 from "/public/images/profile/user-5.jpg"
import user2 from "/public/images/profile/user-2.jpg"
import Image from "next/image"
import Link from "next/link"

export const InfoStrip = () => {
    return (
        <>
           <div className="w-full py-4 bg-primary">
             <div className="flex items-center justify-center md:gap-4 gap-2 flex-wrap">
                  <div className="flex items-center">
                  <Image src={user1} alt="user-image" className="opacity-40 relative -end-2.5 rounded-full" width={40} />
                  <Image src={user2} alt="user-image" className="rounded-full relative z-10" width={44} />
                  </div>
                  <p className="text-base text-white font-normal text-center">
                  Save valuable time and effort spent searching for a solution.
                  </p>
                  <Link href="/frontend-pages/contact" className="text-base font-semibold text-white underline" >Contact us now</Link>
             </div>
           </div>
        </>
    )
}
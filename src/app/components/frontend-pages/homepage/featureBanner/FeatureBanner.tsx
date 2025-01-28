import { Button } from "flowbite-react"
import banner from "/public/images/frontend-pages/background/design-collection.png"
import Image from "next/image"
import Link from "next/link"

export const FeatureBanner = () => {
    return (
      <div className="px-4 container">
        <div className=" bg-lightprimary rounded-base relative overflow-hidden">
         <div className="flex w-full">
            <div className="lg:w-6/12 w-full lg:p-24 py-12 px-4 lg:pe-10 pe-0">
              <h3 className="md:text-40 text-32 font-bold leading-tight text-link dark:text-white">Develop with feature-rich
            NextJs Dashboard</h3>
              <div className="my-6 flex items-center gap-4">
                 <Button as={Link} href="/auth/auth1/login" color={"primary"} >Login</Button>
                 <Button as={Link} href="/auth/auth1/register" color={"outlineprimary"} >Register</Button>
              </div>
              <p className="text-base font-medium text-link dark:text-white">
              <span className="font-semibold">One-time purchase</span> - no recurring fees.
              </p>
            </div>
         </div>
         <Image src={banner} alt="banner" className="absolute top-0 -end-[300px] rtl:-scale-x-100 lg:block hidden" />
        </div>
        </div>
    )
}
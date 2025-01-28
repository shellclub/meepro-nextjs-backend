import { Button } from "flowbite-react"
import Link from "next/link"

export const HeroSection = () => {
    return (
        <>
          <div className="wrapper lg:pt-6 pt-0 bg-lightprimary dark:bg-lightprimary">
            <div className="container-md px-4 lg:py-4 py-0">
               <div className="grid grid-cols-12 gap-6  lg:py-24 py-12">
                 <div className="lg:col-span-6 col-span-12">
                    <h3 className="lg:text-5xl text-32 font-bold text-link dark:text-white !leading-tight">Get to know Modernize Dashboard Template</h3>
                    <div className="flex flex-wrap mt-6 gap-4">
                                <Button as={Link} href="/auth/auth1/register" color={"primary"} >
                                    Create An Account
                                </Button>
                                <Button as={Link} href="/frontend-pages/about" color={"outlineprimary"} >
                                    View Open Position
                                </Button>
                    </div>
                 </div>
                 <div className="lg:col-span-6 col-span-12">
                    <p className="text-base text-lightmuted dark:text-darklink leading-loose lg:ps-16 ps-0">Do you need a highly customizable and developer friendly premium vuejs admin template packed with numerous features? <span className="text-link font-semibold dark:text-white">Modernize Tailwind Nextjs Admin</span> Template has everything you need. This <span className="text-link font-semibold dark:text-white">Nextjs</span> based admin template is designed in accordance with industry standards and best practices to provide you.</p>
                 </div>
               </div>
            </div>
          </div>
        </>
    )
}
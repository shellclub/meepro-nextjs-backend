import { Icon } from "@iconify/react/dist/iconify.js"
import { Tooltip } from "flowbite-react"
import Link from "next/link"
import logo from "/public/favicon.svg"
import Image from "next/image"
import facebook from "/public/images/frontend-pages/svgs/facebook.svg"
import instagram from "/public/images/frontend-pages/svgs/instagram.svg"
import twitter from "/public/images/frontend-pages/svgs/twitter.svg"

export const CustomFooter = () => {
    const navLinks1 = [
        {
          key: "link1",
          title: "Cards",
          link: "/widgets/cards",
        },
        {
          key: "link2",
          title: "Pricing",
          link: "/theme-pages/pricing",
        },
        {
          key: "link3",
          title: "Account Settings",
          link: "/theme-pages/account-settings",
        },
        {
          key: "link4",
          title: "FAQ",
          link: "/theme-pages/faq",
        },
        {
          key: "link5",
          title: "Casl",
          link: "/theme-pages/casl",
        },
      ];
      const navLinks2 = [
        {
          key: "link1",
          title: "Banners",
          link: "/widgets/banners",
        },
        {
          key: "link2",
          title: "Charts",
          link: "/widgets/charts",
        },
        {
          key: "link3",
          title: "Headless Radio",
          link: "/headless-form/radiogroup",
        },
        {
          key: "link4",
          title: "Gallery",
          link: "/apps/user-profile/gallery",
        },
        {
          key: "link5",
          title: "Buttons",
          link: "/ui-components/buttons",
        },
      ];
      const navLinks3 = [
        {
          key: "link1",
          title: "Form Layouts",
          link: "/forms/form-layouts",
        },
        {
          key: "link2",
          title: "Tables",
          link: "/tables/basic",
        },
        {
          key: "link3",
          title: "React Table",
          link: "/react-tables/basic",
        },
        {
          key: "link4",
          title: "Form Elements",
          link: "/forms/form-elements",
        },
        {
          key: "link5",
          title: "Validation",
          link: "/forms/form-validation",
        },
      ];
    return (
        <>
          <div className="container-md px-4 lg:py-24 py-20">
            <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                    <h4 className="text-lg text-link dark:text-white font-semibold mb-8">Company and team</h4>
                    <div className="flex flex-col gap-4">
                       {
                        navLinks1.map((item)=>{
                            return(
                                <Link key={item.key} href={item.link} className="text-sm font-medium text-lightmuted hover:text-primary dark:text-darklink block" >{item.title}</Link>
                            )
                        })
                       }
                    </div>
                </div>
                <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                    <h4 className="text-lg text-link dark:text-white font-semibold mb-8">Features</h4>
                    <div className="flex flex-col gap-4">
                       {
                        navLinks2.map((item)=>{
                            return(
                                <Link key={item.key} href={item.link} className="text-sm font-medium text-lightmuted hover:text-primary dark:text-darklink block" >{item.title}</Link>
                            )
                        })
                       }
                    </div>
                </div>
                <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                    <h4 className="text-lg text-link dark:text-white font-semibold mb-8">Resources</h4>
                    <div className="flex flex-col gap-4">
                       {
                        navLinks3.map((item)=>{
                            return(
                                <Link key={item.key} href={item.link} className="text-sm font-medium text-lightmuted hover:text-primary dark:text-darklink block" >{item.title}</Link>
                            )
                        })
                       }
                    </div>
                </div>
                <div className="lg:col-span-3 sm:col-span-6 col-span-12">
                <h4 className="text-lg text-link dark:text-white font-semibold mb-8">Followers</h4>
                  <div className="flex items-center gap-5">
                  <Tooltip content="Facebook" className="shrink-0">
                   <Image src={facebook} alt="social-icon" />
                 </Tooltip>
                  <Tooltip content="Twitter" className="shrink-0">
                   <Image src={twitter} alt="social-icon" />
                 </Tooltip>
                  <Tooltip content="Instagram" className="shrink-0">
                  <Image src={instagram} alt="social-icon" />
                 </Tooltip>
                  </div>
                </div>
            </div>
          </div>
          <div className="container-md px-4 py-10 border-t border-border dark:border-darkborder">
                <div className="flex justify-between items-center flex-wrap">
                    <div className="flex items-center gap-4">
                       <Image src={logo} alt="logo" height={24} />
                       <p className="text-base text-lightmuted dark:text-darklink">All rights reserved by Modernize.</p>
                    </div>
                    <p className="text-base text-lightmuted dark:text-darklink flex items-center gap-1">Produced by <Link className="text-primary" href="https://adminmart.com/" >Adminmart</Link> </p>
                </div>
            </div>
        </>
    )
}
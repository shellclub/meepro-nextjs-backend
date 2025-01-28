"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Badge, Button } from "flowbite-react"
import { PaymentOptions } from "../paymentOptions/PaymentOptions"

export const Licenseuse = () => {
    const Licenses = [
        {
            key:"license1",
            licenseType:"Single Use",
            licenseDesc:"Use for single end product which end users can’t be charged for.",
            price:"$49",
            isSaasUse:false,
            feature:"One Project",
            isPopular:false
        },
        {
            key:"license2",
            licenseType:"Multiple Use",
            licenseDesc:"Use for unlimited end products end users can’t be charged for.",
            price:"$89",
            isSaasUse:false,
            feature:"Unlimited Project",
            isPopular:false
        },
        {
            key:"license3",
            licenseType:"Extended Use",
            licenseDesc:"Use for single end product which end users can be charged for.",
            price:"$299",
            isSaasUse:true,
            feature:"One Project",
            isPopular:true
        },
        {
            key:"license4",
            licenseType:"Unlimited Use",
            licenseDesc:"Use in unlimited end products end users can be charged for.",
            price:"$499",
            isSaasUse:true,
            feature:"Unlimited Project",
            isPopular:false
        },
    ]
    return (
        <>
          <div className="container-md px-4 lg:py-24 py-12">
            <div className="flex w-full justify-center mb-12">
                <div className="lg:w-6/12 w-full">
                  <div className="md:text-40 text-32 font-bold leading-tight text-center text-link dark:text-white">
                  111,476+ Trusted developers & many tech giants as well
                  </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
               {
                Licenses.map((item)=>{
                    return(
                        <div className="xl:col-span-3 md:col-span-6 col-span-12" key={item.key}>
                        <div className="p-7 rounded-base border border-border dark:border-darkborder">
                           <div className="pb-8 border-b border-border dark:border-darkborder">
                           <h6 className="text-xl font-bold text-link dark:text-white mb-4 flex items-center gap-2">{item.licenseType}
                             {item.isPopular?<Badge color={"lightprimary"} className="font-bold py-2 rounded-md">Popular</Badge>:null}
                           </h6>
                           <p className="text-lightmuted text-[13px] font-medium dark:text-darklink">{item.licenseDesc}</p>
                           </div>
                           <div className="flex gap-2 pt-8 ">
                            <div className="md:text-40 text-32 leading-tight font-bold text-link dark:text-white">{item.price}</div>
                            <p className="text-base self-end text-lightmuted dark:text-darklink font-normal relative -top-1">/one time pay</p>
                           </div>
                           <div className="mt-8 flex flex-col gap-3.5">
                            <div className="flex items-center gap-2">
                                <Icon icon="tabler:circle-check" className="text-xl text-secondary" />
                                <p className="text-sm text-link dark:text-darklink font-medium tracking-wide">Full source code</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="tabler:circle-check" className="text-xl text-secondary" />
                                <p className="text-sm text-link dark:text-darklink font-medium tracking-wide">Documentation</p>
                            </div>
                            <div className="flex items-center gap-2">
                                {item.isSaasUse?<><Icon icon="tabler:circle-check" className="text-xl text-secondary dark:text-dar-secondary " />
                                    <p className="text-sm text-link dark:text-darklink font-medium tracking-wide">Use in SaaS app</p></>:<>
                                    <Icon icon="tabler:circle-x" className="text-xl text-link dark:text-darklink opacity-50" />
                                <p className="text-sm text-link dark:text-darklink font-medium tracking-wide opacity-50">Use in SaaS app</p></>}
                            </div>
                            <div className="flex items-center gap-2">
                            <p className="text-sm text-link dark:text-darklink font-medium tracking-wide">{item.feature==="One Project"?<><span className="font-bold">One</span> Project</>:<><span className="font-bold">Unlimited</span> Project</>}</p>
                            </div>
                            <div className="flex items-center gap-2">
                            <p className="text-sm text-link dark:text-darklink font-medium tracking-wide"><span className="font-bold">One Year</span> Technical Support</p>
                            </div>
                            <div className="flex items-center gap-2">
                            <p className="text-sm text-link dark:text-darklink font-medium tracking-wide"><span className="font-bold">One Year</span> Free Updates</p>
                            </div>
                           </div>
                           <div className="mt-8">
                            <Button color={"primary"} size={"lg"} className="text-lg py-0 font-medium rounded-md w-full" >Purchase Now</Button>
                           </div>
                        </div>
                        </div>
                    )
                })
               }
            </div>
            <PaymentOptions/>
          </div>
        </>
    )
}
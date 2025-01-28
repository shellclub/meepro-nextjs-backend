"use client"
import Image from "next/image"
import featurebg from "/public/images/frontend-pages/background/feature-bg.jpg"
import { Accordion, Button } from "flowbite-react"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useEffect, useState } from "react"

export const TeamWorks = () => {

    const [workType , setWorkType] = useState("Team Scheduling");

    const handleWork = (work:string) => {
        setWorkType(work);
    }
    const WorkTypes = [
        {
            key:"work1",
            work:"Team Scheduling",
            icon:"tabler:user-circle",
            isBorder:true
        },
        {
            key:"work2",
            work:"Payments",
            icon:"tabler:credit-card-pay",
            isBorder:true
        },
        {
            key:"work3",
            work:"Embedding",
            icon:"tabler:layout-sidebar-right",
            isBorder:true
        },
        {
            key:"work4",
            work:"Workflows",
            icon:"tabler:topology-star-3",
            isBorder:false
        },
    ]

    return (
        <>
        <div className="w-full border-t border-border dark:border-darkborder mb-16 custom-shadow mt-0">
        <div className="container-md">
             <div className="overflow-x-auto">
             <div className="grid grid-cols-12 min-w-[900px]">
                {
                    WorkTypes.map((item)=>{
                        return(
                            <div className="col-span-3" key={item.key}>
                            <div onClick={()=> handleWork(item.work)} className={`cursor-pointer py-7 px-4 flex justify-center ${workType===item.work?"text-primary border-t-2 border-t-primary dark:border-t-primary":""} ${item.isBorder?"justify-center border-r border-r-border dark:border-r-darkborder":""}`}>
                            <div className="flex gap-2 items-center">
                            <Icon icon={item.icon} className="shrink-0 text-2xl" />
                            <h2 className={`text-lg font-semibold ${workType===item.work?"text-primary dark:text-primary":""}`}>{item.work}</h2>
                            </div>
                          </div>
                          </div>
                        )
                    })
                }
            </div>
             </div>
         </div>
        </div>
        <div className="container-md px-4">
           <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-6 col-span-12">
                <Image src={featurebg} alt="feature-img" />
            </div>
            <div className="lg:col-span-6 col-span-12 flex items-center">
            {
                workType==="Team Scheduling"?(
                    <div className="flex flex-col ps-10 items-start w-full">
                    <h1 className="mb-6 md:text-40 text-32 leading-normal text-link dark:text-white font-bold">Defend your focus</h1>
                    <Accordion flush className="w-full">
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Combine teammate schedules 1
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Factor in outside colleagues
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Round robin pooling
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
         <Button color={"primary"} className="mt-6" >Learn More</Button>
                </div>
                ): workType==="Payments"?(
                    <div className="flex flex-col ps-10 items-start w-full">
                    <h1 className="mb-6 md:text-40 text-32 leading-normal text-link dark:text-darklink font-bold">Nextjs Templates</h1>
                    <Accordion className="w-full">
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Combine teammate schedules 2
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Factor in outside colleagues
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Round robin pooling
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
         <Button color={"primary"} className="mt-6" >Learn More</Button>
                </div>
                ):workType==="Embedding"?(
                    <div className="flex flex-col ps-10 items-start w-full">
                    <h1 className="mb-6 md:text-40 text-32 leading-normal text-link dark:text-darklink font-bold">Tailwind Templates</h1>
                    <Accordion className="w-full">
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Combine teammate schedules 3
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Factor in outside colleagues
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Round robin pooling
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
         <Button color={"primary"} className="mt-6" >Learn More</Button>
                </div>
                ):(
                    <div className="flex flex-col ps-10 items-start w-full">
                    <h1 className="mb-6 md:text-40 text-32 leading-normal text-link dark:text-darklink font-bold"> Modernize Templates</h1>
                    <Accordion className="w-full">
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Combine teammate schedules 4
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Factor in outside colleagues
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="focus:ring-0 text-[17px] ps-0 leading-normal" >
            Round robin pooling
            </Accordion.Title>
            <Accordion.Content className="ps-0">
              <p className="text-base">
              Factor in availability for required attendees, and skip checking for conflicts for optional attendees.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
         <Button color={"primary"} className="mt-6" >Learn More</Button>
                </div>
                )
            }
            </div>
           </div>
         </div>        
        </>
    )
}
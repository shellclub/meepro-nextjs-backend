"use client"
import { Badge } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import { Icon } from "@iconify/react/dist/iconify.js"

export const Tasks = () => {
    const Tasks = [
        {
            key:"task1",
            status:"Inprogress",
            date:"8 March 2020",
            title:"NFT Landing Page",
            description:"Designing an NFT-themed website with a creative concept so the lasts...",
            tasks:2,
            comments:13,
            badgeColor:"lightprimary"
        },
        {
            key:"task2",
            status:"Inpending",
            date:"8 Jan 2024",
            title:"NFT Dashboard Finanace Management",
            description:"Designing an NFT-themed website with a creative concept so the lasts...",
            tasks:4,
            comments:50,
            badgeColor:"lighterror"
        },
        {
            key:"task3",
            status:"Completed",
            date:"8 Feb 2024",
            title:"NFT Logo Branding",
            description:"Designing an NFT-themed website with a creative concept so the lasts...",
            tasks:1,
            comments:12,
            badgeColor:"lightsuccess"
        },
    ]
    return (
        <CardBox>
            <div className="mb-5">
                <h4 className="card-title">Tasks</h4>
                <p className="card-subtitle">The power of prioritizing your tasks</p>
            </div>
           {
            Tasks.map((item)=>{
                return (
                    <div key={item.key} className="py-4 border-b last:border-b-0 last:pb-0 border-border dark:border-darkborder">
                    <div className="flex items-center justify-between">
                       <Badge color={item.badgeColor} className="rounded-md py-1.1 text-sm" >{item.status}</Badge>
                       <span className="text-sm">{item.date}</span>
                   </div>
                   <h6 className="mt-4 text-sm font-medium">{item.title}</h6>
                       <p className="pt-1" >{item.description}</p>
                       <div className="flex gap-3 items-center mt-4">
                          <div className="flex gap-2 items-center">
                             <Icon icon="tabler:clipboard" className="shrink-0 text-lg text-primary" />
                             <span>{`${item.tasks} Tasks`}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                             <Icon icon="tabler:message-dots" className="shrink-0 text-lg text-primary" />
                             <span>{`${item.comments} Comments`}</span>
                          </div>
                       </div>
                    </div>
                )
            })
           }
        </CardBox>
    )
}
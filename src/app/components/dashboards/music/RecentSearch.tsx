"use client"
import { Badge, Dropdown, Progress } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"
import album1 from "/public/images/music/album1.jpg"
import album2 from "/public/images/music/album2.jpg"
import album3 from "/public/images/music/album3.jpg"
import album4 from "/public/images/music/album4.jpg"

export const RecentSearch = () => {
    const Albums = [
        {
            key:"music1",
            album:album1,
            title:"Viva Las"
        },
        {
            key:"music2",
            album:album2,
            title:"As it was"
        },
        {
            key:"music3",
            album:album3,
            title:"Redtape Anthem"
        },
        {
            key:"music4",
            album:album4,
            title:"Viva Las"
        },
    ]
    return (
        <CardBox>
            <div className="mb-6">
                <h6 className="card-title">Recent Search</h6>
                <p className="card-subtitle">What's next in the world of search?</p>
            </div>
            <div className="flex items-center flex-wrap gap-3">
                <Badge color={"lightprimary"} className="py-1.5 custome-badge" >
                    <span className="text-sm me-3">Shiela On7</span>
                    <Icon icon="tabler:square-x" className="text-sm" />
                </Badge>
                <Badge color={"lighterror"} className="py-1.5 custome-badge" >
                    <span className="text-sm me-3">Denny Caknan</span>
                    <Icon icon="tabler:square-x" className="text-sm" />
                </Badge>
            </div>
            <CardBox className="bg-lightprimary dark:bg-lightprimary mt-7" >
                <Image src={album3} alt="album" className="rounded-md mx-auto" />
                <h5 className="my-4 text-lg text-center">Party Anthemes</h5>
                <div className="flex justify-center items-center gap-7">
                    <Icon icon="tabler:repeat" className="text-base opacity-70 cursor-pointer hover:text-primary" />
                    <Icon icon="tabler:chevrons-left" className="text-base opacity-70 cursor-pointer hover:text-primary" />
                    <Icon icon="tabler:player-play" className="text-base text-primary cursor-pointer hover:text-primary" />
                    <Icon icon="tabler:chevrons-right" className="text-base opacity-70 cursor-pointer hover:text-primary" />
                    <Icon icon="tabler:arrows-shuffle" className="text-base opacity-70 cursor-pointer hover:text-primary" />
                </div>
                <Progress progress={45} size="md" color="primary" className="my-3.5" />
                <div className="flex items-center justify-between">
                    <span className="text-sm opacity-70">00:00</span>
                    <Icon icon="tabler:volume-3" className="text-base" />
                    <span className="text-sm opacity-70">01:10</span>
                </div>
                <div className="mt-7">
                   {
                    Albums.map((item)=>{
                        return(
                            <div key={item.key} className="p-4 py-[17px] hover:bg-lightprimary rounded-md overflow-hidden cursor-pointer border-b last:border-b-0 border-border dark:border-darkborder">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3.5">
                                    <Image src={item.album} alt="album" className="h-11 w-11 rounded-md" />
                                    <div>
                                        <h6 className="text-sm font-medium mb-1 max-w-20 truncate">{item.title}</h6>
                                        <p className="text-xs">{item.title}</p>
                                    </div>
                                </div>
                                <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <Icon icon="tabler:dots-vertical" className='text-muted dark:text-darklink hover:text-primary dark:hover:text-primary text-lg shrink-0 cursor-pointer' />}>
                                    <Dropdown.Item>
                                        <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                                            <Icon icon="tabler:share" className="text-base" />
                                            Share
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                                            <Icon icon="tabler:download" className="text-base" />
                                            Download
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                                            <Icon icon="tabler:info-circle" className="text-base" />
                                            Download
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                        )
                    })
                   }
                </div>
            </CardBox>
        </CardBox>
    )
}
"use client"
import { Badge, Dropdown, Select, Table } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import Image from "next/image";
import etherium from "/public/images/svgs/icon-etherium.svg"
import bitcoin from "/public/images/svgs/icon-bitcoin.svg"
import xrp from "/public/images/svgs/icon-xrp.svg"
import { Icon } from "@iconify/react/dist/iconify.js";
import user1 from "/public/images/profile/user-5.jpg"
import user2 from "/public/images/profile/user-3.jpg"
import user3 from "/public/images/profile/user-8.jpg"


export const TrendingCreator = () => {

    const Creators = [
        {
            key: "creator1",
            creatorProfileImg: user1 ,
            creatorname:"Mike Johs",
            quantity:"12.200",
            price:"$300,000"
        },
        {
            key: "creator2",
            creatorProfileImg: user2,
            creatorname:"Aston lyn",
            quantity:"10.150",
            price:"$250,000",
        },
        {
            key: "creator3",
            creatorProfileImg: user3,
            creatorname:"George irvin",
            quantity:"10.100",
            price:"$230,000",
        },
    ]
    return (
        <CardBox>
            <div className="sm:flex items-center justify-between mb-6">
                <div>
                    <h5 className="card-title">Trending Creator</h5>
                    <p className="card-subtitle">The Benefits of being a trending creator</p>
                </div>
                <div className="ms-auto mt-3 md:mt-0">
                    <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <Icon icon="tabler:dots-vertical" className='text-muted dark:text-darklink text-xl shrink-0 cursor-pointer' />}>
                        <Dropdown.Item>
                            <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                                <Icon icon="tabler:share" className="text-base" />
                                Share{" "}
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                                <Icon icon="tabler:download" className="text-base" />
                                Download{" "}
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                                <Icon icon="tabler:info-circle" className="text-base" />
                                Download{" "}
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
             {
                Creators.map((item)=>{
                    return(
                        <div key={item.key} className="flex items-center justify-between gap-3 py-4 last:pb-0 border-b last:border-b-0 border-border dark:border-darkborder">
                        <div className="flex items-center gap-2">
                            <Image
                                src={item.creatorProfileImg}
                                className="h-11 w-11 rounded-full"
                                alt="icon"
                            />
                            <div>
                                <h6 className="text-sm mb-0.5" >{item.creatorname}</h6>
                                <p className="font-normal text-xs">{`${item.quantity} Items`}</p>
                            </div>
                        </div>
                        <div>
                                <h6 className="text-sm mb-0.5" >{`${item.price}+`}</h6>
                                <p className="font-normal text-end text-xs">Total USD</p>
                            </div>
                    </div>
                    )
                })
             }

        </CardBox>

    )
}
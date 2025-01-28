"use client"
import { Badge, Dropdown, Select, Table } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import user1 from "/public/images/profile/user-5.jpg";
import user2 from "/public/images/profile/user-2.jpg";
import user3 from "/public/images/profile/user-3.jpg";
import user4 from "/public/images/profile/user-4.jpg";
import user5 from "/public/images/profile/user-5.jpg";
import Image from "next/image";
import prodImg1 from "/public/images/blog/blog-img1.jpg";
import prodImg2 from "/public/images/blog/blog-img2.jpg";
import prodImg3 from "/public/images/blog/blog-img3.jpg";
import prodImg4 from "/public/images/blog/blog-img4.jpg";
import etherium from "/public/images/svgs/icon-etherium.svg"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export const RecentHistory = () => {

    const RecentHistoryData = [
        {
            key: "activity1",
            senderImg: user1,
            receiverImg: user2,
            senderName: "John",
            receiverName: "Deo",
            productImg:prodImg1,
            title: "Quantum Ape",
            event:"Purchase",
            amount: "4",
            ethvalue: "16",
            date: "13 July, 2024",
            isSent:true,
            color:"lightprimary"
        },
        {
            key: "activity2",
            senderImg: user3,
            receiverImg: user4,
            senderName: "Liam",
            receiverName: "Noah",
            productImg:prodImg2,
            title: "Bored Ape",
            event:"Purchase",
            amount: "4",
            ethvalue: "8",
            date: "1 Aug, 2024",
            color:"lighterror",
            isSent:false
        },
        {
            key: "activity3",
            senderImg: user4,
            receiverImg: user5,
            senderName: "Oliver",
            receiverName: "Elijah",
            productImg:prodImg3,
            title: "Space Ape",
            event:"List",
            amount: "4",
            ethvalue: "9",
            date: "12 Jan, 2024",
            color:"lightsuccess",
            isSent:false
        },
        {
            key: "activity4",
            senderImg: user5,
            receiverImg: user2,
            senderName: "James",
            receiverName: "Lucas",
            productImg:prodImg4,
            title: "Fancy Bears",
            event:"Purchase",
            amount: "4",
            ethvalue: "10",
            date: "1 Feb, 2024",
            color:"lightprimary",
            isSent:true
        },
    ]
    return (
        <CardBox>
            <div className="sm:flex items-center justify-between mb-6">
                <div>
                    <h5 className="card-title">Recent History</h5>
                    <p className="card-subtitle">Best employees</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-x-auto">
                            <Table>
                                <Table.Head>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold ps-0">
                                        Item
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        Event
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        From-To
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        Amount
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        Value
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        Data
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                       Link
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                                    {RecentHistoryData.map((item, index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell className="whitespace-nowrap ps-0 md:min-w-auto min-w-[200px]">
                                                <div className="flex gap-3 items-center">
                                                    <Image
                                                        src={item.productImg}
                                                        alt="icon"
                                                        className="rounded-md h-[50px] w-[50px]"
                                                    />
                                                    <div>
                                                        <h6 className="text-sm font-semibold mb-1">{item.title}</h6>
                                                    </div>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <Badge color={item.color} className="py-1.1 rounded-md text-sm" >{item.event}</Badge>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <Image src={item.senderImg} alt="user-img" width={25} height={25} className="rounded-full" />
                                                    <h6 className="text-sm font-medium" >{item.senderName}</h6>
                                                    {item.isSent?<Icon icon="tabler:arrow-right" className='text-success text-lg' />:<Icon icon="tabler:arrow-left" className='text-error text-lg' />}
                                                    <Image src={item.receiverImg} alt="user-img" width={25} height={25} className="rounded-full" />
                                                    <h6 className="text-sm font-medium" >{item.receiverName}</h6>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <h6 className="text-sm font-medium" >{item.amount}</h6>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <h6 className="flex items-center gap-1">
                                                    <Image
                                                        src={etherium}
                                                        alt="icon"
                                                        className="text-left icon-white ms-1 "
                                                    />
                                                    <span
                                                        className=" text-dark font-normal dark:text-white" >
                                                        {`${item.ethvalue} ETH`}
                                                    </span>
                                                </h6>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <h6 className="text-sm font-medium" >{item.date}</h6>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <Icon icon="tabler:dots" className='text-muted dark:text-darklink text-base shrink-0 cursor-pointer' />}>
                                                    <Dropdown.Item>
                                                        <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                                                            <Icon icon="tabler:link" className="text-base" />
                                                            https://www.abc.com/sfsdf767s 
                                                        </div>
                                                    </Dropdown.Item>
                                                </Dropdown>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </CardBox>

    )
}
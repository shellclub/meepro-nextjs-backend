"use client"
import { Badge, Dropdown, Select, Table } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import user1 from "/public/images/profile/user-5.jpg";
import user2 from "/public/images/profile/user-2.jpg";
import user3 from "/public/images/profile/user-3.jpg";
import Image from "next/image";
import engflag from "/public/images/flag/icon-flag-en.svg"
import cnflag from "/public/images/flag/icon-flag-cn.svg";
import frflag from "/public/images/flag/icon-flag-fr.svg";
import saflag from "/public/images/flag/icon-flag-sa.svg";
import inflag from "/public/images/flag/icon-flag-in.svg";
import etherium from "/public/images/svgs/icon-etherium.svg"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export const TopNftPerformer = () => {
    let initData =         {
        icon: engflag,
        value: "USD",
      }
    const [currency , setCurrency] = useState(initData)
    const TopNftData = [
        {
            key: "topNft1",
            nftImg: user1,
            title: "Alan Walker Origins",
            volume: "18,670.21",
            percentChange: "-20.38%",
            price: "$6.8k"
        },
        {
            key: "topNft2",
            nftImg: user2,
            title: "The StarSharks NFTs",
            volume: "15,880.20",
            percentChange: "+15.14%",
            price: "$5.8k"
        },
        {
            key: "topNft3",
            nftImg: user3,
            title: "Sacred Realm",
            volume: "14,920.20",
            percentChange: "-10.25%",
            price: "$5.2k"
        },
    ]
    const Currency = [
        {
          icon: engflag,
          value: "USD",
        },
        {
          icon: inflag,
          value: "INR",
        },
        {
          icon: frflag,
          value: "FR",
        },
      ];
    return (
        <CardBox>
            <div className="sm:flex items-center justify-between mb-6">
                <div>
                    <h5 className="card-title">Top Performers</h5>
                    <p className="card-subtitle">Best Nfts</p>
                </div>
                <div className="ms-auto mt-3 md:mt-0">
                <div className="relative group/menu">
        <Dropdown
          label=""
          className="w-40  rounded-sm"
          dismissOnClick={false}
          renderTrigger={() => (
                <div className="flex items-center p-1.5 px-2.5 rounded-md bg-lightprimary dark:bg-lightprimary cursor-pointer">
              <Image
                src={currency.icon}
                alt="language"
                className=" h-4 w-6 shrink-0 object-cover"
              />
              <span className="text-sm text-dark dark:text-darklink group-hover:text-primary font-medium leading-[25px] ms-2" >{currency.value}</span>
              <Icon icon="tabler:chevron-down" className="text-base shrink-0 ms-3" />
            </div>
          )}
        >
          {Currency.map((item, index) => (
            <Dropdown.Item
              className="flex gap-3 items-center py-2 px-3 bg-hover group w-full"
              key={index}
              onClick={() => setCurrency({
                icon:item.icon,
                value:item.value
              })}
            >
              <Image
                src={item.icon}
                alt="flag"
                className=" object-cover h-4 w-6"
              />
              <span className="text-sm text-muted dark:text-darklink group-hover:text-primary font-medium leading-[25px]" >{item.value}</span>
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-x-auto">
                            <Table>
                                <Table.Head>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold ps-0">
                                        Collection
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        Volume
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        24h
                                    </Table.HeadCell>
                                    <Table.HeadCell className="text-sm dark:text-white font-semibold">
                                        Floor Price
                                    </Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                                    {TopNftData.map((item, index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell className="whitespace-nowrap ps-0 md:min-w-auto min-w-[200px]">
                                                <div className="flex gap-3 items-center">
                                                    <Image
                                                        src={item.nftImg}
                                                        alt="icon"
                                                        className="h-11 w-11 rounded-full"
                                                    />
                                                    <div>
                                                        <h6 className="text-sm font-semibold mb-1">{item.title}</h6>
                                                    </div>
                                                </div>
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
                                                        {item.volume}
                                                    </span>
                                                </h6>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <p className={`text-sm ${item.percentChange.startsWith("+") ? 'text-success' : "text-error"}`} >{item.percentChange}</p>
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap">
                                                <p className="text-dark dark:text-white text-sm">
                                                    {item.price}
                                                </p>
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
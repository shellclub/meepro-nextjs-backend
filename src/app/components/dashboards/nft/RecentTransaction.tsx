"use client"
import { Badge, Dropdown, Select, Table } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import Image from "next/image";
import etherium from "/public/images/svgs/icon-etherium.svg"
import bitcoin from "/public/images/svgs/icon-bitcoin.svg"
import xrp from "/public/images/svgs/icon-xrp.svg"
import { Icon } from "@iconify/react/dist/iconify.js";


export const RecentTransaction = () => {

    const Transactions = [
        {
            key: "transaction1",
            currencyImg: etherium ,
            quantity:"1.23ETH",
            price:"$12,000",
            percentageChng:"-6.8%"
        },
        {
            key: "transaction2",
            currencyImg: bitcoin,
            quantity:"5.23 BTC",
            price:"$5,000",
            percentageChng:"+2.30%"
        },
        {
            key: "transaction3",
            currencyImg: xrp,
            quantity:"9.20 XRP",
            price:"$6,200",
            percentageChng:"-1.0%"
        },
    ]
    return (
        <CardBox>
            <div className="sm:flex items-center justify-between mb-6">
                <div>
                    <h5 className="card-title">Recent Transactions</h5>
                    <p className="card-subtitle">Examining the risks of recent transactions</p>
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
                Transactions.map((item)=>{
                    return(
                        <div key={item.key} className="flex items-center gap-3 py-4 last:pb-0 border-b last:border-b-0 border-border dark:border-darkborder">
                        <div className="text-white bg-lightgray dark:bg-darkgray rounded-full h-11 w-11 flex items-center justify-center">
                            <Image
                                src={item.currencyImg}
                                className="opacity-70 h-4 w-4"
                                alt="icon"
                            />
                        </div>
                        <div>
                            <h6 className="leading-4">{item.quantity}</h6>
                            <span className="text-xs text-bodytext dark:text-darklink">{item.price}</span>
                        </div>
                        <div className="text-end ms-auto">
                            <span className={`${item.percentageChng.startsWith("+")?"text-success":"text-error"}`}>{item.percentageChng}</span>
                        </div>
                    </div>
                    )
                })
             }

        </CardBox>

    )
}
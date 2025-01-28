"use client"
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import myCard from "/public/images/backgrounds/my-card.jpg"
import mastercard from "/public/images/nft/mastercard.png"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Dropdown } from "flowbite-react"

export const Wallet = () => {
    return (
        <CardBox>
            <h5 className="card-title">My Wallets</h5>
            <p className="card-subtitle mb-5">Smart wallets for the digital age</p>
            <CardBox className=" p-0 relative overflow-hidden ">
                <Image
                    src={myCard}
                    className=" w-full"
                    alt="bg-card"
                />
                <div className="absolute card-body p-4 h-full top-0 start-0 end-0">
                    <div className="flex flex-col h-full items-start ">
                        <div>
                            <Image
                                src={mastercard}
                                width={40}
                                alt="mastercard"
                            />
                            <span className="opacity-75 text-white text-xs block mt-3">
                                CARD NUMBER
                            </span>
                            <h4 className="text-white text-xl">2500 1520 2315 4500</h4>
                        </div>
                        <div className="flex items-center justify-between mt-auto w-full">
                            <div>
                                <span className="opacity-75 text-white text-xs uppercase">
                                    Card Holder Name
                                </span>
                                <h6 className="text-white ">HR John</h6>
                            </div>
                            <div>
                                <span className="opacity-75 text-white text-xs uppercase">
                                    Expires On
                                </span>
                                <h6 className="text-white ">09/25</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBox>
            <div className="flex items-center justify-between py-5">
                <h3 className="text-3xl font-semibold text-dark dark:text-white">
                    $1,206.89
                </h3>
                <div className="ms-auto mt-3 md:mt-0">
                    <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <Icon icon="tabler:dots" className='text-muted dark:text-darklink text-xl shrink-0 cursor-pointer' />}>
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
            <div className="flex items-center gap-2">
                <span className="">
                    <Icon icon="tabler:arrow-up-left" className="text-success" />
                </span>
                <span className="text-dark dark:text-white ">USD 420,000</span>
                <span className="text-success font-semibold ">(59,11%)</span>
            </div>
            <Button color={"lightprimary"} className="rounded-md mt-5" >
                View Balance
            </Button>
        </CardBox>

    )
}
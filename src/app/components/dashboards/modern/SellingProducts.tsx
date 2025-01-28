"use client"

import Image from "next/image"
import CardBox from "../../shared/CardBox"
import { Icon } from "@iconify/react/dist/iconify.js"
import piggyBg from "/public/images/backgrounds/piggy.png"
import { Badge, Progress } from "flowbite-react"
const SellingProducts = () => {

    return (
        <CardBox className="p-0 overflow-hidden" >
            <div className="p-30 pb-0 bg-primary">
                <h5 className="card-title text-white">Best Selling Products</h5>
                <p className="card-subtitle text-white dark:text-white">Overview 2023</p>
                <div className="flex justify-center  mt-3">
                    <Image
                        src={piggyBg}
                        alt="pigggy-bg"
                    />
                </div>
            </div>
            <div className="px-2 pb-2 bg-primary">
                <CardBox>
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <div>
                                <h6 className="text-base mb-0.5" >MaterialPro</h6>
                                <p>$23,568</p>
                            </div>
                            <div>
                                <Badge color={"lightprimary"} className="text-sm rounded-md py-1.1" >55%</Badge>
                            </div>
                        </div>
                        {/* Progress */}
                        <Progress progress={45} size="sm" color="primary" />
                        {/* End Progress */}
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <div>
                                <h6 className="text-base mb-0.5" >MaterialPro</h6>
                                <p>$23,568</p>
                            </div>
                            <div>
                                <Badge color={"lightsecondary"} className="text-sm rounded-md py-1.1" >55%</Badge>
                            </div>
                        </div>
                        {/* Progress */}
                        <Progress progress={45} size="sm" color="secondary" />
                        {/* End Progress */}
                    </div>
                </CardBox>
            </div>

        </CardBox>

    )
}

export { SellingProducts }
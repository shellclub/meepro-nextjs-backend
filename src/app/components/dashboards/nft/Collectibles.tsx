"use client"
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import nft1 from "/public/images/nft/1.jpg"
import nft2 from "/public/images/nft/5.jpg"
import nft3 from "/public/images/nft/3.jpg"
import etherium from "/public/images/svgs/icon-etherium.svg"
import { Button } from "flowbite-react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export const Collectibles = () => {
    const TopCollectibles = [
        {
            key: "collectible1",
            limitedTime:"04h 09m 12s",
            nftimg:nft1,
            title:"Geo Runners"
        },
        {
            key: "collectible2",
            limitedTime:"02h 10m 30s",
            nftimg:nft2,
            title:"Cube Runner"
        },
        {
            key: "collectible3",
            limitedTime:"01h 02m 10s",
            nftimg:nft3,
            title:"Algo cube"
        },
        {
            key: "collectible4",
            limitedTime:"04h 09m 12s",
            nftimg:nft1,
            title:"Geo Runners"
        },
    ]
    return (
        <CardBox>
            <h5 className="card-title">Top Collectibles</h5>
            <p className="card-subtitle mb-5">
                The beginner's guide to collectible items
            </p>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    loop={true}
                    dir="ltr"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1030: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {
                        TopCollectibles.map((item) => {
                            return (
                                <SwiperSlide key={item.key} >
                                    <div className="item">
                                        <CardBox className="card p-0 shadow-none overflow-hidden mb-0 border border-border dark:border-darkborder">
                                            <div className="relative">
                                                <Image
                                                    src={item.nftimg}
                                                    className="w-full"
                                                    alt="1"
                                                />
                                                <div className="card-img-overlay absolute top-3 right-3">
                                                    <div className="text-end">
                                                        <span className="badge bg-dark rounded-full py-1 px-3 text-xs  text-white">
                                                            {item.limitedTime}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 text-left rtl:text-right">
                                                <h6 className="text-base">{item.title}</h6>
                                                <div className="flex items-center mt-3 mb-4 justify-between ">
                                                    <div className="order-2">Volume</div>
                                                    <h6 className="flex items-center order-1">
                                                        <span
                                                            className=" text-dark dark:text-white
                                                              "
                                                        >
                                                            10.1
                                                        </span>{" "}
                                                        ETH
                                                        <Image
                                                            src={etherium}
                                                            alt="icon"
                                                            className="text-left icon-white ms-1 "
                                                        />
                                                    </h6>
                                                </div>
                                                <Button color={"primary"} className="rounded-md w-full" >Place a Bid</Button>
                                            </div>
                                        </CardBox>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </CardBox>
    )
}
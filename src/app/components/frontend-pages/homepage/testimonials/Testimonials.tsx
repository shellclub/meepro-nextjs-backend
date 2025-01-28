"use client"

import Image from "next/image"
import LogoIcon from '/public/favicon.svg'
import { useContext, useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Swiper types
import { Swiper as SwiperClass } from "swiper/types";

import customer1 from "/public/images/profile/user-1.jpg";
import customer2 from "/public/images/profile/user-2.jpg";
import customer3 from "/public/images/profile/user-3.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomizerContext } from "@/app/context/customizerContext";

export const Testimonials = () => {
    const { activeDir } = useContext(CustomizerContext);
    const Customers = [
        {
            key:"leader1",
            img:customer1,
            name:"Alex Martinez",
            desc:"The dashboard template from adminmart has helped me provide a clean and sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having.",
        },
        {
            key:"leader2",
            img:customer2,
            name:"Minshan Cui",
            desc:"The quality of design is excellent, customizability and flexibility much better than the other products available in the market.I strongly recommend the AdminMart to other."
        },
        {
            key:"leader3",
            img:customer3,
            name:"Eminson Mendoza",
            desc:"This template is great, UI-rich and up-to-date. Although it is pretty much complete, I suggest to improve a bit of documentation. Thanks & Highly recomended!"
        },
        {
            key:"leader4",
            img:customer1,
            name:"Alex Martinez",
            desc:"The dashboard template from adminmart has helped me provide a clean and sleek look to my dashboard and made it look exactly the way I wanted it to, mainly without having.",
        },
    ]
    const swiperRef = useRef<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <> 
        <div className="container-md lg:py-24 py-12 px-4">
            <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-6 col-span-12 flex items-center">
                  <div className="flex w-full">
                    <div className="lg:w-9/12 w-full">
                    <h4 className="md:text-40 text-32 leading-tight text-link font-bold dark:text-white mb-4 pe-10">
                    What our clients think <Image src={LogoIcon} alt="logo" height={24} className="inline-block mx-2" /> about us?
                    </h4>
                    <p className="text-base text-lightmutes dark:text-darklink leading-relaxed">Our users' feedback is a testament to our commitment to quality and user satisfaction. Read what they have to say about their journey with us.</p></div>
                  </div>
                </div>
                <div className="lg:col-span-6 col-span-12">
                    <div className="rounded-base border border-border dark:border-darkborder p-12">
                        <h6 className="text-2xl font-semibold text-link dark:text-white mb-8">Features availability</h6>
                        <div>
                        <Swiper
            onSwiper={(swiper: SwiperClass) => {
                // Store the swiper instance in the ref
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper: SwiperClass) => {
                setCurrentIndex(swiper.activeIndex); // Update current slide index on slide change
              }}
        slidesPerView={1}
        spaceBetween={30}
        className="mySwiper"
      >
       {
        Customers.map((item)=>{
            return (
                <SwiperSlide key={item.key} >
                <div className="img-wrapper pb-6 border-b border-border dark:border-darkborder">
                    <div className="flex items-center gap-4 mb-6">
                    <Image src={item.img} alt="leader-image" className="h-14 w-14 rounded-full" />
                    <h6 className="text-base font-bold text-link dark:text-white">{item.name}</h6>
                    </div>
                    <p className="text-lg text-lightmuted dark:text-darklink">{item.desc}</p>
                </div>
            </SwiperSlide>
            )
        })
       }
      </Swiper>
      <div className="flex items-center gap-2 mt-6">
                    <div onClick={() => swiperRef.current?.slidePrev()} className={`h-8 w-8 rounded-full flex items-center justify-center bg-lightprimary text-link dark:text-darklink dark:bg-dark ${currentIndex===0?"pointer-events-none opacity-50":"cursor-pointer"}`}>
                        <Icon icon={`${activeDir==="ltr"?'tabler:chevron-left':'tabler:chevron-right'}`} className="shrink-0 text-xl" />
                    </div>
                    <p className="text-base text-lightmuted dark:text-darklink">{currentIndex+1}/{Customers.length}</p>
                    <div onClick={() => swiperRef.current?.slideNext()} className={`h-8 w-8 rounded-full flex items-center justify-center bg-lightprimary text-link dark:text-darklink dark:bg-dark  ${currentIndex===(Customers.length-1)?"pointer-events-none opacity-50":"cursor-pointer"} `}>
                        <Icon icon={`${activeDir==="ltr"?'tabler:chevron-right':'tabler:chevron-left'}`} className="shrink-0 text-xl" />
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
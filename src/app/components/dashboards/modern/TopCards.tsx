"use client"
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import iconConnect from "/public/images/svgs/icon-connect.svg"
import iconSpeechBubble from "/public/images/svgs/icon-speech-bubble.svg"
import iconFavorites from "/public/images/svgs/icon-favorites.svg"
import iconMailbox from "/public/images/svgs/icon-mailbox.svg"
import iconBriefcase from "/public/images/svgs/icon-briefcase.svg"
import iconUser from "/public/images/svgs/icon-user-male.svg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const TopCards = () => {
    
    const TopCardInfo = [
        {
            key:"card1",
            title:"Reports",
            desc:"59",
            img:iconConnect,
            bgcolor:"bg-lightprimary dark:bg-lightprimary ",
            textclr:"text-primary dark:text-primary"
        },
        {
            key:"card2",
            title:"Payroll",
            desc:"$96k",
            img:iconSpeechBubble,
            bgcolor:"bg-lightsuccess dark:bg-lightsuccess",
            textclr:"text-success dark:text-success"
        },
        {
            key:"card3",
            title:"Events",
            desc:"696",
            img:iconFavorites,
            bgcolor:"bg-lighterror dark:bg-lighterror",
            textclr:"text-error dark:text-error"
        },
        {
            key:"card4",
            title:"Projects",
            desc:"356",
            img:iconMailbox,
            bgcolor:"bg-lightinfo dark:bg-darkinfo",
            textclr:"text-info dark:text-info"
        },
        {
            key:"card5",
            title:"Clients",
            desc:"3,560",
            img:iconBriefcase,
            bgcolor:"bg-lightwarning dark:bg-lightwarning",
            textclr:"text-warning dark:text-warning"

        },
        {
            key:"card7",
            title:"Employees",
            desc:"96",
            img:iconUser,
            bgcolor:"bg-lightprimary dark:bg-lightprimary",
            textclr:"text-primary dark:text-primary"
        },
        {
            key:"card8",
            title:"Events",
            desc:"696",
            img:iconFavorites,
            bgcolor:"bg-lighterror dark:bg-lighterror",
            textclr:"text-error dark:text-error"
        },
    ]


    return (
        <>
          <div>
          <Swiper
        slidesPerView={6}
        spaceBetween={24}
        loop={true}
        dir="ltr"
        grabCursor={true}
        breakpoints={{
            0 : {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1030: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
     {
        TopCardInfo.map((item)=>{
            return(
                <SwiperSlide key={item.key} >
                <CardBox className={`shadow-none ${item.bgcolor} w-full`}>
                    <div className="text-center">
                        <div className="flex justify-center">
                            <Image src={item.img}
                                width="50" height="50" className="mb-3" alt="profile-image"/>
                        </div>
                        <p className={`font-semibold ${item.textclr} mb-1`}>
                            {item.title}
                        </p>
                        <h5 className={`text-lg font-semibold ${item.textclr} mb-0`}>{item.desc}</h5>
                    </div>
                </CardBox>
                </SwiperSlide>
            )
        })
     }

      </Swiper>
          </div>
        </>
    )
}
export { TopCards }
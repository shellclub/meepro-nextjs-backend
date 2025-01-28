"use client"
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import cryptoBg1 from "/public/images/crypto/c1.jpg"
import cryptoBg2 from "/public/images/crypto/c2.jpg"
import cryptoBg3 from "/public/images/crypto/c3.jpg"
import user1 from "/public/images/profile/user-1.jpg"
import user2 from "/public/images/profile/user-2.jpg"
import user3 from "/public/images/profile/user-3.jpg"
import bitcoin from "/public/images/svgs/icon-bitcoin.svg"
import etherium from "/public/images/svgs/icon-etherium.svg"
import { Icon } from "@iconify/react/dist/iconify.js"

export const FeaturedBTC = () => {
  const cryptoInvestors = [
    {
      key:"crytpoInvestor1",
      investorName:"Els Idunn",
      investorEmail:"els@email",
      crytpoIcon:bitcoin,
      featuredBg:cryptoBg1,
      quantity:'0.25BTC',
      investorProfile:user1,
      price:"$21,23,000",
      duration:"5d 16h",
      views:"2.5k"
    },
    {
      key:"crytpoInvestor2",
      investorName:"Liam William",
      investorEmail:"lian@email",
      crytpoIcon:etherium,
      featuredBg:cryptoBg2,
      quantity:'1.42 ETH',
      investorProfile:user2,
      price:"$15,000",
      duration:"3d 1h",
      views:"1.2k"
    },
    {
      key:"crytpoInvestor3",
      investorName:"John Smith",
      investorEmail:"john@email",
      crytpoIcon:etherium,
      featuredBg:cryptoBg3,
      quantity:'0.25 XRP',
      investorProfile:user3,
      price:"$61,25,000",
      duration:"2d 11h",
      views:"5.3k"
    }
  ]
    return (
<CardBox>
  <h5 className="card-title ">Featured BTCs</h5>
  <p className="card-subtitle mb-5">The top BTCs for new investors</p>
  <div className="grid grid-cols-12 gap-6">
     {
      cryptoInvestors.map((item)=>{
        return(
          <div className="lg:col-span-4 md:col-span-4 col-span-12">
          <CardBox className="p-0  transition-[scale,transform] cursor-pointer delay-200 ease-in hover:-translate-y-1 hover:scale-[1.01] shadow-none border border-border dark:border-darkborder overflow-hidden flex flex-col">
            <Image
              src={item.featuredBg}
              className="w-full h-auto"
              alt="img"
            />
            <CardBox>
              <div className="flex items-center justify-between">
                <div>
                  <h6 className="text-lg leading-4">{item.investorName}</h6>
                  <span className="">
                    {item.price}
                  </span>
                </div>
                <Image
                  src={item.investorProfile}
                  alt="user1"
                  width={35}
                  className="rounded-full"
                />
              </div>
              <div className="flex items-start justify-between mt-4">
                <span className="flex gap-1 items-center ">
                  <Icon icon="tabler:clock-hour-4" className="text-base" />
                  {item.duration}
                </span>
                <span className="flex gap-1 items-center ">
                  <Icon icon="tabler:eye" className="text-base" />
                  {item.views}
                </span>
              </div>
            </CardBox>
          </CardBox>
        </div>
        )
      })
     }
  </div>
</CardBox>

    )
}
"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import CardBox from "../../shared/CardBox"
import pepe from "/public/images/crypto/pepe-token.webp"
import apes from "/public/images/crypto/photo_2024-08-16_17.webp"
import tono from "/public/images/crypto/img-ton.webp"
import Image from "next/image"

export const TrendingCrypto = () => {
    const TrendingCryptos = [
        {
            key:"cryptocoin1",
            coin:"Pepe",
            img:pepe,
            amount:"$0.05701",
            changePercentage:"+2.1"
        },
        {
            key:"cryptocoin2",
            coin:"APES",
            img:apes,
            amount:"$0.02161",
            changePercentage:"2.56"
        },
        {
            key:"cryptocoin3",
            coin:"Tonocoin",
            img:tono,
            amount:"$4.91",
            changePercentage:"+4.5"
        }
    ]
    return (
        <CardBox>
            <div>
            <h5 className="card-title">Trending</h5>
            <p className="card-subtitle mb-5">Trending crypto coins</p>
            </div>
            <div className="flex flex-col gap-4">
            {
        TrendingCryptos.map((item)=>{
            return(
                <div className="flex items-center justify-between mt-0">
                <div className="flex items-center gap-2.5">
                 <Image src={item.img} alt="crypto-image" className="w-8 h-8 rounded-full" />
                  <h5 className="text-sm font-semibold dark:text-darklink">{item.coin}</h5>
                </div>
                 <div className="flex gap-2.5 items-center">
                 <h5 className="text-sm font-semibold">{`${item.amount}`}</h5>
                  <div className="flex items-center justify-end gap-1.5">
                     <Icon icon={`${item.changePercentage.startsWith("+")?"tabler:trending-up":"tabler:trending-down"}`} className={`text-base ${item.changePercentage.startsWith("+")?"text-success":"text-error"}`} />
                     <p className={`text-xs text-right font-semibold ${item.changePercentage.startsWith("+")?"text-success":"text-error"}`}>{`${item.changePercentage.replace("+","")}%`}</p>
                  </div>
                 </div>
               </div>
            )
        })
    }
    </div>
        </CardBox>
    )
}
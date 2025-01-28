"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import CardBox from "../../shared/CardBox"
import RyuJin from "/public/images/crypto/RyuJinBLK.webp"
import BOBOCoin from "/public/images/crypto/bobologo_200x200.webp"
import Neiro from "/public/images/crypto/img-ton.webp"
import Image from "next/image"

export const TopGainers = () => {
    const TopGainers = [
        {
            key:"cryptocoin1",
            coin:"RyuJin",
            img:RyuJin,
            amount:"$0.07167",
            changePercentage:"+20.3"
        },
        {
            key:"cryptocoin2",
            coin:"BOBO Coin",
            img:BOBOCoin,
            amount:"$0.067565",
            changePercentage:"+63.1"
        },
        {
            key:"cryptocoin3",
            coin:"Neiro on ETH",
            img:Neiro,
            amount:"$0.1549",
            changePercentage:"+22.8"
        }
    ]
    return (
        <CardBox>
            <div>
            <h5 className="card-title">Top Gainers</h5>
            <p className="card-subtitle mb-5">Today's top-performing cryptos</p>
            </div>
            <div className="flex flex-col gap-4">
            {
        TopGainers.map((item)=>{
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
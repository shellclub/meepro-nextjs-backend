import { Icon } from "@iconify/react/dist/iconify.js"
import CardBox from "../../shared/CardBox"
import paypal from "/public/images/svgs/icon-paypal2.svg"
import wallet from "/public/images/svgs/icon-wallet.svg"
import credit from "/public/images/svgs/icon-credit-card.svg"
import refund from "/public/images/svgs/icon-pie2.svg"
import Image from "next/image"
import { Button } from "flowbite-react"
import Link from "next/link"
export const PaymentGateway = () => {

     const paymentGateways = [
        {
            key:"paymentOption1",
            paymentOption:"Paypal",
            desc:"Big Brands",
            amount:"",
            paymentImg:paypal,
            color:"bg-lightprimary dark:bg-lightprimary"
        },
        {
            key:"paymentOption2",
            paymentOption:"Paypal",
            desc:"Big Brands",
            paymentImg:wallet,
            amount:"+$345",
            color:"bg-lightsuccess dark:bg-lightsuccess"
        },
        {
            key:"paymentOption3",
            paymentOption:"Credit card",
            desc:"Money reversed",
            paymentImg:credit,
            amount:"+$2,235",
            color:"bg-lightwarning dark:bg-lightwarning"
        },
        {
            key:"paymentOption4",
            paymentOption:"Refund ",
            desc:"Bill payment",
            paymentImg:refund,
            amount:"-$32",
            color:"bg-lighterror dark:bg-lighterror"
        },
     ]

    return (
<CardBox className="pb-8">
  <h5 className="card-title">Payment Gateways</h5>
  <p className="card-subtitle">Platform for income</p>
  <div className="mt-9">
    {
        paymentGateways.map((item)=>{
            return(
                <div key={item.key} className="flex items-center justify-between mb-6 last:mb-0">
                <div className="flex gap-3 items-center">
                  <div className={`${item.color} rounded-md flex items-center justify-center h-11 w-11`}>
                    <Image
                      src={item.paymentImg}
                      alt="paypal"
                      className="h-6 w-6"
                    />
                  </div>
                  <div>
                    <h6 className="text-base">{item.paymentOption}</h6>
                    <p className=" dark:text-darklink ">{item.desc}</p>
                  </div>
                </div>
                <p>{item.amount!==""?item.amount:null}</p>
              </div>
            )
        })
    }
              <Button
            color={"outlineprimary"}
            as={Link}
            href="/auth/auth1/login"
            className="w-full rounded-md mt-8"
          >
            View all transactions
          </Button>
  </div>
</CardBox>


    )
}
"use client"
import bitcoin from "/public/images/svgs/icon-white-bitcoin.svg"
import etherium from "/public/images/svgs/icon-white-etherium.svg"
import xrp from "/public/images/svgs/icon-white-xrp.svg"
import litecoin from "/public/images/svgs/icon-white-ltc.svg"
import CardBox from "../../shared/CardBox"
import Image from "next/image"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const ChartData: any = {
    series: [
      {
        name: "BTC price",
        data: [0, 150, 110, 240, 200, 200, 300, 200],
      },
    ],
    chart: {
      type: "area",
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-primary)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      color: ["var(--color-primary)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [20, 180],
    },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

const ChartData2: any = {
    series: [
      {
        name: "ETH price",
        data: [0, 250, 110, 540, 300, 100, 800, 300],
      },
    ],
    chart: {
      type: "area",
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-error)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      color: ["var(--color-error)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.8,
        stops: [100],
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
const ChartData3: any = {
    series: [
      {
        name: "LTC price",
        data: [5, 150, 180, 440, 200, 300, 400, 200],
      },
    ],
    chart: {
      type: "area",
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-success)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      color: ["var(--color-success)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [20, 180],
    },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
const ChartData4: any = {
    series: [
      {
        name: "XRP price",
        data: [0, 150, 110, 240, 200, 200, 300, 200],
      },
    ],
    chart: {
      type: "area",
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-warning)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      color: ["var(--color-warning)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [20, 180],
    },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };



const TopCryptoCards = [
    {
        key: "crypto-card1",
        iconColor: "bg-primary",
        cardBgColor: "bg-lightprimary dark:bg-lightprimary",
        cardTextColor: "text-primary",
        cryptoIcon: bitcoin,
        crypto:"BTC",
        percentChange:"+2.30%",
        priceChange:"0.1245",
        currentPrice:"$1,015.00",
        chart:ChartData,
    },
    {
        key: "crypto-card2",
        iconColor: "bg-error",
        cardBgColor: "bg-lighterror dark:bg-lighterror",
        cardTextColor: "text-error",
        cryptoIcon: etherium,
        crypto:"ETH",
        percentChange:"-3.20%",
        priceChange:"0.5620",
        currentPrice:"$2,110.00",
        chart:ChartData2,
    },
    {
        key: "crypto-card3",
        iconColor: "bg-success",
        cardBgColor: "bg-lightsuccess dark:bg-lightsuccess",
        cardTextColor: "text-success",
        cryptoIcon: xrp,
        crypto:"LTC",
        percentChange:"+3.20%",
        priceChange:"1.200",
        currentPrice:"$1,100.00",
        chart:ChartData3,
    },
    {
        key: "crypto-card4",
        iconColor: "bg-warning",
        cardBgColor: "bg-lightwarning dark:bg-lightwarning",
        cardTextColor: "text-warning",
        cryptoIcon: litecoin,
        crypto:"XRP",
        percentChange:"+2.20%",
        priceChange:"1.150",
        currentPrice:"$2,150.00",
        chart:ChartData4,
    },
]

export const CryptoCards = () => {

    return (
        <div className="col-span-12">
        <div className="grid grid-cols-12 gap-6">
            {
                TopCryptoCards.map((item) => {
                    return (
                        <div key={item.key} className="xl:col-span-3 lg:col-span-6 col-span-12" >
                        <CardBox className={`${item.cardBgColor} p-0 no-shadow overflow-hidden`}>
                         <div className="p-6 pb-5">
                         <div className="flex items-center">
                                <div className={`rounded-md ${item.iconColor} w-11 h-11 flex items-center justify-center`}>
                                    <Image
                                        src={item.cryptoIcon}
                                        className="h-6 w-6"
                                        alt="icon"
                                    />
                                </div>
                                <h6  className="mb-0 ms-3">
                                    {item.crypto}
                                </h6>
                                <div className={`ms-auto ${item.cardTextColor} flex gap-1 items-center`}>
                                    <Icon icon={`${item.percentChange.startsWith("+")?"tabler:trending-up":"tabler:trending-down"}`} className={`${item.cardTextColor} text-xl`} />
                                    <span className={`text-xs font-semibold ${item.cardTextColor}`}>{item.percentChange}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <h3 className="text-2xl">{item.priceChange}</h3>
                                <span className="font-semibold card-subtitle opacity-70">{item.currentPrice}</span>
                            </div>
                         </div>
                         <Chart
                          options={item.chart}
                          series={item.chart.series}
                          type="area"
                          height="40px"
                          width={"100%"}
                        />
                        </CardBox>
                        </div>
                    )
                })
            }
        </div>
                    
        </div>
    )
}
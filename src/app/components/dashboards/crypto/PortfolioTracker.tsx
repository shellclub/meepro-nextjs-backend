"use client"
import { Button, Select } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const PortfolioTracker = () => {
    const ChartData: any = {
        color: "#adb5bd",
        series: [
            50, 32, 15,40,26,30
        ],
        labels: ["1 BTC", "400 XRP", "6000 DOGE","3000 VET","6000 MATIC","300 ADA"],
        chart: {
            type: "donut",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '88%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7,
                        },
                        value: {
                            show: false,
                        },
                        total: {
                            show: true,
                            color: '#7C8FAC',
                            fontSize: '18px',
                            fontWeight: "600",
                            label: '$500,458',
                        },
                    },
                },
            },
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["var(--color-primary)", "var(--color-warning)", "var(--color-secondary)","var(--color-success)","var(--color-info)","var(--color-error)"],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };
    const Portfolio = [
        {
            key:"cryptocoin1",
            coin:"Bitcoin",
            symbol:"BTC",
            icon:"cryptocurrency-color:btc",
            amount:"1.357",
            changePercentage:"+2.19"
        },
        {
            key:"cryptocoin2",
            coin:"Ripple",
            symbol:"XRP",
            icon:"cryptocurrency-color:xrp",
            amount:"400",
            changePercentage:"+3.19"
        },
        {
            key:"cryptocoin3",
            coin:"Doge",
            symbol:"DOGE",
            icon:"cryptocurrency-color:doge",
            amount:"6000",
            changePercentage:"+10.24"
        },
        {
            key:"cryptocoin4",
            coin:"Vechain",
            symbol:"VET",
            icon:"cryptocurrency-color:vet",
            amount:"3000",
            changePercentage:"+5.89"
        },
        {
            key:"cryptocoin5",
            coin:"Polygon",
            symbol:"MATIC",
            icon:"cryptocurrency-color:matic",
            amount:"6500",
            changePercentage:"+2.87"
        },
        {
            key:"cryptocoin6",
            coin:"Cardano",
            symbol:"ADA",
            icon:"logos:cardano-icon",
            amount:"6500",
            changePercentage:"-9.87"
        },
    ]
    return (
        <>
<CardBox className="p-0">
 <div className="p-6 pb-0">
 <h5 className="card-title">Portfolio Tracker</h5>
  <p className="card-subtitle mb-5">Track your crypto portfolio</p>
  <div className="mb-4">
  <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="donut"
                 height="200px"
                 width={"100%"}
               />
  </div>
 </div>
  <SimpleBar style={{ maxHeight: 230 }} className="p-6 pt-0">
  <div className="flex flex-col gap-4">
    {
        Portfolio.map((item)=>{
            return(
                <div className="flex items-center justify-between mt-0">
                <div className="flex items-center gap-2.5">
                 <Icon icon={item.icon} className="text-3xl" />
                  <div className="flex flex-col gap-0.5">
                  <h5 className="text-sm font-semibold">{item.coin}</h5>
                  <p className="text-xs">{item.symbol}</p>
                  </div>
                </div>
                 <div>
                 <h5 className="text-[13px] font-medium">{`${item.amount} ${item.symbol}`}</h5>
                  <div className="flex items-center justify-end gap-1.5">
                     <Icon icon={`${item.changePercentage.startsWith("+")?"tabler:trending-up":"tabler:trending-down"}`} className={`text-base ${item.changePercentage.startsWith("+")?"text-success":"text-error"}`} />
                     <p className={`text-xs text-right ${item.changePercentage.startsWith("+")?"text-success":"text-error"}`}>{`${item.changePercentage}%`}</p>
                  </div>
                 </div>
               </div>
            )
        })
    }
  </div>
  </SimpleBar>
</CardBox>

        </>
    )
}
export { PortfolioTracker }
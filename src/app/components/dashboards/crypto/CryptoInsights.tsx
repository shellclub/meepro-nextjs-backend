"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const CryptoInsights = () => {
    const ChartData: any = {
        series: [
          {
            name: "Marketcap",
            data: [25,44, 20, 48, 36,47,45,34,28,33,45,56,60,64,66,60,55,52,51,45,40,34,33,30,45,55,56,45,44,40],
          },
        ],
        chart: {
          type: "area",
          height: 80,
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
          color: ["var(--color-primary)"],
          gradient: {
            shadeIntensity: 0,
            inverseColors: false,
            opacityFrom: 0,
            opacityTo: 0,
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
    const ChartData2: any = {
        series: [
          {
            name: "Volume",
            data: [20,24,40,25,34,60,45,78,80,40,36,32,28,32,34,38,,20,22,40,50,30,40,50,55],
          },
        ],
        chart: {
          type: "area",
          height: 80,
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
            opacityFrom: 0,
            opacityTo: 0,
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
    return (
        <CardBox>
    <div>
    <h5 className="card-title">Cryptomarket Insights</h5>
    <p className="card-subtitle mb-5">Current market scenario</p>
    </div>
    <div className="flex justify-between gap-10 items-center mb-6">
       <div className="flex flex-col gap-1">
         <h1 className="text-base font-semibold">$2,036,255,641,211</h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Market Cap</p>
            <div className="flex items-center justify-end gap-1.5">
                     <Icon icon="tabler:trending-down" className="text-error text-base" />
                     <p className={`text-sm text-right text-error font-semibold`}>0.2%</p>
            </div>
          </div>
       </div>
       <Chart
          options={ChartData}
          series={ChartData.series}
          type="area"
          height='50px'
          width='100%'
        />
    </div>
    <div className="flex justify-between gap-10 items-center">
       <div className="flex flex-col gap-1">
         <h1 className="text-base font-semibold">$64,768,575,453</h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">24h Trading Volume</p>
          </div>
       </div>
       <Chart
          options={ChartData2}
          series={ChartData2.series}
          type="area"
          height='50px'
          width='100%'
        />
    </div>
         
        </CardBox>
    )
}
"use client"
import { Button, Select } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyEarning = () => {
  const ChartData: any = {
    series: [
      {
        name: 'monthly earnings',
        color: "var(--color-primary)",
        data: [25, 66, 20, 40, 12, 58, 20],
    },
    ],
    chart: {
        id: "weekly-stats2",
        type: "area",
        height: 120,
        sparkline: {
            enabled: true,
        },
        group: 'sparklines',
        fontFamily: "inherit",
        foreColor: "#adb0bb",
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 0,
            inverseColors: false,
            opacityFrom: 0.1,
            opacityTo: 0,
            stops: [20, 180],
        },
    },

    markers: {
        size: 0,
    },
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: true,
            position: "right",
        },
        x: {
            show: false,
        },
    },
};
    return (
        <>
            <CardBox className="p-0 mt-6" >
                <div className="p-30">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-8 md:col-span-8  col-span-8">
                            <h5 className="card-title mb-4">Monthly Earnings</h5>
                            <h4 className="text-xl mb-3">$6,820</h4>
                            <div className="flex items-center mb-3 gap-2">
                                <span className="rounded-full p-1 bg-lighterror dark:bg-darkerror flex items-center justify-center ">
                                    <Icon icon='tabler:arrow-down-right' className="text-error" />
                                </span>
                                <p className="text-dark dark:text-darklink  mb-0">+9%</p>
                                <p className=" dark:text-darklink mb-0 ">last year</p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-4 col-span-4">
                            <div className="flex justify-end">
                                <div className="text-white bg-secondary rounded-full h-11 w-11 flex items-center justify-center">
                                    <Icon icon='tabler:currency-dollar' className="text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="area"
                 height="60px"
                 width={"100%"}
               />
            </CardBox>
        </>
    )
}
export { MonthlyEarning }
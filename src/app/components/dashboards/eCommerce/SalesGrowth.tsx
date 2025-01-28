"use client"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import iconBar from "/public/images/svgs/icon-bar.svg"
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

export const SalesGrowth = () => {

    const ChartData: any = {
        series: [
            {
                colors: ["var(--color-primary)"],
                data: [0, 10, 10, 10, 35, 45, 30, 30, 30, 50, 52, 30, 25, 45, 50, 80, 60, 65]
            },
        ],
        chart: {
            id: "growth",
            type: "area",
            height: 25,
            sparkline: {
                enabled: true,
            },
            group: "growth",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            colors: ["var(--color-secondary)"],
            opacity: 0,
            type: "gradient",
            gradient: {
              shadeIntensity: 0,
              inverseColors: false,
              opacityFrom: 0,
              opacityTo: 0,
              stops: [20, 280],
            },
        },

        markers: {
            size: 0,
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        <>
            <CardBox>
                <div className="h-10 w-10 bg-lightprimary dark:bg-lightprimary rounded-md flex justify-center items-center">
                    <Image
                        src={iconBar}
                        alt="icon-cart"
                        className="h-6 w-6"
                    />
                </div>
                <div className=" rounded-bars my-4">
                    <Chart
                        options={ChartData}
                        series={ChartData.series}
                        type="area"
                        width={"100%"}
                        height={"35px"}
                    />
                </div>
                <div className="">
                    <h3 className="flex items-start text-fs_21 mb-1">
                        $16.5k
                        <Icon icon="tabler:arrow-up-right" className='text-base  text-success' />
                    </h3>
                    <p className=" mt-1">Sales</p>
                </div>
            </CardBox>


        </>
    )
}

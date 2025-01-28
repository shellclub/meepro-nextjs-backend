"use client"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import iconCart from "/public/images/svgs/icon-cart.svg"
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

export const IncrementedSales = () => {

    const ChartData: any = {
        series: [
            {
                name: "",
                data: [100, 60, 35, 90, 35, 100]
            },
        ],
        chart: {
            type: 'bar',
            height: 25,
            fontFamily: "inherit",
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            width: "100%",
            offsetX: -24

        },
        colors: ["var(--color-primary)"],
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '100%',
                borderRadius: 4,
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 5,
            colors: ['rgba(0,0,0,0.01)']
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        axisBorder: {
            show: false
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            }
        },
    };

    return (
        <>
            <CardBox>
                <div className="h-10 w-10 bg-lightprimary dark:bg-lightprimary rounded-md flex justify-center items-center">
                    <Image
                        src={iconCart}
                        alt="icon-cart"
                        className="h-6 w-6"
                    />
                </div>
                <div className="-me-11 rtl:-me-0 rtl:-ms-11 rounded-bars my-4">
                    <Chart
                        options={ChartData}
                        series={ChartData.series}
                        type="bar"
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

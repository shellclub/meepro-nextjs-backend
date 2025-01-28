"use client"
import { Button, Select } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueUpdate = () => {
    const ChartData: any = {
        series: [
            {
                name: "Footware",
                data: [1.5, 2.7, 2.2, 3.6, 1.5],
            },
            {
                name: "Fashionware",
                data: [-2.8, -1.1, -2.5, -1.5, -1.2],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 265,
            stacked: true,
            offsetX: -20
        },
        colors: ["var(--color-primary)", "var(--color-secondary)"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: "70%",
                columnWidth: "20%",
                borderRadius: [5],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        yaxis: {
            min: -4,
            max: 4,
            tickAmount: 4,
        },
        xaxis: {
            categories: [
                "Jan",
                "Fab",
                "Mar",
                "Apr",
                "May",
            ],
            show: false,
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
        },
        tooltip: {
            theme: "dark",
        },
    };
    return (
        <>
            <CardBox>
                <h5 className="card-title">Revenue Updates</h5>
                <p className="card-subtitle mb-5">Overview of profit</p>
                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-2">
                        <Icon icon="tabler:point-filled" className="text-primary text-lg" />
                        <p className="text-xs  dark:text-darklink">Footware</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon icon="tabler:point-filled" className="text-secondary text-lg" />
                        <p className="text-xs  dark:text-darklink">Fashionware</p>
                    </div>
                </div>
                <div className="-me-12 rtl:-me-0 rtl:-ms-12">
                <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="bar"
                 height="272px"
                 width={"100%"}
               />
                </div>
            </CardBox>
        </>
    )
}
export { RevenueUpdate }
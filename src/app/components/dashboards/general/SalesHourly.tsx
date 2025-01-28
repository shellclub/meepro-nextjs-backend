"use client"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from "../../shared/CardBox"
import { Button } from "flowbite-react";

export const SalesHourly = () => {
    const ChartData: any = {
        series: [
            {
                name: "Hours",
                data: [22.5, 34.3, 24.7, 28.5, 11.4, 30.6, 44.5],
            },
        ],
        chart: {
            height: 350,
            type: "area",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 5,
                color: "#000",
                opacity: 0.2,
            },
        },
        colors: ["#615dff"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["#615dff"],
            width: 2,
        },
        fill: {
            type: "gradient",
        },
        markers: {
            show: false,
        },
        grid: {
            show: false,
        },
        yaxis: {
            show: false,
        },
        xaxis: {
            type: "category",
            categories: ["Su", "Mo", "Tu", "Wed", "Th", "Fr", "Sa"],

            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            theme: "dark",
        },
    };
    return (
        <>
         <CardBox className="bg-lightprimary dark:bg-lightprimary p-0" >
            <div className="flex justify-between items-center p-6">
             <div>
             <h4 className="card-title">Sales Hourly</h4>
            <p className="card-subtitle flex gap-2 items-center">
                <Icon icon="tabler:point-filled" className="text-primary text-xl" />Your data updates every 3 hours
            </p>
             </div>
             <Button color={"primary"} className="rounded-md" >
                <Icon icon="tabler:download" className="text-xl" />
             </Button>
            </div>
            <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="area"
                 height="355px"
                 width={"100%"}
               />
         </CardBox>
        </>
    )
}
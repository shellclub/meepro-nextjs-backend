"use client"
import { Button, Select } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const YearlySales = () => {
    const ChartData: any = {
        series: [
            {
                name: "Employee Salary",
                data: [20, 15, 30, 25, 10, 15, 20],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            height: 260,
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        colors: [
            "var(--color-lightprimary)",
            "var(--color-lightprimary)",
            "var(--color-primary)",
            "var(--color-lightprimary)",
            "var(--color-lightprimary)",
            "var(--color-lightprimary)",
            "var(--color-lightprimary)",
        ],
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: "55%",
                distributed: true,
                endingShape: "rounded",

            },
        },

        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            categories: [["Apr"], ["May"], ["June"], ["July"], ["Aug"], ["Sept"], ["Oct"]],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            theme: "dark",
        },
    };
    return (
        <>
            <CardBox className="p-0">
                <div className="p-6 pb-0">
                <h5 className="card-title">Yearly Sales</h5>
                <p className="card-subtitle">Every month</p>
                </div>
                <div className="-ml-[11px]">
                    <div className="mb-0 pb-6">
                    <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="bar"
                 height="285px"
                 width={"100%"}
               />
                </div>
                </div>
                <div className="flex items-center justify-between p-6 pt-0">
                    <div className="flex gap-3 items-center">
                        <div className="bg-lightprimary dark:bg-darkprimary h-10 w-10 flex justify-center items-center rounded-md">
                            <Icon icon="tabler:grid-dots" className="text-primary text-xl" />
                        </div>
                        <div>
                            <p className="dark:text-darklink ">Total Sales</p>
                            <h6 className="text-base">$36,358</h6>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="bg-lightgray dark:bg-darkgray h-10 w-10 flex justify-center items-center rounded-md">
                            <Icon icon="tabler:grid-dots" className="opacity-70 dark:opacity-100 text-xl" />
                        </div>
                        <div>
                            <p className="dark:text-darklink ">Expenses</p>
                            <h6 className="text-base">$5,296</h6>
                        </div>
                    </div>
                </div>


            </CardBox>
        </>
    )
}
export { YearlySales }
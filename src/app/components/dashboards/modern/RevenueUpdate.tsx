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
                name: "Eanings this month",
                data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0],
              },
              {
                name: "Expense this month",
                data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8],
              },
        ],
        chart: {
            toolbar: {
              show: false,
            },
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 310,
            stacked: true,
            width: "100%",
            offsetX: -20,
          },
          colors: ["var(--color-primary)", "var(--color-secondary)"],
          plotOptions: {
            bar: {
              horizontal: false,
              barHeight: "60%",
              columnWidth: "20%",
              borderRadius: [6],
              borderRadiusApplication: "end",
              borderRadiusWhenStacked: "all",
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          grid: {
            borderColor: "rgba(0,0,0,0.1)",
            strokeDashArray: 3,
            xaxis: {
              lines: {
                show: false,
              },
            },
          },
          
          yaxis: {
            min: -4,
            max: 4,
            tickAmount: 4,
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            categories: [
              "16/08",
              "17/08",
              "18/08",
              "19/08",
              "20/08",
              "21/08",
            ],
          },
          tooltip: {
            theme: "dark",
          },
      };
    return (
        <>
            <CardBox>
                <>
                    <div className="sm:flex items-center justify-between mb-6">
                        <div>
                            <h5 className="card-title">Revenue Updates</h5>
                            <p className="card-subtitle">Overview of profit</p>
                        </div>
                        <div className="sm:mt-0 mt-4">
                            <Select className="form-control select-md" >
                                <option>March 2024</option>
                                <option>April 2024</option>
                                <option>May 2024</option>
                                <option>June 2024</option>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-8 md:col-span-8 sm:col-span-12 col-span-12">
                            <div className="-me-6">
                            <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="bar"
                 height="316px"
                 width={"100%"}
               />
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-4 sm:col-span-12 col-span-12">
                            <div className="flex items-center gap-4 pt-6">
                                <div className="bg-lightprimary dark:bg-darkprimary shrink-0 h-10 w-10 flex justify-center items-center rounded-md">
                                    <Icon icon="tabler:grid-dots" className="text-xl text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-2xl text-dark dark:text-white font-semibold">
                                        $63,489.50
                                    </h4>
                                    <p>Total Earnings</p>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-3 pt-9">
                                <i className="h-2 w-2 rounded-full bg-primary" />
                                <div>
                                    <p>Earnings this month</p>
                                    <h6 className="text-lg">$48,820</h6>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-3 pt-5">
                                <i className="h-2 w-2  rounded-full bg-secondary" />
                                <div>
                                    <p>Expense this month</p>
                                    <h6 className="text-lg">$26,498</h6>
                                </div>
                            </div>
                            <Button color="primary" className="mt-7 rounded-md capitalize w-full" >
                            view full report
                            </Button>
                        </div>
                    </div>
                </>

            </CardBox>
        </>
    )
}
export { RevenueUpdate }
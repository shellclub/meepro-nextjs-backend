"use client"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import CardBox from "../../shared/CardBox"
import Image from "next/image";
import user1 from "/public/images/profile/user-1.jpg";
import user2 from "/public/images/profile/user-2.jpg";
import user3 from "/public/images/profile/user-3.jpg";
import user4 from "/public/images/profile/user-4.jpg";
import { Button, Tooltip } from "flowbite-react";

export const TopPerformers = () => {
    const ChartData: any = {
        series: [45, 50, 60, 70],
        chart: {
            type: "radialBar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 305,
        },
        colors: ['#615dff', '#fa896b', '#ffae1f', 'var(--color-secondary)'],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "50%"
                },
                dataLabels: {
                    total: {
                        show: true,
                        label: 'Team'
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#615dff"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round",
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D'],
        tooltip: {
            enabled: true,
            theme: "dark",
            fillSeriesColor: false,
        },
      };
    return (
        <CardBox className="p-0">
            <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h6 className="card-title">Top Performers</h6>
                    <p className="card-subtitle">How to measure team performance</p>
                </div>
                 <div className="flex">
                    <Tooltip content="John Doe">
                        <Image src={user1} alt="user-img" className="rounded-full border-2 border-white dark:border-dark w-9 h-9 relative -right-[13px] cursor-pointer" />
                    </Tooltip>
                    <Tooltip content="Mark Smith">
                    <Image src={user2} alt="user-img" className="rounded-full border-2 relative border-white dark:border-dark w-9 h-9 left-[6px] cursor-pointer" />
                    </Tooltip>
                    <Tooltip content="Johnathan Leo">
                    <Image src={user3} alt="user-img" className="rounded-full border-2 border-white dark:border-dark w-9 h-9 relative z-10 cursor-pointer" />
                    </Tooltip>
                 </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mb-4">
                <div className="lg:col-span-6 col-span-12 py-4 px-3 rounded-md border border-border dark:border-darkborder">
                    <div className="flex items-center gap-3">
                    <div className="flex">
                    <Tooltip content="John Doe">
                        <Image src={user1} alt="user-img" className="rounded-full border-2 border-white dark:border-dark w-8 h-8 relative cursor-pointer" />
                    </Tooltip>
                    <Tooltip content="Mark Smith">
                    <Image src={user2} alt="user-img" className="rounded-full border-2 relative border-white dark:border-dark w-8 h-8 -left-[6px] cursor-pointer" />
                    </Tooltip>
                   </div>
                   <div>
                   <h6 className="text-sm leading-none mb-1 font-medium">
                       Monster Dashboard
                       </h6>
                       <div className="flex items-center gap-4">
                        <div className="text-xs font-normal">46% </div>
                        <div className="text-xs font-normal">Due in 3 days</div>
                       </div>
                   </div>
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-12 py-4 px-3 rounded-md border border-border dark:border-darkborder">
                    <div className="flex items-center gap-3">
                    <div className="flex">
                    <Tooltip content="John Doe">
                        <Image src={user3} alt="user-img" className="rounded-full border-2 border-white dark:border-dark w-8 h-8 relative cursor-pointer" />
                    </Tooltip>
                    <Tooltip content="Mark Smith">
                    <Image src={user4} alt="user-img" className="rounded-full border-2 relative border-white dark:border-dark w-8 h-8 -left-[6px] cursor-pointer" />
                    </Tooltip>
                   </div>
                   <div>
                   <h6 className="text-sm leading-none mb-1 font-medium">
                   Xtreme Dashboard
                       </h6>
                       <div className="flex items-center gap-4">
                        <div className="text-xs font-normal">87% </div>
                        <div className="text-xs font-normal">Due in 7 days</div>
                       </div>
                   </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                    <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="radialBar"
                 height="305px"
                 width={"100%"}
               />
                    </div>
            <p className="mb-4 text-center" >Your team performance is 5% better this week.</p>
            <Button color={"primary"} className="rounded-md w-fit mx-auto">View Details</Button>
            </div>
            <div className="p-4 flex items-center justify-center gap-4 border-t border-border dark:border-darkborder">
                <div className="flex items-center gap-2">
                    <Icon icon={"tabler:point-filled"} className="text-xl text-primary"/>
                    <p>Completed 124</p>
                </div>
                <div className="flex items-center gap-2">
                    <Icon icon={"tabler:point-filled"} className="text-xl text-error"/>
                    <p>Percentage 86%</p>
                </div>
            </div>
        </CardBox>
    )
}
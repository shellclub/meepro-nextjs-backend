"use client"
import Image from "next/image"
import user1 from "/public/images/profile/user-1.jpg"
import { Badge, Select } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const FinancialIncomeCard = () => {
    const ChartData: any = {
        series: [
            {
                name: "Selling Product",
                data: [28, 120, 36, 90, 38, 85,],
            },
            {
                name: "Followers",
                data: [50, 100, 65, 140, 32, 60],
            },
            {
                name: "Campaign",
                data: [100, 50, 130, 70, 135, 80],
            },
        ],
        chart: {
            toolbar: {
                show: false,
            },
            type: "line",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 200,
            offsetX: -10
        },
        colors: ["var(--color-error)", "#615dff", "var(--color-success)"],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        xaxis: {
            categories: [
                "1-10 Aug",
                "11-20 Aug",
                "21-30 Aug",
                "1-10 Sept",
                "11-20 Sept",
                "21-30 Sept",
            ],
        },
        yaxis: {
            tickAmount: 4,
        },
        tooltip: {
            theme: "dark",
        },
      };
      const ProfileActivity = [
        {
            key:"activity1",
            title:"Selling Product",
            quantity:"$3,350,00",
            color:"text-error"
        },
        {
            key:"activity2",
            title:"Followers",
            quantity:"1,500+",
            color:"text-primary"
        },
        {
            key:"activity3",
            title:"Campaign",
            quantity:"560",
            color:"text-success"
        },
      ]
    return (
        <>
          <div className="flex gap-5 mb-6 items-center">
            <div className="p-1 shrink-0 border-primary border-2 h-[60px] w-[60px] box-content rounded-full relative">
            <Image src={user1} alt="user-image" className="rounded-full" />
              <Badge color={"primary"} className="rounded-full text-sm absolute -top-[18px] -end-[10px]" >3</Badge>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="text-2xl">Mathew Anderson</h5>
                <p className="text-sm" >Cheers, and happy activities - July 6 2024</p>
            </div>
          </div>
          <CardBox className="p-0">
                   <div className="p-6">
                   <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-4 col-span-12 flex">
                    <div className="flex flex-col justify-between">
                     <div>
                     <h5 className="card-title">Financial Income</h5>
                     <p className="card-subtitle font-normal">Aug 1, 2024 - Nov 1, 2024</p>
                     </div>
                     <div className="flex flex-col gap-4">
                        <p className="text-sm">
                        Total Revenue <span className="text-success">+9.78%</span>
                        </p>
                        <h5 className="text-fs_28">$8,240,00</h5>
                        <p className="text-sm">
                        Increased 15% from last month
                        </p>
                     </div>
                    </div>
                </div>
                 <div className="lg:col-span-8 col-span-12">
                    <div className="flex md:gap-0 gap-4 flex-wrap items-center justify-between">
                        <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-medium" >Product Condition</h3>
                        <div className="flex gap-3 items-center">
                            <h3 className="text-fs_28" >75%</h3>
                            <Badge color={"primary"} className="rounded-md flex items-center py-1">
                               <Icon icon="tabler:chevron-down" className="text-lg shrink-0 inline-block" />
                               <span className="text-sm ms-1" >2.8%</span>
                            </Badge>
                        </div>
                        </div>
                        <Select className="form-control select-md self-start" >
                                <option>March 2024</option>
                                <option>April 2024</option>
                                <option>May 2024</option>
                                <option>June 2024</option>
                         </Select>
                    </div>
                    <div className="mt-4">
                    <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="line"
                 height="200px"
                 width={"100%"}
               />
                    </div>
                 </div>
            </div>
                   </div>
            <div className="grid grid-cols-12 border-t border-border dark:border-darkborder">
              {
                ProfileActivity.map((item)=>{
                    return (
                        <div className="lg:col-span-4 col-span-12 lg:border-r lg:border-b-0 border-b lg:last:border-r-0 last:border-b-0 border-border dark:border-darkborder" key={item.key}>
                        <div className="p-6">
                        <div className="flex gap-1 items-center">
                           <Icon icon="tabler:point-filled" className={`${item.color} text-xl`} />
                           <span className={`text-base ${item.color}`} >{item.title}</span>
                           </div>
                           <h3 className="text-2xl font-medium mt-1">{item.quantity}</h3>
                        </div>
                       </div>
                    )
                })
              }
            </div>
          </CardBox>
        </>
    )
}
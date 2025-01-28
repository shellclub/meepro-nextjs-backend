"use client"
import { Button, Select } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
import mastercard from "/public/images/svgs/icon-master-card-2.svg"
import Image from "next/image";
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
      id: "monthly-earning",
      type: "area",
      height: 56,
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
        opacityFrom: 0.10,
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
<CardBox className="mt-6">
  <div className="grid grid-cols-12 gap-6">
    <div className="lg:col-span-8 md:col-span-8  col-span-8">
      <h5 className="card-title mb-4">Monthly Earnings</h5>
      <div className="flex items-center mb-3 gap-2">
        <h4 className="text-xl">$6,820</h4>
        <span className="rounded-full p-1 bg-lightsuccess dark:bg-lightsuccess flex items-center justify-center ">
        <Icon icon="tabler:arrow-up-left" className="text-success" />
         </span>
        <p className="text-dark dark:text-darklink  mb-0">+9%</p>
      </div>
    </div>
    <div className="lg:col-span-4 md:col-span-4 col-span-4">
      <div className="flex justify-end">
        <div className="text-white bg-lightprimary dark:bg-lightprimary rounded-md h-11 w-11 flex items-center justify-center">
          <Image
            src={mastercard}
            alt="master-card"
            className="h-6 w-6"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="mt-1">
  <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="area"
                 height="59px"
                 width={"100%"}
               />
  </div>
</CardBox>

        </>
    )
}
export { MonthlyEarning }
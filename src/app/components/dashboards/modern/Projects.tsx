"use client"
import { Button, Select } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Projects = () => {
    const ChartData: any = {
        series: [
            {
                name: "",
                data: [4, 10, 9, 7, 9, 10, 11, 8, 10, 9],
              },
        ],
        chart: {
            type: "bar",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
            height: 60,
            offsetX:-10,
      
            resize: true,
            barColor: "#fff",
            toolbar: {
              show: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          colors: ["var(--color-primary)"],
          grid: {
            show: false,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              startingShape: "flat",
              columnWidth: "60%",
              barHeight: "20%",
              endingShape: "rounded",
              distributed: true,
              borderRadius: 2,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2.5,
            colors: ["rgba(0,0,0,0.01)"],
          },
          xaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          axisBorder: {
            show: false,
          },
          fill: {
            opacity: 1,
          },
          tooltip: {
            theme: "dark",
            style: {
              fontSize: "12px",
            },
            x: {
              show: false,
            },
          },
    };
    return (
        <>
            <CardBox>
  <p>Projects</p>
  <h4 className="my-2 text-2xl">78,298</h4>
  <div className="flex items-center mb-3 gap-2">
    <span className="rounded-full p-1 bg-lightsuccess dark:bg-darksuccess flex items-center justify-center ">
      <Icon icon="tabler:arrow-up-left" className="text-success" />
    </span>
    <p className="text-dark dark:text-darklink  mb-0">+9%</p>
  </div>
  <div className="-me-4">
  <Chart options={ChartData}
                 series={ChartData.series}
                 type="bar"
                 height="70px"
                 width={"100%"}
               />
  </div>

            </CardBox>
        </>
    )
}
export { Projects }
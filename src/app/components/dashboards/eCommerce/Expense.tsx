"use client"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Expense = () => {
    const ChartData: any = {
        series: [
            60, 25, 15
        ],
        labels: ["", "", ""],
        chart: {
            height: 110,
            type: "donut",
            fontFamily: "inherit",
            foreColor: "#c6d1e9",
        },
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
        colors: ["var(--color-primary)", "var(--color-secondary)", "var(--color-warning)"],
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },

        stroke: {
            show: false,
        },

        plotOptions: {
            pie: {
                donut: {
                    size: "70%",
                    background: "none",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "18px",
                            color: undefined,
                            offsetY: -10,
                        },
                        value: {
                            show: false,
                            color: "#98aab4",
                        },
                    },
                },
            },
        },
    };
    return (
        <>
<CardBox>
  <h4 className="text-fs_21 mb-2">$10,230</h4>
  <p>Expense</p>
  <div className="mt-4">
  <Chart
                 options={ChartData}
                 series={ChartData.series}
                 type="donut"
                 width={"100%"}
                 height={"108px"}
               />
  </div>
</CardBox>

        </>
    )
}
export { Expense }
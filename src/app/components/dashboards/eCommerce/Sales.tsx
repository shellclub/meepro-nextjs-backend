"use client"
import CardBox from "../../shared/CardBox"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Sales = () => {

    const ChartData: any = {
        series: [
            {
                name: 'PRODUCT A',
                data: [11, 17, 15, 15, 21, 14,]
              }, {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27,]
              }, {
                name: 'PRODUCT C',
                data: [30, 45, 31, 37, 17, 33,]
              }
        ],
        colors: ["var(--color-primary)", "var(--color-secondary)", "var(--color-lightinfo)"],
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                borderRadius: [3],
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'around',
            }
        },
        dataLabels: {
            enabled: false
        },
        chart: {
            type: 'bar',
            height: 100,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            },
                        sparkline: {
                enabled: true
            }
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
        legend: {
            show: false,
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
  <h4 className="text-fs_21 mb-2">$65,432</h4>
  <p className="mb-1">Sales</p>
  <div className="rounded-bars -ms-3 -me-2">
          <Chart
            options={ChartData}
            series={ChartData.series}
            type="bar"
            height={'100px'}
          />
        </div>
</CardBox>

        </>
    )
}
export { Sales }
"use client"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Badge, Select, Table } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import product1 from "/public/images/products/product-1.jpg";
import product2 from "/public/images/products/product-2.jpg";
import product3 from "/public/images/products/product-3.jpg";
import product4 from "/public/images/products/product-4.jpg";
import Image from "next/image";

export const TopPerformer = () => {
    const PerformersData = [
        {
            key:"performerData1",
            productImg:product1,
            productname:"Minecraf App",
            creator:"Jason Roy",
            progress:"73.2%",
            priority:"Low",
            color:"lightprimary",
            budget:"3.9k",
            isPerformedChart:false,
        },
        {
            key:"performerData2",
            productImg:product2,
            productname:"Web App Project",
            creator:"Mathew Flintoff",
            progress:"56.8%",
            priority:"Medium",
            color:"lightwarning",
            budget:"24.5k",
            isPerformedChart:true,
        },
        {
            key:"performerData3",
            productImg:product3,
            productname:"Nirav Joshi",
            creator:"Web Manager",
            progress:"25%",
            priority:"High",
            color:"lightwarning",
            budget:"12.8k",
            isPerformedChart:false,
        },
        {
            key:"performerData4",
            productImg:product4,
            productname:"Yuvraj Sheth",
            creator:"Project Manager",
            progress:"96.3%",
            priority:"Low",
            color:"lightsuccess",
            budget:"4.8k",
            isPerformedChart:true,
        },
    ]
    const ChartData: any = {
        series: [
            {
                color: "var(--color-primary)",
                data: [25, 66, 20, 40, 12, 58, 20],
            },
        ],
        chart: {
            id: "table-chart-1",
            type: "area",
            width: 76,
            height: 18,
            sparkline: {
                enabled: true,
            },
            group: "table-chart-1",
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
                opacityFrom: 0.12,
                opacityTo: 0,
                stops: [20, 180],
            },
        },


        markers: {
            size: 0,
        },
        tooltip: {
            enabled: false,
        },
      };
    const ChartData2: any = {
        series: [
            {
                color: "#DFE5EF",
                data: [25, 66, 20, 40, 12, 58, 20],
            },
        ],
        chart: {
            id: "#table-chart-2",
            type: "area",
            width: 76,
            height: 18,
            sparkline: {
                enabled: true,
            },
            group: "#table-chart-2",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            colors: ["#f3feff"],
            type: "solid",
            opacity: 0.05,
        },
        markers: {
            size: 0,
        },
        tooltip: {
            enabled: false,
        },
      };
    return (
        <CardBox>
            <div className="sm:flex items-center justify-between mb-6">
                <div>
                    <h5 className="card-title">Top Performers</h5>
                    <p className="card-subtitle">Best employees</p>
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
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-x-auto">
         <Table>
            <Table.Head>
              <Table.HeadCell className="text-sm dark:text-white font-semibold ps-0">
                Assigned
              </Table.HeadCell>
              <Table.HeadCell className="text-sm dark:text-white font-semibold">
                Progress
              </Table.HeadCell>
              <Table.HeadCell className="text-sm dark:text-white font-semibold">
                Priority
              </Table.HeadCell>
              <Table.HeadCell className="text-sm dark:text-white font-semibold">
                Budget
              </Table.HeadCell>
              <Table.HeadCell className="text-sm dark:text-white font-semibold">
                Chart
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder ">
              {PerformersData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap ps-0 md:min-w-auto min-w-[200px]">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.productImg}
                        alt="icon"
                        className="h-12 w-12 rounded-md"
                      />
                      <div>
                      <h6 className="text-sm font-semibold mb-1">{item.productname}</h6>
                      <p className="text-xs font-normal text-bodytext dark:text-darklink">{item.creator}</p>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="text-link dark:text-darklink text-sm w-fit">
                      {item.progress}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <Badge color={`${item.color}`} className="text-sm rounded-md py-1.1 px-2 w-11/12 justify-center" >{item.priority}</Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="dark:text-darklink text-link text-sm">
                      {item.budget}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    {
                        item.isPerformedChart?  <Chart
                        options={ChartData}
                        series={ChartData.series}
                        type="area"
                        height="18px"
                        width={"100px"}
                      />:            <Chart
                      options={ChartData2}
                      series={ChartData2.series}
                      type="area"
                      height="18px"
                      width={"100px"}
                    />
                    }
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
                        </div>
                    </div>
                </div>
            </div>
        </CardBox>

    )
}
"use client"
import { Badge, Button, Popover, Select, Table } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import Image from "next/image";
import bitcoin from "/public/images/svgs/icon-bitcoin.svg"
import etherium from "/public/images/crypto/ethereum-coin.webp"
import tether from "/public/images/crypto/Tether.webp"
import bnb from "/public/images/crypto/bnb-icon2_2x.webp"
import solana from "/public/images/crypto/solana.webp"
import usdc from "/public/images/crypto/usdc.webp"
import xrp from "/public/images/crypto/xrp-symbol-white-128.webp"
import { Icon } from "@iconify/react/dist/iconify.js";
import xIcon from "/public/images/crypto/x-icon.png"
import bingIcon from "/public/images/crypto/bingx.png"
import coingecko from "/public/images/crypto/gecko-65456030ba03df0f83f96e18d0c8449485c1a61dbdeeb733ca69164982489d0e.svg"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const CryptoPrices = () => {
  const ChartData: any = {
    series: [
      {
        name: "Marketcap",
        data: [25, 44, 20, 38, 36, 47, 45, 34, 28, 33, 45, 56, 45, 56, 67, 45, 34, 56, 57, 75, 45, 35, 45, 6, 7, 34, 56, 32],
      },
    ],
    chart: {
      type: "area",
      height: 80,
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-error)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      color: ["var(--color-primary)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.8,
        stops: [100],
      },
    },
    tooltip: {
      enabled: false,
    },
  };
  const ChartData2: any = {
    series: [
      {
        name: "Volume",
        data: [20, 24, 40, 25, 34, 60, 45, 78, 80, 40, 36, 32, 28, 32, 34, 38, , 20, 22, 40, 50, 30, 40, 50, 55],
      },
    ],
    chart: {
      type: "area",
      height: 80,
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-primary)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      color: ["var(--color-primary)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.8,
        stops: [100],
      },
    },

  };
  const cryptoData = [
    {
      key: "coin1",
      coinImg: bitcoin,
      coin: "Bitcoin",
      symbol: "BTC",
      price: "$55,378.32",
      hourChange: "+0.3%",
      dailyChange: "+1.7%",
      weeklyChange: "4.7%",
      dailyVolume: "$21,799,326,328",
      marketCap: "$1,086,767,430,703",
      chart: ChartData
    },
    {
      key: "coin2",
      coinImg: etherium,
      coin: "Etherium",
      symbol: "ETH",
      price: "$2,334.17",
      hourChange: "+0.5%",
      dailyChange: "+1.2%",
      weeklyChange: "6.0%",
      dailyVolume: "$11,110,444,091",
      marketCap: "$277,006,253,231",
      chart: ChartData2
    },
    {
      key: "coin3",
      coinImg: tether,
      coin: "Tether",
      symbol: "USDT",
      price: "$0.999",
      hourChange: "+0.1%",
      dailyChange: "0.3%",
      weeklyChange: "+0.1%",
      dailyVolume: "$32,832,550,453",
      marketCap: "$118,051,126,495",
      chart: ChartData
    },
    {
      key: "coin4",
      coinImg: bnb,
      coin: "BNB",
      symbol: "BNB",
      price: "$508.57",
      hourChange: "+0.2%",
      dailyChange: "+0.9%",
      weeklyChange: "2.0%",
      dailyVolume: "$676,659,111",
      marketCap: "$73,634,515,331",
      chart: ChartData2
    },
    {
      key: "coin5",
      coinImg: solana,
      coin: "Solana",
      symbol: "SOL",
      price: "$130.18",
      hourChange: "+0.1%",
      dailyChange: "0.1%",
      weeklyChange: "1.3%",
      dailyVolume: "$1,860,985,007",
      marketCap: "$60,137,663,165",
      chart: ChartData
    },
    {
      key: "coin6",
      coinImg: usdc,
      coin: "USDC",
      symbol: "USDC",
      price: "$1.00",
      hourChange: "+0.2%",
      dailyChange: "+0.1%",
      weeklyChange: "0.1%",
      dailyVolume: "$4,476,819,205",
      marketCap: "$35,010,290,208",
      chart: ChartData2
    },
    {
      key: "coin7",
      coinImg: xrp,
      coin: "XRP",
      symbol: "XRP",
      price: "$0.5325",
      hourChange: "+0.4%",
      dailyChange: "+0.4%",
      weeklyChange: "3.7%",
      dailyVolume: "$562,209,228",
      marketCap: "$29,839,945,405",
      chart: ChartData
    },
  ]
  return (
    <CardBox className="pb-0">
      <div className=" mb-6">
        <h5 className="card-title">Cryptocurrency Prices</h5>
        <p className="card-subtitle">Live cryptocurrency prices by market cap</p>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 xl:overflow-hidden overflow-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <Table className="trade-history">
         <Table.Head className="border-0">
         <Table.HeadCell className="text-sm font-semibold ps-0">
                  Rank
                </Table.HeadCell>
                <Table.HeadCell className="text-sm font-semibold">
                  Coin
                </Table.HeadCell>
                <Table.HeadCell className="text-sm font-semibold">
                  Price
                </Table.HeadCell>
                <Table.HeadCell className="text-sm font-semibold">
                  24h
                </Table.HeadCell>
                <Table.HeadCell className="text-sm font-semibold">
                  7d
                </Table.HeadCell>
                <Table.HeadCell className="text-sm font-semibold">
                  24h Volume
                </Table.HeadCell>
                <Table.HeadCell className="text-sm font-semibold">
                  Market Cap
                </Table.HeadCell>
                <Table.HeadCell className="text-sm font-semibold">
                  Last 7 Days
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className=" divide-border dark:divide-darkborder ">
              {cryptoData.map((item, index) => (
                <>
              <Table.Row key={index} className="bg-lightgray dark:bg-lightprimary rounded-md">
              <Table.Cell className="whitespace-nowrap">
                        <p className="text-link dark:text-darklink text-sm w-fit">
                          {index + 1}
                        </p>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap md:min-w-auto min-w-[200px]">
                        <div className="flex gap-3 items-center">
                          <Image
                            src={item.coinImg}
                            alt="icon"
                            className="h-7 w-7 rounded-full"
                          />
                          <div className="flex items-center gap-1.5">
                            <h6 className="text-sm font-semibold mb-1">{item.coin}</h6>
                            <p className="text-xs font-medium text-bodytext dark:text-darklink">{item.symbol}</p>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap">
                        <div className="flex items-center gap-6">
                          <Popover
                            aria-labelledby="profile-popover"
                            content={
                              <div className="w-64 p-5 overflow-hidden border border-border dark:border-darkborder">
                                <div className="flex items-center gap-1.5 mb-3">
                                  <Image src={xIcon} alt="icon" width={22} />
                                  <p className="text-xs font-medium">BingX</p>
                                </div>
                                <Image src={bingIcon} alt="bing-icon" className="w-full max-w-full rounded-md" />
                                <p className="text-[13px] my-4 text-wrap">Get started on BingX today and access a range of services, including spot trading, derivatives, copy trading, and more.</p>
                                <Button color={"primary"} >Sign Up Now!</Button>
                                <div className="flex items-center mt-2 gap-2">
                                  <Image src={coingecko} alt="coin" />
                                  <p className="text-[13px] font-semibold">Sponsored</p>
                                </div>
                              </div>
                            }
                          >
                            <Button color="outlinesuccess" className="py-0 px-1" size={"xs"}>Buy</Button>
                          </Popover>
                          <h6 className="text-sm font-medium">{item.price}</h6>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-semibold text-sm">
                          <Icon icon={`${item.dailyChange.startsWith("+") ? "tabler:trending-up" : "tabler:trending-down"}`} className={`text-base ${item.dailyChange.startsWith("+") ? "text-success" : "text-error"}`} />
                          <p className={` text-right ${item.dailyChange.startsWith("+") ? "text-success" : "text-error"}`}>{`${item.dailyChange}`}</p>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap">
                        <div className="flex items-center gap-1.5 font-semibold text-sm">
                          <Icon icon={`${item.weeklyChange.startsWith("+") ? "tabler:trending-up" : "tabler:trending-down"}`} className={`text-base ${item.weeklyChange.startsWith("+") ? "text-success" : "text-error"}`} />
                          <p className={` text-right ${item.weeklyChange.startsWith("+") ? "text-success" : "text-error"}`}>{`${item.weeklyChange}`}</p>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap">
                        <h6 className="text-sm w-fit font-medium">
                          {item.dailyVolume}
                        </h6>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap">
                        <h6 className="text-sm w-fit font-medium">
                          {item.marketCap}
                        </h6>
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap">
                        <Chart
                          options={item.chart}
                          series={item.chart.series}
                          type="area"
                          height='30px'
                          width='100%'
                        />
                      </Table.Cell>

                </Table.Row>
                <Table.Row key={item.key} className="bg-transparent dark:bg-dark block">
                <Table.Cell className="whitespace-nowrap p-3  px-0">
                </Table.Cell>
                  <Table.Cell className="whitespace-nowrap py-3 px-0">
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap p-3 px-0">
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap p-3 px-0">
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap p-3 px-0">
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap p-3 px-0">
                  </Table.Cell>
                </Table.Row>
                </>
              ))}
            </Table.Body>
          </Table>
          </div>
        </div>
      </div>
    </CardBox>

  )
}
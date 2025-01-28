

"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Button, Dropdown, Tabs, TextInput } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import { useState } from "react"

export const CryptoInvesting = () => {
      const [currency, setCurrency] = useState("USD");
    const Currency = [
        {
            key: "currency1",
            currency: "INR"
        },
        {
            key: "currency2",
            currency: "CLP"
        },
        {
            key: "currency3",
            currency: "AMD"
        },
    ]
      const [cryptoCurrency, setCryptoCurrency] = useState("BTC");
    const CryptoCurrency = [
        {
            key: "currency1",
            currency: "BTC"
        },
        {
            key: "currency2",
            currency: "ETH"
        },
        {
            key: "currency3",
            currency: "LTC"
        },
    ]
    return (
        <CardBox>
              <div>
    <h5 className="card-title">Crypto Investing</h5>
    <p className="card-subtitle mb-5">Invest in cryptos at your ease</p>
    </div>
    <Tabs aria-label="Pills" variant="pills">
      <Tabs.Item active title="Buy">
        <p className="card-subtitle text-sm mb-2">Amount</p>
      <Button.Group className="w-full">
      <TextInput className="input-group rounded-r-none flex-1" />
              <Dropdown
                label=""
                className="w-40  rounded-sm overflow-hidden"
                dismissOnClick={false}
                renderTrigger={() => (
                  <Button color="lighterror" className="rounded-md rounded-l-none rtl:rounded-l rtl:rounded-r-none py-[3px] button-group hover:text-white hover:bg-error">
                    <p className="text-sm font-normal px-0" >{currency}</p>
                    <Icon icon="tabler:chevron-down" className="shrink-0 text-base" />
                  </Button>
                )}
              >
                {Currency.map((item, index) => (
                  <Dropdown.Item
                    className="flex gap-3 items-center py-2 px-3 bg-hover group w-full"
                    key={index}
                    onClick={() => setCurrency(item.currency)}
                  >
                    <span className="text-sm text-muted dark:text-darklink group-hover:text-primary font-medium leading-[25px]" >{item.currency}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown>
    </Button.Group>
        <p className="card-subtitle text-sm mb-2 pt-5">Amount</p>
      <Button.Group className="w-full">
      <TextInput className="input-group rounded-r-none flex-1" />

      <Dropdown
                label=""
                className="w-40  rounded-sm overflow-hidden"
                dismissOnClick={false}
                renderTrigger={() => (
                  <Button color="lightprimary" className="rounded-md rounded-l-none rtl:rounded-l rtl:rounded-r-none py-[3px] button-group hover:text-white hover:bg-primary">
                  <p className="text-sm font-normal px-0" >{cryptoCurrency}</p>
                  <Icon icon="tabler:chevron-down" className="shrink-0 text-base" />
                </Button>
                )}
              >
                {CryptoCurrency.map((item, index) => (
                  <Dropdown.Item
                    className="flex gap-3 items-center py-2 px-3 bg-hover group w-full"
                    key={index}
                    onClick={() => setCryptoCurrency(item.currency)}
                  >
                    <span className="text-sm text-muted dark:text-darklink group-hover:text-primary font-medium leading-[25px]" >{item.currency}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown>
    </Button.Group>
    <Button color={"primary"} className="rounded-md w-full text-base mt-5" >Buy BTC</Button>
      </Tabs.Item>
      <Tabs.Item title="Sell">
      <p className="card-subtitle text-sm mb-2">Amount</p>
      <Button.Group className="w-full">
      <TextInput className="input-group rounded-r-none flex-1" />
      <Dropdown
                label=""
                className="w-40  rounded-sm overflow-hidden"
                dismissOnClick={false}
                renderTrigger={() => (
                  <Button color="lighterror" className="rounded-md rounded-l-none rtl:rounded-l rtl:rounded-r-none py-[3px] button-group hover:text-white hover:bg-error">
                    <p className="text-sm font-normal px-0" >{currency}</p>
                    <Icon icon="tabler:chevron-down" className="shrink-0 text-base" />
                  </Button>
                )}
              >
                {Currency.map((item, index) => (
                  <Dropdown.Item
                    className="flex gap-3 items-center py-2 px-3 bg-hover group w-full"
                    key={index}
                    onClick={() => setCurrency(item.currency)}
                  >
                    <span className="text-sm text-muted dark:text-darklink group-hover:text-primary font-medium leading-[25px]" >{item.currency}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown>
    </Button.Group>
        <p className="card-subtitle text-sm mb-2 pt-5">Amount</p>
      <Button.Group className="w-full">
      <TextInput className="input-group rounded-r-none flex-1" />
      <Dropdown
                label=""
                className="w-40  rounded-sm overflow-hidden"
                dismissOnClick={false}
                renderTrigger={() => (
                  <Button color="lightprimary" className="rounded-md rounded-l-none rtl:rounded-l rtl:rounded-r-none py-[3px] button-group hover:text-white hover:bg-primary">
                  <p className="text-sm font-normal px-0" >{cryptoCurrency}</p>
                  <Icon icon="tabler:chevron-down" className="shrink-0 text-base" />
                </Button>
                )}
              >
                {CryptoCurrency.map((item, index) => (
                  <Dropdown.Item
                    className="flex gap-3 items-center py-2 px-3 bg-hover group w-full"
                    key={index}
                    onClick={() => setCryptoCurrency(item.currency)}
                  >
                    <span className="text-sm text-muted dark:text-darklink group-hover:text-primary font-medium leading-[25px]" >{item.currency}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown>
    </Button.Group>
    <Button color={"error"} className="rounded-md w-full text-base mt-5" >Sell BTC</Button>
      </Tabs.Item>
    </Tabs>

        </CardBox>
    )
}
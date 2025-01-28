"use client"
import { Badge, Button, Table, Tabs } from "flowbite-react"
import { useEffect, useState } from "react"
import product1 from "/public/images/products/product-1.jpg";
import product2 from "/public/images/products/product-2.jpg";
import product3 from "/public/images/products/product-3.jpg";
import product4 from "/public/images/products/product-4.jpg";
import Image from "next/image";
import CardBox from "../../shared/CardBox";
import { Icon } from "@iconify/react/dist/iconify.js";

export const OrderStatus = () => {
    const CheckoutStatus = [
        {
            key:"order1",
            productImg:product1,
            username:"Irpun Wicaksono",
            email:"irpun@gmail.com",
            product:"React Js - Online Classes",
            status:"Progress",
            color:"lightwarning",
            price:"$50.00"
        },
        {
            key:"order2",
            productImg:product2,
            username:"Oyhan Ruhiyan",
            email:"oyhan@gmail.com",
            product:"Frontend Dev - Online Classes",
            status:"Delivered",
            color:"lightsuccess",
            price:"$49.00"
        },
        {
            key:"order3",
            productImg:product3,
            username:"Dayat Santoso",
            email:"dayat@gmail.com",
            product:"UX Research - Power Courses",
            status:"Cancel",
            color:"lighterror",
            price:"$79.00"
        },
        {
            key:"order4",
            productImg:product4,
            username:"Irpun Wicaksono",
            email:"irpun@gmail.com",
            product:"React Js - Online Classes",
            status:"Delivered",
            color:"lightsuccess",
            price:"$50.00"
        },
    ]
    const PaidStatus = [
        {
            key:"order1",
            productImg:product2,
            username:"Oyhan Ruhiyan",
            email:"oyhan@gmail.com",
            product:"Frontend Dev - Online Classes",
            status:"Delivered",
            color:"lightsuccess",
            price:"$49.00"
        },
        {
            key:"order2",
            productImg:product1,
            username:"Irpun Wicaksono",
            email:"irpun@gmail.com",
            product:"React Js - Online Classes",
            status:"Progress",
            color:"lightwarning",
            price:"$50.00"
        },
        {
            key:"order3",
            productImg:product4,
            username:"Irpun Wicaksono",
            email:"irpun@gmail.com",
            product:"React Js - Online Classes",
            status:"Delivered",
            color:"lightsuccess",
            price:"$50.00"
        },
        {
            key:"order4",
            productImg:product3,
            username:"Dayat Santoso",
            email:"dayat@gmail.com",
            product:"UX Research - Power Courses",
            status:"Cancel",
            color:"lighterror",
            price:"$79.00"
        },

    ]
    const PackedStatus = [
        {
            key:"order1",
            productImg:product3,
            username:"Dayat Santoso",
            email:"dayat@gmail.com",
            product:"UX Research - Power Courses",
            status:"Cancel",
            color:"lighterror",
            price:"$79.00"
        },
        {
            key:"order2",
            productImg:product1,
            username:"Irpun Wicaksono",
            email:"irpun@gmail.com",
            product:"React Js - Online Classes",
            status:"Progress",
            color:"lightwarning",
            price:"$50.00"
        },
        {
            key:"order3",
            productImg:product4,
            username:"Irpun Wicaksono",
            email:"irpun@gmail.com",
            product:"React Js - Online Classes",
            status:"Delivered",
            color:"lightsuccess",
            price:"$50.00"
        },
        {
            key:"order4",
            productImg:product2,
            username:"Oyhan Ruhiyan",
            email:"oyhan@gmail.com",
            product:"Frontend Dev - Online Classes",
            status:"Delivered",
            color:"lightsuccess",
            price:"$49.00"
        },

    ]
    const [status , setStatus] = useState("Checkout");
    const [FilteredProducts , setFilteredProducts] = useState(CheckoutStatus)
    
    const handleStatus = (status:string) => {
          setStatus(status);
    }
    
    useEffect(()=>{
        if(status==="Checkout"){
            setFilteredProducts(CheckoutStatus);
          }
          else if(status==="Paid"){
            setFilteredProducts(PaidStatus);
          }
          else{
            setFilteredProducts(PackedStatus);
          }
    },[status])
    
    return (
        <CardBox>
            <div className="flex lg:gap-0 gap-4 flex-wrap items-center justify-between mb-6">
                <div>
                    <h4 className="card-title">Order Status</h4>
                    <p className="card-subtitle">How to check your order status online</p>
                </div>
                <div className="flex items-center gap-3">
                 <div onClick={()=>{
                    handleStatus("Checkout")
                 }} className={`py-2 px-4 text-base text-link dark:text-darklink hover:bg-primary ${status==="Checkout"?"bg-primary text-white dark:text-white":null} cursor-pointer rounded-md hover:text-white dark:hover:text-white`}>
                   Checkout
                 </div>
                 <div onClick={()=>{
                    handleStatus("Paid")
                 }} className={`py-2 px-4 text-base text-link dark:text-darklink ${status==="Paid"?"bg-primary text-white dark:text-white":null} hover:bg-primary cursor-pointer rounded-md hover:text-white dark:hover:text-white`}>
                   Paid
                 </div>
                 <div onClick={()=>{
                    handleStatus("Packed")
                 }} className={`py-2 px-4 text-base text-link dark:text-darklink ${status==="Packed"?"bg-primary text-white dark:text-white":null} hover:bg-primary cursor-pointer rounded-md hover:text-white dark:hover:text-white`}>
                   Packed
                 </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-x-auto">
         <Table>
            <Table.Body className="divide-y divide-border dark:divide-darkborder ">
              {FilteredProducts.map((item, index) => (
                <Table.Row key={item.key}>
                  <Table.Cell className="whitespace-nowrap ps-0 md:min-w-auto min-w-[200px]">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.productImg}
                        alt="icon"
                        className="w-20 rounded-md"
                      />
                      <div>
                      <h6 className="text-sm font-semibold mb-1">{item.username}</h6>
                      <p className="text-xs font-normal text-bodytext dark:text-darklink">{item.email}</p>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="text-link dark:text-white text-sm w-fit">
                      {item.product}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="dark:text-white text-link text-sm">
                      {item.price}
                    </p>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <Badge color={`${item.color}`} className="text-sm ms-auto flex items-center flex-nowrap gap-1 rounded-md custome-badge justify-center" >
                    <Icon icon="tabler:point-filled" className={`text-xl shrink-0 ${item.color}`} />
                    <span>{item.status}</span>
                    </Badge>
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
"use client"
import { Badge, Select, Table } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import userimg1 from "/public/images/profile/user-3.jpg";
import userimg2 from "/public/images/profile/user-5.jpg";
import userimg3 from "/public/images/profile/user-6.jpg";
import userimg4 from "/public/images/profile/user-7.jpg";
import userimg5 from "/public/images/profile/user-8.jpg";
import Image from "next/image";

export const TopPerformer = () => {
    const PerformersData = [
        {
            key:"performerData1",
            profileImg:userimg1,
            username:"Sunil Joshi",
            designation:"Web Designer",
            project:"Elite Admin",
            priority:"Low",
            color:"lightprimary",
            budget:"3.9k"
        },
        {
            key:"performerData2",
            profileImg:userimg2,
            username:"John Deo",
            designation:"Web Developer",
            project:"Flexy Admin",
            priority:"Medium",
            color:"lightwarning",
            budget:"24.5k"
        },
        {
            key:"performerData3",
            profileImg:userimg3,
            username:"Nirav Joshi",
            designation:"Web Manager",
            project:"Material Pro",
            priority:"High",
            color:"lightwarning",
            budget:"12.8k"
        },
        {
            key:"performerData4",
            profileImg:userimg4,
            username:"Yuvraj Sheth",
            designation:"Project Manager",
            project:"Xtreme Admin",
            priority:"Low",
            color:"lightsuccess",
            budget:"4.8k"
        },
        {
            key:"performerData5",
            profileImg:userimg5,
            username:"Micheal Doe",
            designation:"Content Writer",
            project:"Helping Hands WP Theme",
            priority:"High",
            color:"lighterror",
            budget:"9.3k"
        },
    ]
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
              <Table.HeadCell className="text-sm font-semibold ps-0">
                Assigned
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Project
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Priority
              </Table.HeadCell>
              <Table.HeadCell className="text-sm font-semibold">
                Budget
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder ">
              {PerformersData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap ps-0 md:min-w-auto min-w-[200px]">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.profileImg}
                        alt="icon"
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                      <h6 className="text-sm font-semibold mb-1">{item.username}</h6>
                      <p className="text-xs font-normal text-bodytext dark:text-darklink">Web Designer</p>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <p className="text-link dark:text-darklink text-sm w-fit">
                      {item.project}
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
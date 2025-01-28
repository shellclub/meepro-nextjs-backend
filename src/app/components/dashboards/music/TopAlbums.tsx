"use client"
import { Dropdown } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import { Icon } from "@iconify/react/dist/iconify.js"
import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css';
import album1 from "/public/images/music/top10-1.jpg";
import album2 from "/public/images/music/top10-2.jpg";
import album3 from "/public/images/music/top10-3.jpg";
import Image from "next/image"


export const TopAlbums = () => {
    return (
        <CardBox>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h6 className="card-title">Top 10 from this week</h6>
                    <p className="card-subtitle">Based on your preferences</p>
                </div>
                <Dropdown placement="left-start" label="" dismissOnClick={false} renderTrigger={() => <Icon icon="tabler:dots-vertical" className='text-muted dark:text-darklink hover:text-primary dark:hover:text-primary text-lg shrink-0 cursor-pointer' />}>
                    <Dropdown.Item>
                        <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                            <Icon icon="tabler:share" className="text-base" />
                            Share
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                            <Icon icon="tabler:download" className="text-base" />
                            Download
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className=" flex gap-2 items-center text-muted dark:text-darklink">
                            <Icon icon="tabler:info-circle" className="text-base" />
                            Download
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <SimpleBar style={{ maxHeight: 450 }} >
              <div className="flex flex-col gap-6">
                <Image src={album1} className="rounded-md" alt="album1" />
                <Image src={album2} className="rounded-md" alt="album2" />
                <Image src={album3} className="rounded-md" alt="album3" />
              </div>
            </SimpleBar>
        </CardBox>
    )
}
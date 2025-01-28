"use client"
import { Dropdown, ListGroup } from "flowbite-react"
import CardBox from "../../shared/CardBox"
import { Icon } from "@iconify/react/dist/iconify.js"
import album1 from "/public/images/music/album1.jpg"
import album2 from "/public/images/music/album2.jpg"
import album3 from "/public/images/music/album3.jpg"
import album4 from "/public/images/music/album4.jpg"
import album5 from "/public/images/music/album5.jpg"
import album6 from "/public/images/music/album6.jpg"
import album7 from "/public/images/music/album7.jpg"
import Image from "next/image"
import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css';

export const TopPlaylists = () => {
    const Playlists = [
        {
            key:"album1",
            albumProfile:album1,
            album:"N95",
            artist:"Kendrick Lamar",
            isFavourite:true,
        },
        {
            key:"album2",
            albumProfile:album2,
            album:"Women",
            artist:"Doja Cat",
            isFavourite:true,
        },
        {
            key:"album3",
            albumProfile:album3,
            album:"Wait For U",
            artist:"Future, Tems",
            isFavourite:true,
        },
        {
            key:"album4",
            albumProfile:album4,
            album:"Binding Lights",
            artist:"The Weeknd",
            isFavourite:false,
        },
        {
            key:"album5",
            albumProfile:album5,
            album:"Cooped Up",
            artist:"Roddy Rich",
            isFavourite:false,
        },
        {
            key:"album6",
            albumProfile:album6,
            album:"N95",
            artist:"Roddy Rich",
            isFavourite:true,
        },
        {
            key:"album7",
            albumProfile:album7,
            album:"Party Anthem",
            artist:"Arjit Singh",
            isFavourite:true,
        },
    ]
    return (
        <CardBox>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h6 className="card-title">Top Playlist</h6>
                    <p className="card-subtitle">Based on your choice</p>
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
            <ListGroup className="w-full">
               {
                Playlists.map((item)=>{
                    return(
                        
                        <ListGroup.Item key={item.key} className="bg-hover">
                        <div className="flex items-center justify-between w-full">
                           <div className="flex gap-3 items-center">
                              <Icon icon="tabler:player-play" className="text-lg text-dark dark:text-white shrink-0" />
                              <Image src={item.albumProfile} className="rounded-md h-10 w-10" alt="album-image" />
                              <div>
                                <h6 className="text-sm font-medium text-start">{item.album}</h6>
                                <p className="text-sm font-normal text-bodytext dark:text-darklink" >{item.artist}</p>
                              </div>
                           </div>
                           <Icon icon="tabler:heart" className={`${item.isFavourite?'text-primary':'text-bodytext dark:text-darklink'} text-lg shrink-0`} />
                        </div>
                       </ListGroup.Item>
                    )
                })
               }
            </ListGroup>
            </SimpleBar>
        </CardBox>
    )
}
"use client"
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import album1 from "/public/images/music/album5.jpg"
import album2 from "/public/images/music/album7.jpg"
import album3 from "/public/images/music/album8.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export const RecentlyPlayed = () => {
    const PlayedAlbums = [
        {
            key:"music1",
            album:album1,
            albumName:"Naach Meri Rani",
            artist:"Guru Randhawa"
        },
        {
            key:"music2",
            album:album2,
            albumName:"Party Anthems",
            artist:"Arijit Singh"
        },
        {
            key:"music3",
            album:album3,
            albumName:"Classic Melody",
            artist:"Jagjit Singh"
        },
    ]
    return (
        <CardBox>
          <div className="mb-6">
            <h6 className="card-title">Recently Played</h6>
            <p className="card-subtitle">What's on my playlist this week?</p>
          </div>
          <div className="grid grid-cols-12 gap-6">
           {
            PlayedAlbums.map((item)=>{
                return (
                    <div className="lg:col-span-4 col-span-12" key={item.key}>
                    <CardBox className="p-0 overflow-hidden">
                      <Image src={item.album} alt="album" className="max-w-full w-full" />
                      <div className="p-3 flex justify-between">
                         <div>
                         <h6 className="text-sm mb-1">{item.albumName}</h6>
                         <p className="text-xs">{item.artist}</p>
                         </div>
                         <div className="w-9 h-9 bg-white cursor-pointer text-primary flex items-center justify-center rounded-full -mt-[30px] hover:bg-primary hover:text-white">
                           <Icon icon="tabler:player-play" className="text-lg" />
                         </div>
                      </div>
                    </CardBox>
                  </div>
                )
            })
           }
          </div>
        </CardBox>
    )
}
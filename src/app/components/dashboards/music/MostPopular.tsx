"use client"
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import album1 from "/public/images/music/album1.jpg"
import album2 from "/public/images/music/album2.jpg"
import album3 from "/public/images/music/album3.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export const MostPopular = () => {
    const TrendingSongs = [
        {
            key:"trendingSong1",
            album:album1
        },
        {
            key:"trendingSong2",
            album:album2
        },
        {
            key:"trendingSong3",
            album:album3
        },
    ]
    return (
        <CardBox>
            <div className="mb-6">
                <h6 className="card-title">Most Popular this week</h6>
                <p className="card-subtitle">Based on your preferences</p>
            </div>
            <div className="flex flex-col space-y-6">
           {
            TrendingSongs.map((item)=>{
                return(
                    <div className="p-4 rounded-md border border-border dark:border-darkborder" key={item.key} >
                    <div className="flex items-center gap-3">
                    <div className="img-wrapper shrink-0 relative">
                          <Image src={item.album} width={97} alt="album-image" className="rounded-md" />
                          <div className="h-11 w-11 rounded-full bg-primary hover:bg-primaryemphasis flex cursor-pointer items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Icon icon="tabler:player-play" className="text-white text-lg shrink-0" />
                          </div>
                      </div>
                      <div className="flex flex-col gap-2.5">
                          <h5 className="text-lg leading-none">Trending Songs</h5>
                           <p className="text-sm truncate xl:max-w-40 lg:max-w-28 sm:max-w-full max-w-28">Top trending hits, refreshemnt</p>
                           <p className="text-xs">Created by Gaana</p>
                      </div></div> 
                  </div>
                )
            })
           }
           </div>
        </CardBox>
    )
}
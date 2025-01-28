
import { FavouriteArtists } from "@/app/components/dashboards/music/FavouriteArtists";
import { FollowArtists } from "@/app/components/dashboards/music/FollowArtists";
import { MostPopular } from "@/app/components/dashboards/music/MostPopular";
import { MyFriends } from "@/app/components/dashboards/music/MyFriends";
import { RecentlyPlayed } from "@/app/components/dashboards/music/RecentlyPlayed";
import { RecentSearch } from "@/app/components/dashboards/music/RecentSearch";
import { TopAlbums } from "@/app/components/dashboards/music/TopAlbums";
import { TopPlaylists } from "@/app/components/dashboards/music/TopPlaylists";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: "Music Admin Dashboard",
    description: "Music template page",
  };

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-8 col-span-12">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
              <FollowArtists/>
              </div>
              <div className="col-span-12">
                <RecentlyPlayed/>
              </div>
              <div className="lg:col-span-6 col-span-12">
               <MyFriends/>
              </div>
              <div className="lg:col-span-6 col-span-12">
               <FavouriteArtists/>
              </div>
            </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="grid grid-cols-12 gap-6">
             <div className="col-span-12">
             <RecentSearch/>
             </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <TopAlbums/>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <TopPlaylists/>
        </div>
        <div className="lg:col-span-4 col-span-12 flex">
          <MostPopular/>
        </div>
      </div>
     
    </>
  );
};

export default page;

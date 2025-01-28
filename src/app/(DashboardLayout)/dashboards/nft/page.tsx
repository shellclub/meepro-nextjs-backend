
import { WelcomeCard } from "@/app/components/dashboards/eCommerce/WelcomeCard";
import { YearlySales } from "@/app/components/dashboards/eCommerce/YearlySales";
import { Collectibles } from "@/app/components/dashboards/nft/Collectibles";
import { CurrencyCard } from "@/app/components/dashboards/nft/CurrencyCard";
import { RecentHistory } from "@/app/components/dashboards/nft/RecentHistory";
import { RecentTransaction } from "@/app/components/dashboards/nft/RecentTransaction";
import { TopNftPerformer } from "@/app/components/dashboards/nft/TopNftPerformer";
import { TrendingCreator } from "@/app/components/dashboards/nft/TrendingCreator";
import { Wallet } from "@/app/components/dashboards/nft/Wallet";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: "NFT Admin Dashboard",
    description: "NFT template page",
  };

const page = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-8 col-span-12">
            <Collectibles/>
        </div>
        <div className="lg:col-span-4 col-span-12 flex">
            <Wallet/>
        </div>
        <div className="lg:col-span-8 col-span-12 flex">
            <TopNftPerformer/>
        </div>
        <div className="lg:col-span-4 col-span-12">
            <CurrencyCard/>
        </div>
        <div className="lg:col-span-6 col-span-12">
            <RecentTransaction/>
        </div>
        <div className="lg:col-span-6 col-span-12">
            <TrendingCreator/>
        </div>
        <div className="col-span-12">
            <RecentHistory/>
        </div>
      </div>
     
    </>
  );
};

export default page;

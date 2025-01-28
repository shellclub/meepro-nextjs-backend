

import { CryptoCards } from "@/app/components/dashboards/crypto/CryptoCards";
import { CryptoInsights } from "@/app/components/dashboards/crypto/CryptoInsights";
import { CryptoInvesting } from "@/app/components/dashboards/crypto/CryptoInvesting";
import { CryptoPrices } from "@/app/components/dashboards/crypto/CryptoPrices";
import { FeaturedBTC } from "@/app/components/dashboards/crypto/FeaturedBTC";
import { PortfolioTracker } from "@/app/components/dashboards/crypto/PortfolioTracker";
import { TopGainers } from "@/app/components/dashboards/crypto/TopGainers";
import { TransactionHistory } from "@/app/components/dashboards/crypto/TransactionHistory";
import { TrendingCrypto } from "@/app/components/dashboards/crypto/TrendingCrypto";
import { Metadata } from "next";
import React from "react";
import CryptoCharts from "@/app/components/dashboards/crypto/CryptoCharts";
export const metadata: Metadata = {
    title: "Crypto Admin Dashboard",
    description: "Crypto template page",
  };

const page = () => {
  
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
         <CryptoCards/>
         <div className="lg:col-span-9 col-span-12">
         <CryptoCharts/>
         </div>
         <div className="lg:col-span-3 col-span-12">
          <PortfolioTracker/>
         </div>
         <div className="lg:col-span-4 col-span-12 flex">
          <CryptoInsights/>
         </div>
         <div className="lg:col-span-4 col-span-12">
          <TrendingCrypto/>
         </div>
         <div className="lg:col-span-4 col-span-12">
           <TopGainers/>
         </div>
         <div className="lg:col-span-9 col-span-12">
         <FeaturedBTC/>
         </div>
         <div className="lg:col-span-3 col-span-12 flex">
          <CryptoInvesting/>
         </div>

         <div className="col-span-12">
          <TransactionHistory/>
         </div>
         <div className="col-span-12">
          <CryptoPrices/>
         </div>
      </div>
     
    </>
  );
};

export default page;

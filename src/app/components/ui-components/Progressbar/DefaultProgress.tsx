import { Progress } from "flowbite-react";
import React from "react";
import CardBox from "../../shared/CardBox";
import DefaultProgressCode from "./Code/DefaultProgressCode";

const DefaultProgress = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Default Progress Bar</h4>
          <DefaultProgressCode />
        </div>
       <div className="flex flex-col gap-2">
       <Progress progress={20} />
        <Progress progress={40} />
        <Progress progress={60} />
        <Progress progress={80} />
        <Progress progress={100} />
       </div>
      </CardBox>
    </div>
  );
};

export default DefaultProgress;

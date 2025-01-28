import { Progress } from "flowbite-react";
import React from "react";
import CardBox from "../../shared/CardBox";
import LabelProgressCode from "./Code/LabelProgressCode";

const LabelProgress = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Label Progress Bar</h4>
          <LabelProgressCode />
        </div>
        <div className="flex flex-col gap-2">
        <Progress
          progress={20}
          textLabel="Progress"
          size="lg"
          labelProgress
          labelText
        />
        <Progress
          progress={40}
          textLabel="Progress"
          size="lg"
          labelProgress
          labelText
        />
        <Progress
          progress={60}
          textLabel="Progress"
          size="lg"
          labelProgress
          labelText
        />
        <Progress
          progress={80}
          textLabel="Progress"
          size="lg"
          labelProgress
          labelText
        />
        <Progress
          progress={100}
          textLabel="Progress"
          size="lg"
          labelProgress
          labelText
        />
        </div>
      </CardBox>
    </div>
  );
};

export default LabelProgress;

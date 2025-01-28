import CodeModal from "@/app/components/ui-components/CodeModal";
import React from "react";

const WithTransitionCode = () => {
  return (
    <div>
      <CodeModal>
{
  `
  "use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import CardBox from "../../shared/CardBox";
import WithTransitionCode from "./Codes/WithTransitionCode";


const WithTransitionsSwitch = () => {
  const [enabledSwith1, setEnabledSwitch1] = useState(true);
  const [enabledSwith2, setEnabledSwitch2] = useState(true);
  const [enabledSwith3, setEnabledSwitch3] = useState(true);
  const [enabledSwith4, setEnabledSwitch4] = useState(true);
  const [enabledSwith5, setEnabledSwitch5] = useState(true);
  const [enabledSwith6, setEnabledSwitch6] = useState(true);
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Adding Transitions</h4>
         <WithTransitionCode/>
        </div>
        <div className="flex flex-wrap gap-3">
          <Switch
            checked={enabledSwith1}
            onChange={setEnabledSwitch1}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition duration-700 data-[checked]:bg-primary"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith2}
            onChange={setEnabledSwitch2}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition duration-700 data-[checked]:bg-secondary"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith3}
            onChange={setEnabledSwitch3}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition duration-700 data-[checked]:bg-success"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith4}
            onChange={setEnabledSwitch4}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition duration-700 data-[checked]:bg-error"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith5}
            onChange={setEnabledSwitch5}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition duration-700 data-[checked]:bg-warning"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith6}
            onChange={setEnabledSwitch6}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition duration-700 data-[checked]:bg-info"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition duration-700 group-data-[checked]:translate-x-6" />
          </Switch>
        </div>
      </CardBox>
    </div>
  );
};

export default WithTransitionsSwitch;
`
}
      </CodeModal>
    </div>
  );
};

export default WithTransitionCode;

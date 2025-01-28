"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import CardBox from "../../shared/CardBox";
import DefaultOnCode from "./Codes/DefaultOnSwitchCode";

const DEfaultOnSwitches = () => {
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
          <h4 className="text-lg font-semibold">Default On Switches</h4>
          <DefaultOnCode />
        </div>
        <div className="flex flex-wrap gap-3">
          <Switch
            checked={enabledSwith1}
            onChange={setEnabledSwitch1}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-primary"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith2}
            onChange={setEnabledSwitch2}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-secondary"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith3}
            onChange={setEnabledSwitch3}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-success"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith4}
            onChange={setEnabledSwitch4}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-error"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith5}
            onChange={setEnabledSwitch5}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-warning"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            checked={enabledSwith6}
            onChange={setEnabledSwitch6}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-info"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
        </div>
      </CardBox>
    </div>
  );
};

export default DEfaultOnSwitches;

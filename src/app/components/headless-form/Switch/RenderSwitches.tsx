"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import CardBox from "../../shared/CardBox";
import RenderAsElements from "./Codes/RenderAsElements";

const RenderSwitches = () => {
  const [enabledSwith1, setEnabledSwitch1] = useState(false);
  const [enabledSwith2, setEnabledSwitch2] = useState(false);
  const [enabledSwith3, setEnabledSwitch3] = useState(false);
  const [enabledSwith4, setEnabledSwitch4] = useState(false);
  const [enabledSwith5, setEnabledSwitch5] = useState(false);
  const [enabledSwith6, setEnabledSwitch6] = useState(false);
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Rendering as Element</h4>
          <RenderAsElements />
        </div>
        <div className="flex flex-wrap gap-3">
          <Switch
            as="div"
            checked={enabledSwith1}
            onChange={setEnabledSwitch1}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-primary"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabledSwith2}
            onChange={setEnabledSwitch2}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-secondary"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabledSwith3}
            onChange={setEnabledSwitch3}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-success"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabledSwith4}
            onChange={setEnabledSwitch4}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-error"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
            checked={enabledSwith5}
            onChange={setEnabledSwitch5}
            className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-warning"
          >
            <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
          </Switch>
          <Switch
            as="div"
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

export default RenderSwitches;

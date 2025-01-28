import CodeModal from "@/app/components/ui-components/CodeModal";
import React from "react";

const WithLabelSwitchCode = () => {
  return (
    <div>
      <CodeModal>
{
  `
  "use client";
import React, { useState } from "react";
import CardBox from "../../shared/CardBox";
import { Switch, Field, Label } from "@headlessui/react";
import WithLabelSwitchCode from "./Codes/WithLabelSwitchCode";
const WithLabelSwitch = () => {
  const [enabledSwith1, setEnabledSwitch1] = useState(true);
  const [enabledSwith2, setEnabledSwitch2] = useState(true);
  const [enabledSwith3, setEnabledSwitch3] = useState(true);
  const [enabledSwith4, setEnabledSwitch4] = useState(true);
  const [enabledSwith5, setEnabledSwitch5] = useState(true);
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Adding a Label</h4>
          <WithLabelSwitchCode />
        </div>
        <div className="flex flex-wrap gap-3">
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabledSwith1}
              onChange={setEnabledSwitch1}
              className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-primary"
            >
              <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabledSwith2}
              onChange={setEnabledSwitch2}
              className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-secondary"
            >
              <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabledSwith3}
              onChange={setEnabledSwitch3}
              className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-error"
            >
              <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabledSwith4}
              onChange={setEnabledSwitch4}
              className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-warning"
            >
              <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabledSwith5}
              onChange={setEnabledSwitch5}
              className="group inline-flex h-6 w-11 items-center rounded-md bg-gray-200 transition data-[checked]:bg-info"
            >
              <span className="size-4 translate-x-1 rounded-md bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          
        </div>
      </CardBox>
    </div>
  );
};

export default WithLabelSwitch;
`
}
      </CodeModal>
    </div>
  );
};

export default WithLabelSwitchCode;

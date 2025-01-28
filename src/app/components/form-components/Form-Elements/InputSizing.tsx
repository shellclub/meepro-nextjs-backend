import { Label, TextInput } from "flowbite-react";
import React from "react";
import CardBox from "../../shared/CardBox";

const InputSizing = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-4">Input sizing</h4>
        <div className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Small input" />
            </div>
            <TextInput className="form-control" id="small" type="text" sizing="sm" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Base input" />
            </div>
            <TextInput className="form-control" id="base" type="text" sizing="md" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="Large input" />
            </div>
            <TextInput className="form-control" id="large" type="text" sizing="lg" />
          </div>
        </div>
      </CardBox>
    </div>
  );
};

export default InputSizing;

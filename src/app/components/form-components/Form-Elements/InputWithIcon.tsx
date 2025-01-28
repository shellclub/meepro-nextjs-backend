import { Label, TextInput } from "flowbite-react";
import React from "react";
import CardBox from "../../shared/CardBox";
import { HiMail } from "react-icons/hi";
const InputWithIcon = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-4">Input groups with icon</h4>
        <div className="mb-[0.375rem]">
          <div className="pb-3">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput className="form-control"
              id="email4"
              type="email"
              icon={HiMail}
              placeholder="name@materialm.com"
              required
            />
          </div>
          <div className="pb-3">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput className="form-control"
              id="email4"
              type="email"
              rightIcon={HiMail}
              placeholder="name@materialm.com"
              required
            />
          </div>
          <div className="pb-3">
            <div className="mb-2 block">
              <Label htmlFor="email4" value="Your email" />
            </div>
            <TextInput className="form-control"
              id="email4"
              type="email"
              icon={HiMail}
              rightIcon={HiMail}
              placeholder="name@materialm.com"
              required
            />
          </div>
          <div className="pb-3">
            <div className="mb-2 block">
              <Label htmlFor="username3" value="Username" />
            </div>
            <TextInput
              id="username3"
              className="form-control-group-left"
              placeholder="Bonnie Green"
              addon="@"
              required
            />
          </div>
        </div>
      </CardBox>
    </div>
  );
};

export default InputWithIcon;

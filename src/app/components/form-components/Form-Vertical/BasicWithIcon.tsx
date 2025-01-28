import {
  IconUser,
  IconBuildingArch,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import React from "react";
import TitleCard from "../../shared/TitleBorderCard";

const BasicWithIcon = () => {
  return (
    <div>
      <TitleCard title="Basic With Icons">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput className="form-control"
              id="name"
              type="name"
              icon={() => <IconUser size={20} />}
              placeholder="Jordan Powell"
              required
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="company" value="Company" />
            </div>
            <TextInput className="form-control"
              id="company"
              type="text"
              icon={() => <IconBuildingArch size={20} />}
              placeholder="ACME Inc."
              required
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput className="form-control"
              id="email"
              type="email"
              icon={() => <IconMail size={20} />}
              placeholder="jordan.powell@example.com"
              required
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="phoneno" value="Phone No" />
            </div>
            <TextInput className="form-control"
              id="phoneno"
              type="number"
              icon={() => <IconPhone size={20} />}
              placeholder="125 7545 645"
              required
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Message" />
            </div>
            <Textarea
              id="message"
              placeholder="Hi, Do you  have a moment to talk Jeo ?"
              required
              className="form-control-textarea"
              rows={4}
            />
          </div>
          <div className="col-span-12">
            <Button type="submit" color="primary">
              Send
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default BasicWithIcon;

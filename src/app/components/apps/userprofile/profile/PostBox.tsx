import CardBox from "@/app/components/shared/CardBox";
import { Icon } from "@iconify/react";
import { Button, Textarea } from "flowbite-react";
import React from "react";

const PostBox = () => {
  return (
    <>
      <CardBox>
        <Textarea className="form-control-textarea" rows={5} placeholder="Share your thoughts" />
        <div className="flex gap-5 mt-3">
          <div className="flex items-center gap-3 cursor-pointer text-ld font-medium text-primary-ld">
            <Button className="btn-circle p-0 rounded-full" color={"primary"}>
              <Icon icon="tabler:photo" height="16" />
            </Button>
            Photos / Video
          </div>
          <div className="flex items-center gap-3 cursor-pointer text-ld font-medium text-primary-ld">
            <Button className="btn-circle p-0 rounded-full" color={"secondary"}>
              <Icon icon="tabler:notebook" height="16" />
            </Button>
            Article
          </div>
          <Button className="ms-auto rounded-md" color={'primary'} >Post</Button>
        </div>
      </CardBox>
    </>
  );
};

export default PostBox;

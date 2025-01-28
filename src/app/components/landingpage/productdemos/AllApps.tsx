import React from "react";
import * as DemosName from "../Data";
import { Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
const AllApps = () => {
  return (
    <>
      {/* Demos */}
      <div className="grid grid-cols-12 gap-[30px]">
        {DemosName.Demos.map((item, index) => (
          <React.Fragment key={index}>
            {item.type != true ? (
              <div
                className="lg:col-span-4 md:col-span-6 col-span-12 "
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="relative overflow-hidden rounded-md group border border-ld ">
                  <div className="overflow-hidden rounded-md relative after:opacity-0 rounded-b-none after:top-0 after:absolute after:w-full after:h-full after:bg-lightprimary group-hover:after:opacity-100  flex justify-center items-center group">
                    <Image src={item.img} alt="Modernize" className="w-full" />
                    <Button
                        as={Link}
                        href={item.link}
                        color={"primary"}
                        className="text-xs absolute z-50 hidden group-hover:block top-1/2 end-1/2 translate-x-1/2 -translate-y-1/2"
                        size={"sm"}
                      >
                        Live Preview
                      </Button>
                  </div>

                  <div className="rounded-t-none rounded-md p-4 flex justify-between items-center">
                    <div>
                      <Link
                        href={item.link}
                        className="text-base text-dark dark:text-white hover:text-primary font-semibold "
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs mt-1">Application</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default AllApps;

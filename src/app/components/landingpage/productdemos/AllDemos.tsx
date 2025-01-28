import React from "react";
import * as DemosName from "../Data";
import { Button } from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
const AllDemos = () => {
  return (
    <>
      {/* Demos */}
      <div className="grid grid-cols-12 gap-[30px] mt-20">
        {DemosName.Demos.map((item, index) => (
          <React.Fragment key={index}>
            {item.type == true ? (
              <div
                className="lg:col-span-4 md:col-span-6 col-span-12 "
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="relative group overflow-hidden rounded-md border border-ld ">
                  <div className={`overflow-hidden rounded-md  after:opacity-0 rounded-b-none after:top-0 after:absolute after:w-full after:h-full after:bg-lightprimary relative flex justify-center items-center group ${item.include!=="Included With The package"?"group-hover:after:opacity-100":null}` }>
                    <Image src={item.img} alt="MatDash" className="w-full" />
                    <Button
                        as={Link}
                        href={item.link}
                        color={"primary"}
                        className={`text-xs absolute z-50 hidden ${item.include!=="Included With The package"?"group-hover:block":null} top-1/2 end-1/2 translate-x-1/2 -translate-y-1/2`}
                        size={"sm"}
                      >
                        Live Preview
                      </Button>
                  </div>
                  <div className="rounded-t-none rounded-md p-4 flex justify-between items-center">
                    <div>
                      <Link
                        href={item.link}
                        className="text-base text-dark dark:text-white hover:text-primary font-semibold"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm">{item.include}</p>
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

export default AllDemos;

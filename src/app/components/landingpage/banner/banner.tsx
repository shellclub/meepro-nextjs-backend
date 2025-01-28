import Image from "next/image";
import React from "react";
import Banner1 from "/public/images/landingpage/background/bannerimg1.svg";
import Banner2 from "/public/images/landingpage/background/bannerimg2.svg";
import { Button } from "flowbite-react";
import Link from "next/link";
import { IconRocket } from "@tabler/icons-react";
const banner = () => {
  return (
    <>
      <div className="bg-light dark:bg-dark relative overflow-hidden">
        <div className="container relative">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="xl:col-span-6 col-span-12 xl:py-0 py-12 xl:px-0 sm:px-6 px-3">
              <h6
                className="flex items-center gap-2 text-base opacity-80 mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <IconRocket className="text-secondary" size={17} /> Kick start
                your project with
              </h6>
              <h1
                className="font-bold mb-7 sm:text-55 text-3xl sm:leading-[55px]"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                Most powerful &{" "}
                <span className="text-primary">Developer friendly</span>{" "}
                dashboard
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className="text-ld text-lg"
              >
                Modernize comes with light & dark color skins, well designed dashboards, applications and pages.
              </p>
              <div
                className="sm:flex gap-3 mt-8"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                <Button
                  as={Link}
                  href="/auth/auth1/login"
                  size={"lg"}
                  color={"primary"}
                  className="sm:mb-0 mb-3"
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  href="#demos"
                  color={"outlineprimary"}
                  size={"lg"}
                  
                >
                  Live Preview
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 xl:block hidden ">
              <div className="bannerSlider bg-lightprimary dark:bg-lightprimary">
                <div className="flex flex-row">
                  <div>
                    <div className="animateUp">
                      <Image src={Banner1} alt="matdash" />
                    </div>
                    <div className="animateUp">
                      <Image src={Banner1} alt="matdash" />
                    </div>
                  </div>
                  <div>
                    <div className="animateDown">
                      <Image src={Banner2} alt="matdash" />
                    </div>
                    <div className="animateDown">
                      <Image src={Banner2} alt="matdash" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;

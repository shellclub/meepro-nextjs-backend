import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-white dark:bg-dark ">
        <div className="container">
          <div className="py-10 text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <div>
              <p className="text-ld ">
                <span className="opacity-90">
                  All rights reserved by Modernize.<br></br>
                  Designed & Developed by
                </span>
                <Link
                  href="https://adminmart.com/"
                  target="_blank"
                  className="text-ld  font-medium underline underline-offset-4 decoration-primary text-primary-ld ps-1"
                >
                  AdminMart
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

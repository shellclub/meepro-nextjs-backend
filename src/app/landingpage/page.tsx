
import React, { useEffect } from "react";
import Landingpage from "../components/landingpage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Landingpage",
};

const page = () => {
  
  return (
    <>
      <Landingpage/>
    </>
  );
};

export default page;

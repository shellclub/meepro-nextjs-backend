"use client"
import { Flowbite } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { useContext, useEffect } from "react";
import { CustomFooter } from "../components/frontend-pages/layout/CustomFooter";
import { AnnouncementBar } from "../components/frontend-pages/layout/header/AnnouncementBar";
import Header from "../components/frontend-pages/layout/header/Header";




export default function HomeLayout({ children, }: { children: React.ReactNode }) {

    return (
        <div className="frontend-page" >
            <Flowbite theme={{ theme: customTheme }}>
                <AnnouncementBar />
                <Header />
                <section>
                    {children}
                </section>
                <CustomFooter/>
            </Flowbite>
        </div>
    )
}
"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// Images used
import darkimg from "/public/images/landingpage/demos/demo-dark.jpg"
import horizontalimg from "/public/images/landingpage/demos/demo-horizontal.jpg"
import mainimg from "/public/images/landingpage/demos/demo-main.jpg"
import minimg from "/public/images/landingpage/demos/demo-mini.jpg"
import rtlimg from "/public/images/landingpage/demos/demo-rtl.jpg"
import Image from 'next/image';
import { useRef } from "react";

export const PowerfulTemplates = () => {
  const sliderRef = useRef<Slider | null>(null);
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    draggable:true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 6000,
    arrows:false,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2.
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
        <>
          <div className="container px-4 pb-0 lg:pt-24 pt-12">
            <div className="wrapper py-[72px] bg-lightprimary dark:bg-lightprimary rounded-xl">
              <div className="grid grid-cols-12 mb-14">
                <div className="lg:col-span-6 col-span-12">
                <h1 className="ps-16 font-bold text-link dark:text-white leading-tight md:text-40 text-32" >Discover Powerful Dozens of
                Purpose-Fit Templates</h1>
                </div>
              </div>
              <div className="slider-container" >
      <Slider ref={sliderRef} {...settings}  >
        <div className="px-3 pb-10 focus:outline-0">
          <Image src={darkimg} alt="demos" className="max-w-full w-full rounded-md custom-shadow" />
        </div>
        <div className="px-3 pb-10 focus:outline-0">
        <Image src={horizontalimg} alt="demos" className="max-w-full w-full rounded-md custom-shadow" />
        </div>
        <div className="px-3 pb-10 focus:outline-0">
        <Image src={darkimg} alt="demos" className="max-w-full w-full rounded-md custom-shadow" />
        </div>
        <div className="px-3 pb-10 focus:outline-0">
        <Image src={mainimg} alt="demos" className="max-w-full w-full rounded-md custom-shadow" />
        </div>
        <div className="px-3 pb-10 focus:outline-0">
        <Image src={minimg} alt="demos" className="max-w-full w-full rounded-md custom-shadow" />
        </div>
        <div className="px-3 pb-10 focus:outline-0">
        <Image src={rtlimg} alt="demos" className="max-w-full w-full rounded-md custom-shadow" />
        </div>
      </Slider>
    </div>
     <div className="mt-8">
        <div className="container-md">
        <div className="grid grid-cols-12 gap-6 text-center">
        <div className="lg:col-span-4 col-span-12">
            <h4 className="text-lg text-link dark:text-white font-bold mb-4">High Customizability</h4>
             <p className="text-sm text-lightmuted dark:text-darklink leading-loose px-4">Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience.</p>
        </div>
        <div className="lg:col-span-4 col-span-12">
            <h4 className="text-lg text-link dark:text-white font-bold mb-4">Powerful Data Analytics</h4>
             <p className="text-sm text-lightmuted dark:text-darklink leading-loose px-4">Unlock the true potential of your data with our advanced analytics tools. Gain valuable insights and make data-driven decisions with ease.</p>
        </div>
        <div className="lg:col-span-4 col-span-12">
            <h4 className="text-lg text-link dark:text-white font-bold mb-4">Interactive Graphs & Charts</h4>
             <p className="text-sm text-lightmuted dark:text-darklink leading-loose px-4">Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.</p>
        </div>
      </div>
        </div>
     </div>
            </div>
          </div>
        </>
    )
}
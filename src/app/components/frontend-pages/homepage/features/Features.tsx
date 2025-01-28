"use client"

import { Icon } from "@iconify/react/dist/iconify.js";

export const Features = () => {
    const ThemeFeature1 = [
        {
            key:"feature1",
            icon: "tabler:wand",
            title: '6 Theme Colors'
        },
        {
            key:"feature2",
            icon: "tabler:shield-lock",
            title: 'NextAuth'
        },
        {
            key:"feature3",
            icon: 'tabler:brand-firebase',
            title: 'Firebase'
        },
        {
            key:"feature4",
            icon: 'tabler:archive',
            title: '90+ Page Templates'
        },
        {
            key:"feature5",
            icon: 'tabler:adjustments',
            title: '45+ UI Components'
        },
        {
            key:"feature6",
            icon: "tabler:brand-tailwind",
            title: 'Tailwind'
        },
        {
            key:"feature7",
            icon: "tabler:diamond",
            title: '3400+ Font Icons'
        }
    ];
    const ThemeFeature2 = [
        {
            key:"feature1",
            icon: "tabler:database",
            title: 'Axios'
        },
        {
            key:"feature2",
            icon: "tabler:tags",
            title: 'i18 React'
        },
        {
            key:"feature3",
            icon: "tabler:hexagons",
            title: 'Flowbite React'
        },
        {
            key:"feature4",
            icon: "tabler:arrows-shuffle",
            title: 'Easy to Customize'
        }
    ];
    const ThemeFeature3 = [
        {
            key:"feature1",
            icon: "tabler:chart-pie",
            title: 'Lots of Chart Options'
        },
        {
            key:"feature2",
            icon: 'tabler:layers-intersect',
            title: 'Lots of Table Examples'
        },
        {
            key:"feature3",
            icon: 'tabler:refresh',
            title: 'Regular Updates'
        },
        {
            key:"feature4",
            icon: 'tabler:book',
            title: 'Detailed Documentation'
        },
        {
            key:"feature5",
            icon: 'tabler:calendar',
            title: 'Calendar Design'
        },
        {
            key:"feature6",
            icon: 'tabler:user-screen',
            title: 'Dedicated Support'
        }
    ];
    return (
        <>
          <div className="container lg:py-24 py-12 bg-lightprimary dark:bg-lightprimary rounded-base overflow-hidden">
           <div className="flex justify-center w-full mb-16">
            <div className="lg:w-6/12 w-full">
            <h2 className="md:text-40 text-32 font-bold text-link dark:text-white leading-tight text-center">
            Enjoy unparalleled features & exceptional flexibility.
            </h2>
            </div>
           </div>
           <div className="marquee1-group flex gap-6">
            {
                [0,1,2,3].map((item,index)=>{
                    return(
                        <div className="flex gap-6 mb-6" key={index}>
                        {
                            ThemeFeature1.map((item)=>{
                                return(
                                    <div key={item.key} className="py-6 px-8 rounded-base elevation-1 flex gap-3 items-center bg-white dark:bg-dark ">
                                       <Icon icon={item.icon} className="text-primary text-2xl shrink-0" />
                                        <p className="text-[15px] font-semibold whitespace-nowrap text-link dark:text-darklink">{item.title}</p>
                                    </div>
                                )
                            })
                        }
                       </div>
                    )
                })
            }
           </div>
           <div className="marquee2-group flex gap-6">
           {
            [0,1,2,3,4,5].map((feature,index)=>{
                return(
                    <div className="flex gap-6 mb-6" key={index}>
                    {
                        ThemeFeature2.map((item)=>{
                            return(
                                <div key={item.key} className="py-6 px-8 rounded-base elevation-1 flex gap-3 items-center bg-white dark:bg-dark ">
                                   <Icon icon={item.icon} className="text-primary text-2xl shrink-0" />
                                    <p className="text-[15px] font-semibold whitespace-nowrap text-link dark:text-darklink">{item.title}</p>
                                </div>
                            )
                        })
                    }
            </div>
                )
            })
           }
           </div>
           <div className="marquee1-group flex gap-6">
            {
                [0,1,2,3].map((item,index)=>{
                    return(
                        <div className="flex gap-6 mb-6" key={index}>
                        {
                            ThemeFeature3.map((item)=>{
                                return(
                                    <div key={item.key} className="py-6 px-8 rounded-base elevation-1 flex gap-3 items-center bg-white dark:bg-dark ">
                                       <Icon icon={item.icon} className="text-primary text-2xl shrink-0" />
                                        <p className="text-[15px] font-semibold whitespace-nowrap text-link dark:text-darklink">{item.title}</p>
                                    </div>
                                )
                            })
                        }
                       </div>
                    )
                })
            }
           </div>
          </div>
        </>
    )
}
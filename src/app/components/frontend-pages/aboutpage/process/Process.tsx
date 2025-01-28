import briefcase from "/public/images/svgs/icon-briefcase.svg"
import logoicon from "/public/images/logos/logo-icon.svg"
import secondBg from "/public/images/frontend-pages/background/Scene.png"
import speechicon from "/public/images/svgs/icon-speech-bubble.svg"
import appWidget from "/public/images/frontend-pages/background/app-widget.png"
import iconfavourite from "/public/images/svgs/icon-favorites.svg"
import Image from "next/image"

export const Process = () => {
    const ProcessInfo = [
        {
            key:"process1",
            title:"Light & Dark Color Schemes",
            desc:"Choose your preferred visual style effortlessly.",
            bgcolor:"bg-lightwarning dark:bg-lightwarning",
            img:briefcase,
            isBg:false
        },
        {
            key:"process2",
            title:"12+ Ready to Use Application Designs",
            desc:"Instantly deployable designs for your applications.",
            bgcolor:"bg-lightsecondary dark:bg-lightsecondary",
            img:appWidget,
            isBg:true
        },
        {
            key:"process3",
            title:"Code Improvements",
            desc:"Benefit from improvements and optimizations.",
            bgcolor:"bg-lightsuccess dark:bg-lightsuccess",
            img:speechicon,
            isBg:false
        },
        {
            key:"process4",
            title:"50+ UI Components",
            desc:"A rich collection for seamless user experiences.",
            bgcolor:"bg-lighterror dark:bg-lighterror",
            img:iconfavourite,
            isBg:false
        },
    ]
    return (
        <>
         <div className="container-md px-4 lg:py-24 py-12">
           <h3 className="lg:text-40 text-32 font-bold text-link dark:text-white text-center mb-12 leading-tight">The hassle-free setup process</h3>
           <div className="grid grid-cols-12 gap-6">
           {
            ProcessInfo.map((item)=>{
                if(!item.isBg){
                    return(
                        <div key={item.key} className="lg:col-span-3 md:col-span-6 col-span-12">
                        <div className={`py-12 px-4 justify-center rounded-base ${item.bgcolor}`}>
                           <Image src={item.img} alt="image" className="mx-auto" />
                           <h1 className="py-4 text-center font-bold text-link dark:text-white text-lg">{item.title}</h1>
                           <p className="text-lightmuted dark:text-darklink text-base font-normal text-center">{item.desc}</p>
                        </div>
                        </div>
                    )
                }else{
                   return(
                    <div key={item.key} className="lg:col-span-3 md:col-span-6 col-span-12">
                    <div className={`pt-12 px-4 justify-center rounded-base ${item.bgcolor}`}>
                      <h1 className="pb-4 text-center font-bold text-link dark:text-white text-lg px-3">{item.title}</h1>
                      <p className="text-lightmuted mb-6 dark:text-darklink text-base font-normal text-center">{item.desc}</p>
                      <Image src={item.img} alt="image" className="mx-auto px-6" />
                     </div>
                    </div>
                   )
                }
            })
           }
           </div>
         </div>
        </>
    )
}
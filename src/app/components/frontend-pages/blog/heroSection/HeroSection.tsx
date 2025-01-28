export const HeroSection = ({title,desc}:{title:string,desc:string}) => {
    return (
        <>
        <div className="w-full bg-lightprimary dark:bg-lightprimary lg:py-12 py-0">
           <div className="flex w-full justify-center py-12">
               <div className="lg:w-1/2 w-full">
                  <h4 className="text-base font-bold text-primary dark:text-primary uppercase text-center">{title}</h4>
                  <h3 className="lg:text-[56px] text-32 leading-tight font-bold text-link dark:text-white text-center">{desc}</h3>
               </div>
           </div>
        </div>
        </>
    )
}
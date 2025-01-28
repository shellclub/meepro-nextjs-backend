import Image from "next/image"
import CardBox from "../../shared/CardBox"
import s1 from "/public/images/music/s1.jpg";
import s2 from "/public/images/music/s2.jpg";
import s3 from "/public/images/music/s3.jpg";
import s4 from "/public/images/music/s4.jpg";



export const FollowArtists = () => {
    const Artists = [
        {
            key:"artist1",
            profile:s1,
            isSelected:true,
            name:"Dualia"
        },
        {
            key:"artist2",
            profile:s2,
            isSelected:true,
            name:"John"
        },
        {
            key:"artist3",
            profile:s3,
            isSelected:true,
            name:"Smith"
        },
        {
            key:"artist4",
            profile:s4,
            isSelected:false,
            name:"Sia"
        },
        {
            key:"artist5",
            profile:s1,
            isSelected:false,
            name:"Adele"
        },
        {
            key:"artist6",
            profile:s2,
            isSelected:false,
            name:"Dualia"
        },
        {
            key:"artist7",
            profile:s3,
            isSelected:false,
            name:"Sia"
        },
        {
            key:"artist8",
            profile:s4,
            isSelected:false,
            name:"Kathy"
        },
    ]
    return (
        <CardBox>
            <div className="mb-6">
                <h6 className="card-title">Follow Artists</h6>
                <p className="card-subtitle">Tips for following local artists</p>
            </div>
             <div className="flex items-center gap-5 overflow-x-auto">
               {
                Artists.map((item)=>{
                 return(
                    <div key={item.key} className="cursor-pointer group shrink-0">
                    <div className={`p-1 border-2 group-hover:border-primary ${item.isSelected?"border-primary":"border-transparent"} box-content rounded-full`}>
                    <Image src={item.profile} alt="music-profile" className="w-[55px] h-[55px] rounded-full" />
                </div>
                <p className="mt-1 text-center">{item.name}</p>
                </div>
                 )
                })
               }
             </div>
        </CardBox>
    )
}
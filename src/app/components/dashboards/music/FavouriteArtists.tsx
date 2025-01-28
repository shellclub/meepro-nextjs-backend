import Image from "next/image"
import CardBox from "../../shared/CardBox"
import userProfile1 from "/public/images/music/s1.jpg"
import userProfile2 from "/public/images/music/s2.jpg"
import userProfile3 from "/public/images/music/s3.jpg"
import userProfile4 from "/public/images/music/s4.jpg"

export const FavouriteArtists = () => {
    const Artists = [
        {
            key: "artist1",
            profile: userProfile1
        },
        {
            key: "artist2",
            profile: userProfile2
        },
        {
            key: "artist3",
            profile: userProfile3
        },
        {
            key: "artist4",
            profile: userProfile4
        },
    ]
    return (
        <CardBox>
            <div className="mb-6">
                <h6 className="card-title">Favourite Artists</h6>
                <p className="card-subtitle">The iconic music of princep</p>
            </div>
            <div className="flex gap-4 lg:justify-start sm:justify-between flex-wrap">
                {
                    Artists.map((item) => {
                        return (
                            <Image key={item.key} src={item.profile} width={67} alt="profile-image" className="rounded-md" />
                        )
                    })
                }
            </div>
        </CardBox>
    )
}
import Image from "next/image"
import CardBox from "../../shared/CardBox"
import userProfile1 from "/public/images/profile/user-5.jpg"
import userProfile2 from "/public/images/profile/user-2.jpg"
import userProfile3 from "/public/images/profile/user-3.jpg"
import userProfile4 from "/public/images/profile/user-4.jpg"

export const MyFriends = () => {
    const Friends = [
        {
            key: "friend1",
            profile: userProfile1
        },
        {
            key: "friend2",
            profile: userProfile2
        },
        {
            key: "friend3",
            profile: userProfile3
        },
        {
            key: "friend4",
            profile: userProfile4
        },
    ]
    return (
        <CardBox>
            <div className="mb-6">
                <h6 className="card-title">My Friends</h6>
                <p className="card-subtitle">The power of friendship</p>
            </div>
            <div className="flex gap-4 lg:justify-start sm:justify-between flex-wrap">
                {
                    Friends.map((item) => {
                        return (
                            <Image key={item.key} src={item.profile} width={67} alt="profile-image" className="rounded-md" />
                        )
                    })
                }
            </div>
        </CardBox>
    )
}
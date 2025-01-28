import Image from "next/image"
import nftbg from "/public/images/nft/nft-bg.jpg"
import user1 from "/public/images/profile/user-5.jpg"
import etherium from "/public/images/svgs/icon-etherium.svg"
import CardBox from "../../shared/CardBox"

export const CurrencyCard = () => {
    return (
        <CardBox className="p-0 overflow-hidden">
            <Image
                src={nftbg}
                className="w-full"
                alt="nft"
            />
            <CardBox className=" pt-0 pb-5 text-center">
                <div className="flex justify-center -mt-6">
                    <Image
                        src={user1}
                        alt="nft"
                        className="rounded-full border-2 border-white"
                        width={50}
                    />
                </div>
                <div>
                    <h6 className="mb-0  font-semibold text-dark dark:text-white mt-2">
                        The Cat X Takaish
                    </h6>
                </div>
                <div className="flex items-center justify-between mt-2 pb-3 border-b border-border dark:border-darkborder">
                    <div className="text-start">
                        <span className="">Volume</span>
                        <h6 className=" font-semibold text-dark dark:text-white">
                            90,015.90 USD
                        </h6>
                    </div>
                    <div className="text-end">
                        <span className="">Floor Price</span>
                        <h6 className=" font-semibold text-dark dark:text-white">40.00 USD</h6>
                    </div>
                </div>
                <div className="flex items-center gap-3 pt-3">
                    <div className="text-white bg-lightgray dark:bg-darkgray rounded-full h-11 w-11 flex items-center justify-center">
                        <Image
                            src={etherium}
                            alt="icon"
                            className="text-left icon-white ms-1 "
                        />
                    </div>
                    <div>
                        <h6 className=" font-semibold text-dark dark:text-white">1.23 ETH</h6>
                        <span className="text-xs text-bodytext dark:text-darklink">
                            $12,000
                        </span>
                    </div>
                    <div className="  text-dark dark:text-white text-end ms-auto">
                        <span className=" text-error">-6.8%</span>
                    </div>
                </div>
            </CardBox>
        </CardBox>

    )
}
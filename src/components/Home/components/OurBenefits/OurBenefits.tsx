import KjcImage from "../../../../builders/KjcImage/KjcImage.tsx";

const OurBenefits = () => {
    return(
        <>
            <div className="items-center justify-center py-8 ">
                <div className="flex items-center justify-center text-center font-serif capitalize text-3xl">
                    What are the benefits of  joining us ?
                </div>
                <div
                    className="flex items-center rounded-md w-full md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 py-2">
                    <div className="flex space-x-4 w-full">
                        <div className="flex items-center rounded-full w-14">
                            <KjcImage
                                src=""
                                alt="job logo"
                                className="rounded-full h-full w-full"
                            />
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div className="items-center space-y-1">
                                <div
                                    className="font-mono text-xl md:text-2xl text-kjc-950 capitalize"
                                    key=""
                                >
                                   Header content goes here
                                </div>
                                <p className="flex">
                                    Description goes here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurBenefits
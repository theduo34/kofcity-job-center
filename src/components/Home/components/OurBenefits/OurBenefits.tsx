import KjcImage from "../../../../builders/KjcImage/KjcImage.tsx";
import {getOurBenefits} from "./OurBenefits.constants.tsx";
import KjcButton from "../../../../builders/KjcButton";
import {useNavigate} from "react-router-dom";

const OurBenefits = () => {
    const navigate = useNavigate();
    const ourBenefits = getOurBenefits();
    return(
        <>
            <div className="items-center justify-center py-8 space-y-2 md:space-y-4">
                <div className="flex items-center justify-center px-3 text-center font-mono capitalize text-4xl md:text-5xl">
                    What are the benefits of  joining us ?
                </div>
                <div
                    className="flex-none md:flex flex-wrap flex-col md:flex-row space-x-0 md:space-x-8 space-y-4 md:space-y-10 items-center px-4 py-2">
                    {
                        ourBenefits.map((benefit) => (
                            <div className="flex py-4 space-x-4">
                                <div className="flex items-center rounded-full w-14 h-14 border-2 border-kjc-950">
                                    <KjcImage
                                        src={benefit.image}
                                        alt=""
                                        className="rounded-full h-full w-full"
                                    />
                                </div>
                                <div className="items-center">
                                    <div
                                        className="font-mono text-xl md:text-2xl text-kjc-950 capitalize"
                                        key=""
                                    >
                                        {benefit.label}
                                    </div>
                                    <p className="">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={"flex py-4 space-x-4 w-full items-center justify-center"}>
                    <KjcButton
                        className="font-semibold text-xl py-5 px-8 items-center justify-center  capitalize text-kjc-950 bg-kjcBtn-400"
                        onClick={ ()=> navigate("/account/registration")}
                    >
                        Join us now
                    </KjcButton>

                </div>
            </div>
        </>
    )
}
export default OurBenefits
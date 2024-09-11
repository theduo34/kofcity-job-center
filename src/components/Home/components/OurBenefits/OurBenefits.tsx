import KjcImage from "../../../../builders/KjcImage/KjcImage.tsx";
import { getOurBenefits } from "./OurBenefits.constants.tsx";
import { useNavigate } from "react-router-dom";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
    REGISTRATION_ROUTE_PATH,
} from "../../../shared/registration/RegistrationRoutes.constants.ts";

const OurBenefits = () => {
    const navigate = useNavigate();
    const ourBenefits = getOurBenefits();
    return (
        <>
            <div className="items-center justify-center py-8 space-y-2 md:space-y-4">
                <div className="flex items-center justify-center px-3 text-balance font-mono capitalize text-lg md:text-3xl">
                    What are the benefits of joining us?
                </div>
                <div className="flex-none md:flex flex-wrap flex-col md:flex-row gap-x-0 md:gap-x-14 gap-y-4 md:gap-y-10 items-stretch px-4 py-2">
                    {ourBenefits.map((benefit) => (
                        <div className="flex items-center py-4 space-x-4 w-full md:w-auto">
                            <div className="w-20 h-20 md:w-22 md:h-22 rounded-full items-center justify-center">
                                <KjcImage
                                    src={benefit.image}
                                    alt=""
                                    className="rounded-full transition delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div
                                    className="font-semibold text-md md:text-xl capitalize">
                                    {benefit.label}
                                </div>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="flex font-semibold text-lg py-2 md:py-3 w-full lg:w-3/4 xl:w-2/4 mx-auto rounded-md items-center justify-center capitalize shadow-md cursor-pointer text-kjc-950 bg-kjcBtn-200  hover:-translate-y-1 hover:scale-110 hover:bg-kjcBtn-300 ease-in-out duration-300"
                    onClick={() =>
                        navigate(
                            `${ACCOUNT_REGISTRATION_ROUTE_PATH}${REGISTRATION_ROUTE_PATH}`
                        )
                    }
                >
                    Join us now
                </div>
            </div>
        </>
    );
};

export default OurBenefits;

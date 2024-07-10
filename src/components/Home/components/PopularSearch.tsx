import {useNavigate} from "react-router-dom";
import {getJobCategories, getJobTypes} from "../Home.constants.tsx";
import KjcButton from "../../../builders/KjcButton";

const PopularSearch = () => {
    const navigate = useNavigate();
    const jobs = getJobTypes(navigate)
    const jobCategories = getJobCategories(navigate)
    return(
        <>
            <div className="items-center py-4">
                <div className="text-center space-y-4 md:space-y-8">
                    <div className="space-y-2">
                        <div className="font-bold text-2xl md:text-4xl">
                            Discover jobs in Koforidua
                        </div>
                        <div className="items-center justify-center text-red-600 text-base flex mx-auto space-x-2">
                            {
                                jobs.map((job, index) => (
                                    <div
                                        key={job.key}
                                        className="items-center leading-normal"
                                        onClick={job.onClick}
                                    >
                                        {job.label}
                                        {
                                            index < jobs.length - 1 &&
                                            <span className="px-2 text-kjc-950">|</span>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full item-center justify-center shadow-lg bg-white">
                        <div className="flex flex-row items-center justify-around">
                            {
                                jobCategories.map((category, index) => (
                                    <div
                                        key={category.key}
                                        className="font-light text-md md:text-xl py-4"
                                        onClick={category.onClick}
                                    >
                                        {category.label}
                                        {
                                            index < jobs.length - 1 &&
                                            <span className="text-center text-kjc-950">|</span>
                                        }
                                    </div>
                                ))
                            }
                            {/*<div className="w-full">*/}
                            {/*    <KjcButton*/}
                            {/*        className=" font-base md:font-semibold text-md md:text-xl py-4 text-kjc-950 bg-kjcBtn-500"*/}
                            {/*    >*/}
                            {/*        Search*/}
                            {/*    </KjcButton>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div>secthree</div>
                </div>

            </div>
        </>
    )
}
export default PopularSearch;
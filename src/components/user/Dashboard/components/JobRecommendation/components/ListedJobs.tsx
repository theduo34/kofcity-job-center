import KjcButton from "../../../../../../builders/KjcButton/KjcButton.tsx";
import {Bookmark} from "lucide-react";
import {getJobsRecommendation} from "../JobRecommendation.constants.tsx";
import {Pagination} from "antd";

const ListedJobs = () => {

    const jobsRecommedation = getJobsRecommendation()
    return(
        <>
            <div className={" gap-2 md:gap-4"}>
                <div className={"flex flex-col lg:flex-row items-center py-4 gap-2 md:gap-4"}>
                    {
                        jobsRecommedation.map((jobs) => (
                            <div
                                className={"relative w-full h-[350px] lg:w-5/6 items-center border-2 border-gray-200 rounded-lg"}>
                                <div
                                    className="items-center px-4 pb-8">
                                    <div className="items-center space-y-2 py-2 md:py-8 md:space-y-4">
                                        <p className={"items-center"}>
                                            <span className={"text-lg md:text-xl text-kjc-950  font-mono capitalize"}> Job Title: </span>
                                            <span
                                                className={"text-lg md:text-xl items-center font-mono "}> {jobs.jobTitle}</span>
                                        </p>
                                        <p className={"items-center"}>
                                        <span
                                            className={" text-md md:text-lg font-mono capitalize"}> Company Name: </span>
                                            <span
                                                className={"items-center text-md md:text-lg font-normal"}> {jobs.companyName}</span>
                                        </p>
                                        <p className={"items-center"}>
                                            <span
                                                className={"text-lg md:text-2xl font-mono capitalize"}> Skills: </span>
                                            <span
                                                className={"items-center text-mg md:text-lg font-normal"}> {jobs.jobSkills}</span>
                                        </p>
                                        <p className={"items-center"}>
                                            <span
                                                className={"text-md md:text-lg font-mono capitalize"}>Education: </span>
                                            <span
                                                className={"items-center text-md md:text-lg font-normal"}>{jobs.education}</span>
                                        </p>
                                    </div>
                                    <div className={""}>
                                        <div className={""}>
                                            <KjcButton
                                                className={"bottom-0 px-6 rounded-lg bg-kjcBtn-300 text-lg"}
                                            >
                                                Apply Now
                                            </KjcButton>
                                        </div>
                                        <div
                                            className={"flex absolute top-4 right-2 md:right-8 items-center space-x-4 text-2xl"}>
                                            <div>
                                                <Bookmark/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={"text-center "}>
                    <Pagination  defaultCurrent={1} total={50} />
                </div>
            </div>
        </>
    )
}
export default ListedJobs
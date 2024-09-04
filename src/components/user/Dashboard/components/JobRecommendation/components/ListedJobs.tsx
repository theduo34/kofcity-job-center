import KjcButton from "../../../../../../builders/KjcButton/KjcButton.tsx";
import { ArrowRight, Bookmark} from "lucide-react";
import { getJobsRecommendation } from "../JobRecommendation.constants.tsx";
import {Link, useNavigate} from "react-router-dom";
import {EnvironmentOutlined} from "@ant-design/icons";
import {USER_ROUTE_PATH, USER_ROUTE_PATH_JOB_LISTINGS} from "../../../../UserRoutes.constants.ts";

const ListedJobs = () => {
    const navigate = useNavigate();
    const jobsRecommendation = getJobsRecommendation();
    const smallDisplay = window.innerWidth <=1024
    return (
        <>
            <div className={"gap-2 md:gap-4"}>
                <div className={"flex flex-col lg:flex-row items-center justify-evenly py-4 gap-y-8 md:gap-4"}>
                    { smallDisplay ? ( jobsRecommendation.slice(0, 2).map((jobs) => (
                        <div
                            className={"relative bg-white w-full h-[350px] md:h-[400px] lg:h-[450px] p-4 border-2 border-gray-200 rounded-lg flex flex-col justify-between"}>
                            <div className="px-4">
                                <div className="space-y-2 py-2 md:py-8 md:space-y-4">
                                    <p className={"text-lg md:text-xl font-normal capitalize"}>
                                        {jobs.jobTitle}
                                    </p>
                                    <p className={"text-md md:text-lg font-normal capitalize"}>
                                        <span> <EnvironmentOutlined/> </span>
                                        {jobs.jobLocation}
                                    </p>
                                    <p className={"text-md md:text-lg font-normal"}>
                                        {jobs.responsibility}
                                    </p>
                                </div>
                            </div>
                            <div className="px-4 flex justify-between items-center">
                                <KjcButton
                                    className={"w-full py-6 rounded-lg border-2 border-kjcBtn-300 text-lg hover:cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 "}
                                >
                                    Apply Now
                                </KjcButton>
                            </div>
                            <div className="absolute top-4 right-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
                                <Bookmark/>
                            </div>
                        </div>
                    ))
                    ): (
                        jobsRecommendation.slice(0,3).map((jobs) => (
                            <div
                                className={"relative bg-white w-full h-[350px] md:h-[400px] lg:h-[450px] p-4 border-2 border-gray-200 rounded-lg flex flex-col justify-between"}>
                                <div className="px-4">
                                    <div className="space-y-2 py-2 md:py-8 md:space-y-4">
                                        <p className={"text-lg md:text-xl font-normal capitalize"}>
                                            {jobs.jobTitle}
                                        </p>
                                        <p className={"text-md md:text-lg font-normal capitalize"}>
                                            <span> <EnvironmentOutlined/> </span>
                                            {jobs.jobLocation}
                                        </p>
                                        <p className={"text-md md:text-lg font-normal"}>
                                            {jobs.responsibility}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-4 flex justify-between items-center">
                                    <KjcButton
                                        onClick={ () => navigate('')}
                                        className={"w-full  py-6 rounded-lg border-2 border-kjcBtn-300 text-lg hover:cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 "}
                                    >
                                        Apply Now
                                    </KjcButton>
                                </div>
                                <div className="absolute top-4 right-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300">
                                    <Bookmark/>
                                </div>
                            </div>
                        ))
                    )
                    }
                </div>
                <Link to={`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}`}>
                    <p className={"flex text-md text-semibold text-md text-white items-center float-start md:float-end cursor-pointer hover:underline hover:text-kjc-300"}>
                        <span className={"m-2"}>Find more jobs</span> <ArrowRight/>
                    </p>
                </Link>
            </div>
        </>
    )
}
export default ListedJobs;
import KjcButton from "../../../../../../builders/KjcButton/KjcButton.tsx";
import { ArrowRight, Bookmark } from "lucide-react";
import { getJobsRecommendation } from "../JobRecommendation.constants.tsx";
import { Link, useNavigate } from "react-router-dom";
import { EnvironmentOutlined } from "@ant-design/icons";
import { USER_ROUTE_PATH, USER_ROUTE_PATH_JOB_LISTINGS } from "../../../../UserRoutes.constants.ts";
import { useState, useEffect } from "react";

const getSavedJobs = () => {
    const savedJobs = localStorage.getItem("savedJobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
};

const saveJobs = (jobs: string[]) => {
    localStorage.setItem("savedJobs", JSON.stringify(jobs));
};

const ListedJobs = () => {
    const navigate = useNavigate();
    const [bookmarkedJob, setBookmarkedJob] = useState<{ [key: string]: boolean }>({});
    const [savedJobs, setSavedJobs] = useState<string[]>([]);

    const jobsRecommendation = getJobsRecommendation();

    useEffect(() => {
        setSavedJobs(getSavedJobs());
    }, []);

    useEffect(() => {
        saveJobs(savedJobs);
    }, [savedJobs]);

    const toggleBookmark = (key: string) => {
        setBookmarkedJob((prevState) => {
            const isSaved = prevState[key];
            const updatedSavedJobs = isSaved
                ? savedJobs.filter((id) => id !== key)
                : [...savedJobs, key];

            setSavedJobs(updatedSavedJobs);

            return {
                ...prevState,
                [key]: !isSaved,
            };
        });
    };

    return (
        <>
            <div className="gap-2 md:gap-4">
                <div className="flex flex-col lg:flex-row items-stretch justify-evenly py-4 gap-y-8 md:gap-4">
                    {window.innerWidth <= 1024 ? (
                        jobsRecommendation.slice(0, 2).map((jobs) => (
                            <div
                                key={jobs.key}
                                className="relative bg-white w-full min-h-[350px] md:min-h-[400px] lg:min-h-[450px] p-4 border-2 border-gray-200 rounded-lg flex flex-col justify-between"
                            >
                                <div className="px-4">
                                    <div className="space-y-2 py-2 md:py-8 md:space-y-4">
                                        <p className="text-lg md:text-xl font-normal capitalize">
                                            {jobs.jobTitle}
                                        </p>
                                        <p className="text-md md:text-lg font-normal capitalize">
                                            <span> <EnvironmentOutlined /> </span>
                                            {jobs.jobLocation}
                                        </p>
                                        <p className="text-md md:text-lg font-normal">
                                            {jobs.responsibility}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-4 flex justify-between items-center">
                                    <KjcButton
                                        className="w-full py-6 rounded-lg border-2 border-kjcBtn-300 text-lg hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 "
                                    >
                                        Apply Now
                                    </KjcButton>
                                </div>
                                <div className="absolute top-4 right-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
                                     onClick={() => toggleBookmark(jobs.key as string)}
                                >
                                    {bookmarkedJob[jobs.key as string] ? <Bookmark style={{ fill: "black" }} /> : <Bookmark />}
                                </div>
                            </div>
                        ))
                    ) : (
                        jobsRecommendation.slice(0, 3).map((jobs) => (
                            <div
                                key={jobs.key}
                                className="relative bg-white w-full min-h-[350px] md:min-h-[400px] lg:min-h-[450px] p-4 border-2 border-gray-200 rounded-lg flex flex-col justify-between"
                            >
                                <div className="px-4">
                                    <div className="space-y-2 py-2 md:py-8 md:space-y-4">
                                        <p className="text-lg md:text-xl font-semibold capitalize">
                                            {jobs.jobTitle}
                                        </p>
                                        <p className="text-md md:text-lg font-normal capitalize">
                                            <span> <EnvironmentOutlined /> </span>
                                            {jobs.jobLocation}
                                        </p>
                                        <p className="text-md md:text-lg font-normal">
                                            {jobs.responsibility}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-4 flex justify-between items-center">
                                    <KjcButton
                                        onClick={ () =>navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}?jobKey=${jobs.key}`)}
                                        className="w-full py-4 md:py-5 rounded-lg border-2 border-kjcBtn-300 text-md md:text-lg hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 "
                                    >
                                        Apply Now
                                    </KjcButton>
                                </div>
                                <div className="absolute top-1 md:top-4 right-1 md:right-4 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
                                     onClick={() => toggleBookmark(jobs.key as string)}
                                >
                                    {bookmarkedJob[jobs.key as string] ? <Bookmark style={{ fill: "black" }} /> : <Bookmark />}
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <Link to={`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}`}>
                    <p className="flex text-md font-semibold text-white items-center float-start md:float-end cursor-pointer hover:underline hover:text-kjc-300">
                        <span className="m-2">Find more jobs</span> <ArrowRight />
                    </p>
                </Link>
            </div>
        </>
    );
};

export default ListedJobs;

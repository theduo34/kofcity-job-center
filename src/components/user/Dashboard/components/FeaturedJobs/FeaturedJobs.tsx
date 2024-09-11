import KjcCarousel from "../../../../../builders/KjcCarousel";
import KjcButton from "../../../../../builders/KjcButton";
import { getFeaturedJobs } from "./FeaturedJobs.constants.tsx";
import { Bookmark } from 'lucide-react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {USER_ROUTE_PATH, USER_ROUTE_PATH_JOB_LISTINGS} from "../../../UserRoutes.constants.ts";

//eslint-disable-next-line
const JobDetail = ({ label, value }: { label: string; value: any }) => (
    <p className="items-center">
        <span className="text-md md:text-xl capitalize">{label}: </span>
        <span className="items-center text-md md:text-lg font-normal">{value}</span>
    </p>
);

const FeaturedJobs = () => {
    const [bookmarkedJob, setBookmarkedJob] = useState<{ [key: string]: boolean }>({});
    const navigate = useNavigate();

    const featuredJobs = getFeaturedJobs();

    const toggleBookmark = (key: string) => {
        setBookmarkedJob((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className="items-center">
            <div className="leading-tight font-mono text-md md:text-2xl pb-8 text-kjc-950">Featured Jobs</div>
            <div className="relative py-4 border-2 border-neutral-200 rounded-lg">
                <KjcCarousel
                    arrows
                    dots={true}
                    dotsPosition="bottom"
                    className="kjc-carousel rounded-lg"
                    autoplay={true}
                    infinite={false}
                    autoplaySpeed={2000}
                >
                    {featuredJobs.map(({ jobTitle, companyName, jobSkills, jobType, jobLocation, education, key }) => (
                        <div className="relative items-center px-8 lg:px-16 pb-14" key={key}>
                            <div className="space-y-2 py-2 md:py-8 md:space-y-4">
                                <h3 className="text-md md:text-2xl font-semibold capitalize">{jobTitle}</h3>
                                <JobDetail label="Company Name" value={companyName} />
                                <JobDetail label="Skills" value={jobSkills} />
                                <JobDetail label="Job Type" value={jobType} />
                                <JobDetail label="Location" value={jobLocation} />
                                <JobDetail label="Education" value={education} />
                            </div>
                            <div className="w-full pt-8 flex xl:w-2/5 justify-between">
                                <KjcButton
                                    className="py-4 md:py-5 px-12 rounded-lg border-2 border-kjcBtn-300 text-md md:text-lg hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
                                    onClick={ () =>navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}?jobKey=${key}`)}
                                >
                                    Apply Now
                                </KjcButton>
                            </div>

                            {/* Bookmark button */}
                            <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10 cursor-pointer" onClick={() => toggleBookmark(key as string)}>
                                {bookmarkedJob[key as string] ? <Bookmark style={{ fill: "black" }} /> : <Bookmark />}
                            </div>
                        </div>
                    ))}
                </KjcCarousel>
            </div>
        </div>
    );
};

export default FeaturedJobs;

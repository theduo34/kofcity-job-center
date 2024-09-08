import KjcCarousel from "../../../../../builders/KjcCarousel";
import KjcButton from "../../../../../builders/KjcButton";
import { getFeaturedJobs } from "./FeaturedJobs.constants.tsx";
import { Bookmark } from 'lucide-react';
import { useState } from "react";

//eslint-disable-next-line
const JobDetail = ({ label, value }: { label: string; value: any }) => (
    <p className="items-center">
        <span className="text-lg md:text-2xl font-mono capitalize">{label}: </span>
        <span className="items-center text-lg md:text-xl font-normal">{value}</span>
    </p>
);

const FeaturedJobs = () => {
    const [bookmarkedJob, setBookmarkedJob] = useState<{ [key: string]: boolean }>({});
    const featuredJobs = getFeaturedJobs();

    const toggleBookmark = (key: string) => {
        setBookmarkedJob((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className="items-center">
            <h2 className="leading-tight font-mono text-xl md:text-3xl pb-8 text-kjc-950">Featured Jobs</h2>
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
                                <h3 className="text-xl md:text-3xl font-mono capitalize">{jobTitle}</h3>
                                <JobDetail label="Company Name" value={companyName} />
                                <JobDetail label="Skills" value={jobSkills} />
                                <JobDetail label="Job Type" value={jobType} />
                                <JobDetail label="Location" value={jobLocation} />
                                <JobDetail label="Education" value={education} />
                            </div>
                            <div className="w-full pt-8 flex xl:w-2/5 justify-between">
                                <KjcButton
                                    className="py-6 px-12 rounded-lg border-2 border-kjcBtn-300 text-lg hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300"
                                >
                                    Apply Now
                                </KjcButton>
                            </div>

                            {/* Bookmark button */}
                            <div className="absolute top-4 right-6 z-10 cursor-pointer" onClick={() => toggleBookmark(key as string)}>
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

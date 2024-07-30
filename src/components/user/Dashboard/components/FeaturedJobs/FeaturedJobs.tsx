import KjcCarousel from "../../../../../builders/KjcCarousel";
import KjcButton from "../../../../../builders/KjcButton";
import {getFeaturedJobs} from "./FeaturedJobs.constants.tsx";
import { Bookmark } from 'lucide-react';


/**
 * Renders the featured jobs component.
 *
 * @return {JSX.Element} The rendered featured jobs component.
 * @return {featured jobs} high demand jobs with competitive salary
 */
const FeaturedJobs = () => {
    const featuredJobs = getFeaturedJobs();
    return (
        <div className="items-center ">
            <div className="items-center leading-tight font-mono text-xl md:text-3xl pb-8 text-kjc-950">
                Featured Jobs
            </div>
            <div className="relative py-4 items-center border-2 border-neutral-200 rounded-lg">
                <KjcCarousel
                    arrows
                    dots={true}
                    dotsPosition="bottom"
                    className="kjc-carousel items-center rounded-lg"
                >
                    {
                        featuredJobs.map( featuredJob => (
                            <div
                                className="items-center px-8 lg:px-16 pb-14 ">
                                <div className="items-center space-y-2 py-2 md:py-8 md:space-y-4">
                                    <p className={"items-center"}>
                                        <span className={"text-xl md:text-3xl text-kjc-950  font-mono capitalize"}> Job Title: </span>
                                        <span
                                            className={"text-xl md:text-3xl items-center font-mono "}> {featuredJob.jobTitle}</span>
                                    </p>
                                    <p className={"items-center"}>
                                        <span
                                            className={" text-lg md:text-2xl font-mono capitalize"}> Company Name: </span>
                                        <span className={"items-center  text-lg md:text-2xl font-normal"}> {featuredJob.companyName}</span>
                                    </p>
                                    <p className={"items-center"}>
                                        <span className={"text-lg md:text-2xl font-mono capitalize"}> Skills: </span>
                                        <span className={"items-center text-lg md:text-2xl font-normal"}> {featuredJob.jobSkills}</span>
                                    </p>
                                    <p className={"items-center"}>
                                        <span className={"text-lg md:text-2xl font-mono capitalize"}> Job Type: </span>
                                        <span className={"items-center text-lg md:text-2xl font-normal"}> {featuredJob.jobType}</span>
                                    </p>
                                    <p className={"items-center"}>
                                        <span className={"text-lg md:text-2xl font-mono capitalize"}> Location: </span>
                                        <span className={"items-center text-lg md:text-2xl font-normal"}> {featuredJob.jobLocation}</span>
                                    </p>
                                    <p className={"items-center"}>
                                        <span className={"text-lg md:text-2xl font-mono capitalize"}>Education: </span>
                                        <span className={"items-center text-lg md:text-2xl font-normal"}> {featuredJob.education}</span>
                                    </p>
                                </div>
                                <div className={"w-full pt-8 flex xl:w-2/5 items-center justify-between"}>
                                    <div>
                                        <KjcButton
                                            className={"py-4 px-6 rounded-lg bg-kjcBtn-300 text-lg"}
                                        >
                                            Apply Now
                                        </KjcButton>
                                    </div>
                                    <div className={"flex absolute top-0 right-2 md:right-8 items-center space-x-4 text-2xl"}>
                                        <div>
                                            <Bookmark/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </KjcCarousel>
            </div>
        </div>
    );
};

export default FeaturedJobs;

import { Bookmark, CircleArrowOutUpRight } from "lucide-react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { listedJobs } from "../JobListings.constants.tsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {bookmarkedStateProps} from "../JobListings.tsx";
import JobDescription, {jobDetails} from "./JobDescription.tsx";

const MediumFilterListedJob = (props: bookmarkedStateProps) => {
    const location = useLocation();
    const [selectedJobKey, setSelectedJobKey] = useState<jobDetails | null>(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const jobKey = queryParams.get('jobKey');
        if (jobKey) {
            //eslint-disable-next-line
            // @ts-ignore
            setSelectedJobKey(jobKey);
        }
    }, [location.search]);

    if(selectedJobKey) {
        return(
            <JobDescription
                jobDescription={selectedJobKey}
                bookmark = {props}
                handleBackBtnClick = { () => setSelectedJobKey(null) }
            />
        )
    }

    return (
        <>
            <div className="items-center w-full space-y-8">
                {/* Listed Jobs */}
                {listedJobs.map((job) => (
                    <div
                        key={job.key}
                        className={`p-4 rounded-lg bg-white space-y-8 cursor-pointer ${
                            selectedJobKey === job.key ? "border-2 border-neutral-400" : ""
                        }`}

                    >
                        <div className="flex items-center justify-between">
                            <p className="flex items-center space-x-2">
                                <span className="flex items-center justify-center rounded-md text-white w-6 h-6 bg-kjcBtn-900 font-semibold">B</span>
                                <span className="items-center leading-normal">New</span>
                            </p>
                            <p
                                onClick={(e) => {
                                    e.stopPropagation();
                                    props.toggleBookmark(job.key as string);
                                }}
                            >
                                {props.bookmarkedJob[job.key as string] ? (
                                    <Bookmark style={{ fill: "black" }} />
                                ) : (
                                    <Bookmark />
                                )}
                            </p>
                        </div>
                        <div className="items-center">
                            <h1 className="text-lg text-balance font-semibold leading-normal">
                                {job.jobTitle}
                            </h1>
                            <h3 className="text-balance items-center leading-normal">
                                {job.companyName}
                            </h3>
                            <div className="flex list-disc text-balance items-center leading-normal space-x-2">
                                <li className="capitalize">
                                    <EnvironmentOutlined style={{ fontSize: "12px" }} /> {job.jobLocation}
                                </li>
                                <li>1 day ago</li>
                            </div>
                        </div>
                        <div className="w-full space-x-1 flex py-2 items-center justify-center bottom-0 bg-kjcBtn-200 shadow-lg rounded-lg hover:bg-kjcBtn-300 cursor-pointer ease-in-out"
                             onClick={() => setSelectedJobKey(job)}
                        >
                            <CircleArrowOutUpRight size={18} />
                            <span className="items-center font-semibold ">Apply</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MediumFilterListedJob;

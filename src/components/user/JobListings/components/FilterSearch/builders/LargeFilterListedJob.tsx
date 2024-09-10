import { Bookmark, CircleArrowOutUpRight } from "lucide-react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { listedJobs } from "../../../JobListings.constants.tsx";
import { bookmarkedStateProps } from "../FilterSearch.interface.ts";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { DESCRIPTION_ROUTE_PATH } from "../../../JobListingsRoutes.constants.ts";

const LargeFilterListedJob = (props: bookmarkedStateProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedJobKey, setSelectedJobKey] = useState<string | null>(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const jobKey = queryParams.get('jobKey');
        if (jobKey) {
            setSelectedJobKey(jobKey);
        }
    }, [location.search]);

    return (
        <>
            <div className="grid grid-cols-2 gap-8">
                {/* Listed Jobs */}
                {listedJobs.map((job) => (
                    <div
                        key={job.key}
                        className={`p-4 rounded-lg bg-white space-y-8 ${
                            selectedJobKey === job.key ? "border-2 border-neutral-400" : ""
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <p className="flex items-center space-x-2">
                                <span className="flex items-center justify-center rounded-md text-white w-8 h-8 bg-kjcBtn-900 font-semibold">B</span>
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
                            <h1 className="text-xl text-balance font-semibold leading-normal">
                                {job.jobTitle}
                            </h1>
                            <h3 className="text-lg text-balance items-center leading-normal">
                                {job.companyName}
                            </h3>
                            <div className="flex list-disc text-lg text-balance items-center leading-normal space-x-4">
                                <li className="capitalize">
                                    <EnvironmentOutlined style={{ fontSize: "16px" }} /> {job.jobLocation}
                                </li>
                                <li>1 day ago</li>
                            </div>
                        </div>
                        <div
                            className="w-full space-x-1 flex py-3 items-center justify-center bottom-0 bg-kjcBtn-200 shadow-lg rounded-lg hover:bg-kjcBtn-300 cursor-pointer ease-in-out"
                            onClick={() => navigate(`${DESCRIPTION_ROUTE_PATH}/${job.key}`)}
                        >
                            <CircleArrowOutUpRight size={18} />
                            <span className="items-center font-semibold text-xl">Apply</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LargeFilterListedJob;

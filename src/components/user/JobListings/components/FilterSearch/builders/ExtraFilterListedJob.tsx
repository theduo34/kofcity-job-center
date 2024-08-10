import { Bookmark, CircleArrowOutUpRight } from "lucide-react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useState } from "react";
import {listedJobs} from "../../../JobListings.constants.tsx";

const ExtraFilterListedJob = () => {
    const [selectedJobKey, setSelectedJobKey] = useState<string | null>(null);
    const [bookmarkedJob, setBookmarkedJob] = useState<{ [key: string]: boolean }>({});

    const handleShowDescription = (key: string) => {
        setSelectedJobKey(key);
    };

    const toggleBookmark = (key: string) => {
        setBookmarkedJob((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };



    return (
        <>
            <div className="flex flex-col xl:grid xl:grid-cols-2 2xl:flex-row items-center justify-between space-x-4">
                <div className="w-full xl:w-full 2xl:basis-1/6 h-[1300px] overflow-y-auto">
                    {/* Listed jobs section */}
                    <div className="space-y-4">
                        {listedJobs.map((job) => (
                            <div
                                key={job.key}
                                className={`p-8 mb-4 rounded-lg bg-white space-y-8 cursor-pointer ${
                                    selectedJobKey === job.key ? "border-2 border-neutral-400" : ""
                                }`}
                                onClick={() => handleShowDescription(job.key)}
                            >
                                <div className="flex items-center justify-between">
                                    <p className="flex items-center space-x-2">
                                        <span className="flex items-center justify-center rounded-md text-white w-8 h-8 bg-kjcBtn-900 font-semibold">B</span>
                                        <span className="items-center leading-normal">New</span>
                                    </p>
                                    <p
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleBookmark(job.key);
                                        }}
                                    >
                                        {bookmarkedJob[job.key] ? <Bookmark style={{ fill: "black" }} /> : <Bookmark />}
                                    </p>
                                </div>
                                <div className="items-center">
                                    <h1 className="text-2xl text-balance font-semibold leading-normal">
                                        {job.jobTitle}
                                    </h1>
                                    <h3 className="text-lg text-balance items-center leading-normal">
                                        {job.companyName}
                                    </h3>
                                    <div className="flex list-disc text-lg text-balance items-center leading-normal space-x-4">
                                        <li className={"capitalize"}><EnvironmentOutlined style={{ fontSize: "16px" }} /> {job.jobLocation}</li>
                                        <li>1 day ago</li>
                                    </div>
                                </div>
                                <div className="w-full space-x-1 flex py-3 items-center justify-center bg-kjcBtn-200 shadow-lg rounded-lg hover:bg-kjcBtn-300 cursor-pointer ease-in-out">
                                    <CircleArrowOutUpRight size={18} />
                                    <span className="items-center font-semibold text-xl">Apply</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Job description tab */}
                <div className="w-full 2xl:basis-4/6 rounded-lg bg-white h-[1300px] overflow-y-auto">
                    {listedJobs.map((job) => (
                        selectedJobKey === job.key && (
                            <div key={job.key}>
                                <div className="relative w-full p-4 items-center top-0 shadow-lg space-x-8">
                                    <div className="flex items-center space-x-4">
                                        <p className="flex items-center justify-center w-14 h-14 bg-kjcBtn-900">
                                            <span className="text-white">B</span>
                                        </p>
                                        <h1 className="text-2xl text-balance font-semibold leading-normal">
                                            {job.jobTitle}
                                        </h1>
                                    </div>
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex list-disc capitalize space-x-2">
                                            <li>{job.jobType}</li>
                                            <p><EnvironmentOutlined style={{ fontSize: "14px" }} /> {job.jobLocation}</p>
                                            <li>1 day ago</li>
                                        </div>
                                        <div
                                            className="space-x-1 flex py-2 px-16 items-center bg-kjcBtn-200 shadow-lg rounded-lg hover:bg-kjcBtn-300 cursor-pointer ease-in-out"
                                        >
                                            <CircleArrowOutUpRight size={14} />
                                            <span className="items-center font-semibold">Apply</span>
                                        </div>
                                    </div>
                                    <p
                                        className="flex absolute top-4 right-4"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleBookmark(job.key);
                                        }}
                                    >
                                        {bookmarkedJob[job.key] ? <Bookmark style={{ fill: "black" }} /> : <Bookmark />}
                                    </p>
                                </div>
                                <div className="p-4 space-y-8 text-lg">
                                    <p>Skills: {job.jobSkills}</p>
                                    <p>Education: {job.education}</p>
                                    <p>Salary: {job.jobSalary}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExtraFilterListedJob;

import { Bookmark, CircleArrowOutUpRight } from "lucide-react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { listedJobs } from "../JobListings.constants.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import { bookmarkedStateProps, FilterCriteriaProps } from "../JobListings.tsx";
import {useAuth} from "../../../../shared/authContext/AuthContext.tsx";
import {AUTH_ROUTE_PATH, LOGIN_PATH} from "../../../../shared/auth/AuthRoutes.constants.ts";
import {message} from "antd";

const ExtraLargeFilterListedJob = (props: bookmarkedStateProps & { filterCriteria: FilterCriteriaProps }) => {
    const [selectedJobKey, setSelectedJobKey] = useState<string | null>(null);
    const location = useLocation();

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const { currentUser } = useAuth();

    const navigate = useNavigate();

    const filteredJobs = listedJobs.filter(job => {
        const matchesRemote = props.filterCriteria.remote_only ? job.isRemote : true;
        const matchesJobType = props.filterCriteria.job_type ? job.jobType === props.filterCriteria.job_type : true;
        const matchesIndustry = props.filterCriteria.industry ? job.industry === props.filterCriteria.industry : true;
        const matchesLocation = props.filterCriteria.location ? job.jobLocation === props.filterCriteria.location : true;
        const matchesRoleLevel = props.filterCriteria.role_level ? job.roleLevel === props.filterCriteria.role_level : true;
        return matchesRemote && matchesJobType && matchesIndustry && matchesLocation && matchesRoleLevel;
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const jobKey = queryParams.get('jobKey');
        if (jobKey) {
            setSelectedJobKey(jobKey);
        }
    }, [location.search]);

    const handleShowDescription = (key: string) => {
        setSelectedJobKey(key);
    };

    useEffect(() => {
        const checkUser = async () => {
            if (currentUser) {
                try {
                    const token = await currentUser.getIdToken();
                    if (token) {
                        setAuthenticated(true);
                    } else {
                        setAuthenticated(false);
                    }
                } catch (error) {
                    console.error("Error fetching token", error);
                    setAuthenticated(false);
                }
            } else {
                setAuthenticated(false);
            }
        };

        checkUser();
    }, [currentUser]);

    const handleApplyClick = () => {
        if(!authenticated) {
            const currentPath = window.location.pathname;

            localStorage.setItem("redirectUrl", currentPath);
            navigate(`${AUTH_ROUTE_PATH}${LOGIN_PATH}`)
            message.info("Login Required", 2 )
        } else {
            window.location.href = "mailto:koficyjobcenter2024@gmail.com";
        }
    }

    return (
        <>
            <div className="flex flex-col xl:grid xl:grid-cols-2 2xl:flex-row items-start justify-between space-x-4">
                <div className="w-full xl:w-full 2xl:basis-1/6 h-[1300px] overflow-y-auto">
                    {/* Listed jobs section */}
                    <div className="space-y-4">
                        {filteredJobs.length === 0 ? (
                            <div className="p-4 text-center text-lg font-semibold">
                                No jobs found matching your criteria.
                            </div>
                        ) : (
                            filteredJobs.map((job) => (
                                <div
                                    key={job.key}
                                    className={`p-8 mb-4 rounded-lg bg-white space-y-8 cursor-pointer ${
                                        selectedJobKey === job.key ? "border-2 border-neutral-400" : ""
                                    }`}
                                    onClick={() => handleShowDescription(job.key as string)}
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
                                            {props.bookmarkedJob[job.key as string] ? <Bookmark style={{ fill: "black" }} /> : <Bookmark />}
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
                                            <li className={"capitalize"}><EnvironmentOutlined style={{ fontSize: "16px" }} /> {job.jobLocation}</li>
                                            <li>1 day ago</li>
                                        </div>
                                    </div>
                                    <div className="w-full space-x-1 flex py-3 items-center justify-center bg-kjcBtn-200 shadow-lg rounded-lg hover:bg-kjcBtn-300 cursor-pointer ease-in-out">
                                        <CircleArrowOutUpRight size={18} />
                                        <span className="items-center font-semibold text-xl">Apply</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Job description tab */}
                <div className="w-full 2xl:basis-4/6 rounded-lg bg-white overflow-y-auto">
                    {filteredJobs.map((job) => (
                        selectedJobKey === job.key && (
                            <div key={job.key}>
                                <div className="relative w-full p-4 items-center top-0 shadow-lg space-x-8">
                                    <div className="flex items-center space-x-4">
                                        <p className="flex items-center justify-center w-14 h-14 bg-kjcBtn-900">
                                            <span className="text-white">B</span>
                                        </p>
                                        <h1 className="text-xl text-balance font-semibold leading-normal">
                                            {job.jobTitle}
                                        </h1>
                                    </div>
                                    <div className="flex items-center justify-between space-x-4">
                                        <div className="flex list-disc capitalize space-x-2">
                                            <li>{job.jobType}</li>
                                            <p><EnvironmentOutlined style={{fontSize: "14px"}}/> {job.jobLocation}</p>
                                            <li>1 day ago</li>
                                        </div>
                                        <div
                                            className="space-x-1 flex py-2 px-16 items-center bg-kjcBtn-200 shadow-lg rounded-lg hover:bg-kjcBtn-300 cursor-pointer ease-in-out"
                                            onClick={handleApplyClick}
                                        >
                                            <CircleArrowOutUpRight size={14}/>
                                            <span className="items-center font-semibold">Apply</span>
                                        </div>
                                    </div>
                                    <p
                                        className="flex absolute top-4 right-4"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            props.toggleBookmark(job.key as string);
                                        }}
                                    >
                                        {props.bookmarkedJob[job.key] ? <Bookmark style={{fill: "black"}}/> :
                                            <Bookmark/>}
                                    </p>
                                </div>
                                <div className="p-4 space-y-8 text-lg">
                                    <p className={"uppercase leading-normal font-semibold text-xl "}>
                                        {job.companyName}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Industry:</span>
                                        {job.industry}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Job Title:</span>
                                        {job.jobTitle}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Job Description:</span>
                                        {job.jobDescription}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Job Responsibilities:</span>
                                        {job.jobResponsibility}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Skills:</span>
                                        {job.jobSkills}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Education:</span>
                                        {job.education}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Salary:</span>
                                        {job.jobSalary}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Job Type:</span>
                                        {job.jobType}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Location:</span>
                                        {job.jobLocation}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Remote Option:</span>
                                        {job.isRemote ? "Yes" : "No"}
                                    </p>
                                    <p>
                                        <span className="font-semibold pe-1">Role Level:</span>
                                        {job.roleLevel}
                                    </p>
                                </div>


                            </div>
                        )
                    ))}
                </div>
            </div>
        </>
    );
};

export default ExtraLargeFilterListedJob;

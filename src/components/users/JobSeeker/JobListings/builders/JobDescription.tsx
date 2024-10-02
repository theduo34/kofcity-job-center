import { Bookmark, CircleArrowOutUpRight } from "lucide-react";
import {ArrowLeftOutlined,EnvironmentOutlined} from "@ant-design/icons";
import {Col, message, Row} from "antd";
import { bookmarkedStateProps } from "../JobListings.tsx";
import { useEffect, useState } from "react";
import { AUTH_ROUTE_PATH, LOGIN_PATH } from "../../../../shared/auth/AuthRoutes.constants.ts";
import { useAuth } from "../../../../shared/authContext/AuthContext.tsx";
import { useNavigate } from "react-router-dom";

export type jobDetails = {
    jobTitle?: string;
    companyName?: string;
    jobDescription?: string;
    jobType?: string;
    jobLocation?: string;
    jobSkills?: string;
    education?: string;
    jobSalary?: string;
    jobOverview?: string;
    jobResponsibility?: string;
    key?: string;
    isRemote?: boolean;
    roleLevel?: string;
    industry?: string;
};

interface JobDescriptionProps {
    jobDescription: jobDetails;
    handleBackBtnClick?: () => void;
    bookmark: bookmarkedStateProps;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ jobDescription, bookmark, handleBackBtnClick }: JobDescriptionProps) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

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
        if (!authenticated) {
            const currentPath = window.location.pathname;

            localStorage.setItem("redirectUrl", currentPath);
            navigate(`${AUTH_ROUTE_PATH}${LOGIN_PATH}`);
            message.info("Login Required", 2);
        } else {
            ("")  //link to apply goes here
        }
    };

    return (
        <Row>
            <Col>
                <div
                    className={"flex items-center justify-center p-1 border border-gray-300 rounded-lg cursor-pointer bg-amber-50 px-2 mb-1"}
                    onClick={handleBackBtnClick}
                >
                    <ArrowLeftOutlined
                        className="cursor-pointer "
                    />
                    <span className={"ml-1 capitalize font-semibold"}>listings page</span>
                </div>
            </Col>
            <Col
                xs={{span: 24}}
                sm={{span: 24}}
                md={{span: 16, offset: 4}}
                className=""
            >
                <div className="w-full rounded-lg bg-white overflow-y-auto">
                    <div key={jobDescription.key}>
                        <div className="relative w-full p-4 items-center top-0 shadow-lg space-y-4">
                            <div className="flex items-center space-x-4">
                                <p className="flex items-center justify-center w-6 h-6 md:w-14 md:h-14 bg-kjcBtn-900">
                                    <span className="text-white">B</span>
                                </p>
                                <h1 className="text-md md:text-xl text-balance font-semibold leading-normal">
                                    {jobDescription.jobTitle}
                                </h1>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                                <div className="flex flex-wrap list-disc capitalize  text-md md:text-lg gap-2">
                                    <li>{jobDescription.jobType}</li>
                                    <p>
                                        <EnvironmentOutlined style={{fontSize: "14px"}}/>{" "}
                                        {jobDescription.jobLocation}
                                    </p>
                                    <li>1 day ago</li>
                                </div>
                            </div>
                            <div
                                className="w-full flex py-2 items-center justify-center bottom-0 bg-kjcBtn-200 shadow-lg rounded-lg hover:bg-kjcBtn-300 cursor-pointer ease-in-out"
                                onClick={handleApplyClick}
                            >
                                <CircleArrowOutUpRight size={18}/>
                                <span className="items-center font-semibold ">Apply</span>
                            </div>
                            <p
                                className="flex absolute top-1 right-4"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    bookmark.toggleBookmark(jobDescription.key as string);
                                }}
                            >
                                {bookmark.bookmarkedJob[jobDescription.key as string] ? (
                                    <Bookmark style={{fill: "black"}}/>
                                ) : (
                                    <Bookmark/>
                                )}
                            </p>
                        </div>
                        {/* Job details section */}
                        <div className="p-4 space-y-4 text-lg">
                            <p className={"font-semibold uppercase leading-normal"}>
                                {jobDescription.companyName}
                            </p>
                            <p><span className="font-semibold pe-1">Industry:</span>
                                {jobDescription.industry}
                            </p>
                            <p><span className="font-semibold pe-1">Job Title:</span>
                                {jobDescription.jobTitle}
                            </p>
                            <p><span className="font-semibold pe-1">Job Description:</span>
                                {jobDescription.jobDescription}
                            </p>
                            <p><span className="font-semibold pe-1">Job Responsibilities:</span>
                                {jobDescription.jobResponsibility}
                            </p>
                            <p><span className="font-semibold pe-1">Skills Required:</span>
                                {jobDescription.jobSkills}
                            </p>
                            <p><span className="font-semibold pe-1">Education Requirements:</span>
                                {jobDescription.education}
                            </p>
                            <p><span className="font-semibold pe-1">Salary:</span>
                                {jobDescription.jobSalary}
                            </p>
                            <p><span className="font-semibold pe-1">Job Type:</span>
                                {jobDescription.jobType}
                            </p>
                            <p><span className="font-semibold pe-1">Location:</span>
                                {jobDescription.jobLocation}
                            </p>
                            <p><span className="font-semibold pe-1">Remote Option:</span>
                                {jobDescription.isRemote ? "Yes" : "No"}
                            </p>
                            <p><span className="font-semibold pe-1">Role Level:</span>
                                {jobDescription.roleLevel}
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default JobDescription;

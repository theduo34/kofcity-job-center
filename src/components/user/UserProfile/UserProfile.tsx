import { Col, Row } from "antd";
import { withBaseLayout } from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {
    LikeOutlined,
    NotificationOutlined,
    SaveOutlined,
    SettingOutlined,
    StarOutlined,
    UserOutlined,
    DownOutlined, UpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import MyProfile from "./components/MyProfile.tsx";
import RecommendedJobs from "./components/RecommendedJobs.tsx";
import SavedJobs from "./components/SavedJobs.tsx";
import JobAlerts from "./components/JobAlerts.tsx";
import FeaturedJobs from "./components/FeaturedJobs.tsx";
import Settings from "./components/Settings.tsx";
import {useNavigate} from "react-router-dom";
import {
    USER_FEATURED_JOBS_PATH, USER_JOB_ALERTS_PATH,
    USER_MY_PROFILE_PATH,
    USER_PROFILE_PATH, USER_RECOMMENDED_JOBS_PATH,
    USER_ROUTE_PATH, USER_SAVED_JOBS_PATH, USER_SETTINGS_PATH
} from "../UserRoutes.constants.ts";

interface UserProfileTabProps {
    key: string;
    label: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const UserProfile = () => {
    const [selectedItem, setSelectedItem] = useState<string>("myProfile");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleItemSelected = (itemKey: string) => {
        setSelectedItem(itemKey);
        setShowDropdown(false);

        let path = ''
        if (itemKey === "myProfile") {
            path = `${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_MY_PROFILE_PATH}`
        }else if (itemKey === "featuredJobs") {
            path = `${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_FEATURED_JOBS_PATH}`
        } else if (itemKey === "recommendedJobs") {
            path = `${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_RECOMMENDED_JOBS_PATH}`
        } else if (itemKey === "savedJobs") {
            path = `${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_SAVED_JOBS_PATH}`
        } else if (itemKey === "jobAlerts") {
            path = `${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_JOB_ALERTS_PATH}`
        } else if (itemKey === "settings") {
            path = `${USER_ROUTE_PATH}${USER_PROFILE_PATH}${USER_SETTINGS_PATH}`
        }


        navigate(path)
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const userProfileTab: UserProfileTabProps[] = [
        {
            key: "myProfile",
            label: "My Profile",
            icon: <UserOutlined />,
            children: <MyProfile />,
        },
        {
            key: "featuredJobs",
            label: "Featured Jobs",
            icon: <StarOutlined />,
            children: <FeaturedJobs />,
        },
        {
            key: "recommendedJobs",
            label: "Recommended Jobs",
            icon: <LikeOutlined />,
            children: <RecommendedJobs />,
        },
        {
            key: "savedJobs",
            label: "Saved Jobs",
            icon: <SaveOutlined />,
            children: <SavedJobs />,
        },
        {
            key: "jobAlerts",
            label: "Job Alerts",
            icon: <NotificationOutlined />,
            children: <JobAlerts />,
        },
        {
            key: "settings",
            label: "Settings",
            icon: <SettingOutlined />,
            children: <Settings />,
        },
    ];


    return (
        <Row>
            <Col span={24}>
                {/*First inner col: tab section*/}
                <Col span={24} className="flex items-center justify-center w-full py-3 bg-kjcBtn-950">
                    {/* Mobile view: Show dropdown */}
                    <Col
                        xs={{ span: 24 }}
                        className="flex md:hidden w-full relative px-4"
                    >
                        <div
                            className="w-full flex items-center cursor-pointer py-2 bg-kjcBtn-950 text-white"
                            onClick={toggleDropdown}
                        >
                            <span className="text-xl mr-2">
                                {userProfileTab.find((item) => item.key === selectedItem)?.icon}
                            </span>
                            <span className="text-sm flex-1">
                                {userProfileTab.find((item) => item.key === selectedItem)?.label}
                            </span>
                            {showDropdown ? <UpOutlined className="ml-2" /> : <DownOutlined className="ml-2" />}
                        </div>
                        {showDropdown && (
                            <div
                                className="absolute top-12 px-4  left-0 w-full bg-kjcBtn-950 shadow-md z-10"
                            >
                                {
                                    userProfileTab.filter(item => item.key !== selectedItem)
                                        .map(item => (
                                            <div
                                                key={item.key}
                                                onClick={() => handleItemSelected(item.key)}
                                                className="flex items-center cursor-pointer py-2 hover:bg-kjcBtn-750 text-white w-full border-t-2 border-bg-white"
                                            >
                                                <span className="text-xl mr-2">{item.icon}</span>
                                                <span className="text-sm">{item.label}</span>
                                            </div>
                                        ))
                                }
                            </div>
                        )}
                    </Col>

                    {/* Medium screen and above: Show all tabs */}
                    <Col
                        md={{span: 20, offset: 2}}
                        className="hidden md:flex lg:space-x-4"
                    >
                        {userProfileTab.map((item) => {
                            const isActive = selectedItem === item.key;
                            return (
                                <div
                                    key={item.key}
                                    onClick={() => handleItemSelected(item.key)}
                                    className={`flex items-center cursor-pointer px-4 relative ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <span className="text-xl mr-2 block md:hidden lg:block">{item.icon}</span>
                                    <span className="text-sm ">{item.label}</span>
                                    <span
                                        className={`absolute -bottom-2 left-0 w-full h-1 ${isActive ? 'bg-white' : 'bg-transparent'} transition-transform duration-300`}
                                        style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
                                    ></span>
                                </div>
                            );
                        })}
                    </Col>
                </Col>

                {/* Second inner col: content */}
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 20, offset: 2 }}
                    className={"py-4 px-4 lg:px-0"}
                >
                    <div className="items-center leading-normal">
                        {userProfileTab.map((item) => (
                            <div
                                key={item.key}
                                style={{ display: selectedItem === item.key ? "block" : "none" }}
                            >
                                {item.children}
                            </div>
                        ))}
                    </div>
                </Col>
            </Col>
        </Row>
    );
};

export default withBaseLayout(UserProfile);

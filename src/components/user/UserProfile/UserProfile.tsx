import { Col, Row } from "antd";
import { withBaseLayout } from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import { LikeOutlined, NotificationOutlined, SaveOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import MyProfile from "./components/MyProfile.tsx";
import RecommendedJobs from "./components/RecommendedJobs.tsx";
import SavedJobs from "./components/SavedJobs.tsx";
import JobAlerts from "./components/JobAlerts.tsx";
import FeaturedJobs from "./components/FeaturedJobs.tsx";

interface UserProfileTabProps {
    key: string;
    label: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

const UserProfile = () => {
    const [selectedItem, setSelectedItem] = useState<string>("myProfile");

    const handleItemSelected = (itemKey: string) => {
        setSelectedItem(itemKey);
    };

    const UserProfileTab: UserProfileTabProps[] = [
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
    ];

    return (
        <Row>
            <Col span={24} className="">
                <Col span={24} className="flex items-center w-full h-16 bg-kjcBtn-950 px-4 md:px-0">
                    <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 20, offset: 2 }}
                        className="flex overflow-x-auto scroll-snap-x-mandatory"
                    >
                        <div className="flex items-center space-x-4 min-w-max">
                            {UserProfileTab.map((item) => {
                                const isActive = selectedItem === item.key;
                                return (
                                    <div
                                        key={item.key}
                                        onClick={() => handleItemSelected(item.key)}
                                        className={`flex items-center cursor-pointer px-4 scroll-snap-start relative ${isActive ? 'text-white' : 'text-gray-400'}`}
                                    >
                                        <span className="text-xl mr-2">{item.icon}</span>
                                        <span className="text-sm">{item.label}</span>
                                        <span
                                            className={`absolute -bottom-2 left-0 w-full h-1 ${isActive ? 'bg-white' : 'bg-transparent'} transition-transform duration-300`}
                                            style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
                                        ></span>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 20, offset: 2 }}
                    className={"py-4 px-4 md:px-0"}
                >
                    <div className="items-center leading-normal">
                        {UserProfileTab.map((item) => (
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

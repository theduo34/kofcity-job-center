import { Col, Row } from "antd";
import { withBaseLayout } from "../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {LikeOutlined, NotificationOutlined, SaveOutlined, StarOutlined, UserOutlined} from "@ant-design/icons";
import { useState } from "react";
import MyProfile from "./components/MyProfile.tsx";

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
            children: <MyProfile/>,
        },
        {
            key: "featuredJobs",
            label: "Featured Jobs",
            icon: <StarOutlined />,
            children: "Hey Featured Jobs",
        },
        {
            key: "recommendedJobs",
            label: "Recommended Jobs",
            icon: <LikeOutlined />,
            children: "Hey Recommended Jobs",
        },
        {
            key: "savedJobs",
            label: "Saved Jobs",
            icon: <SaveOutlined />,
            children: "Hey Saved Jobs",
        },
        {
            key: "jobAlerts",
            label: "Job Alerts",
            icon: <NotificationOutlined/>,
            children: "Hey Recommended Jobs",
        },
    ];

    return (
        <Row>
           <Col span={24} className={""}>
               <Col span={24} className="flex items-center w-full h-16 bg-kjcBtn-950 px-4 md:px-0">
                   <Col
                       xs={{span: 24}}
                       sm={{span: 24}}
                       md={{span: 20, offset: 2}}
                       className="flex items-center"
                   >
                       <div>
                           <div className="flex items-center space-x-10">
                               {UserProfileTab.map((item) => {
                                   const isActive = selectedItem === item.key;
                                   return (
                                       <p
                                           key={item.key}
                                           onClick={() => handleItemSelected(item.key)}
                                           className={`relative text-white flex items-center justify-center cursor-pointer`}
                                       >
                                           <span className="me-1">{item.icon}</span>
                                           {item.label}
                                           <span
                                               className={`absolute -bottom-2 left-0 w-full h-1 ${isActive ? 'bg-white' : 'bg-transparent'} transition-transform duration-300`}
                                               style={{transform: isActive ? 'scaleX(1)' : 'scaleX(0)'}}
                                           ></span>
                                       </p>
                                   );
                               })}
                           </div>
                       </div>

                   </Col>
               </Col>
               <Col
                   xs={{span: 24}}
                   sm={{span: 24}}
                   md={{span: 20, offset: 2}}
                   className={"py-4 px-4 md:px-0"}
               >
                   <div className="items-center leading-normal">
                       {UserProfileTab.map((item) => (
                           <div
                               key={item.key}
                               style={{display: selectedItem === item.key ? "block" : "none"}}
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

import React from "react";
import WithContentLayout from "../hoc/WithContentLayout";
import { useNavigate } from "react-router-dom";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export interface footerItemsProps {
    key?: string;
    label?: string;
    lists?: { item?: string; key?: string; onClick?: () => void }[];
}

const MainFooter: React.FC = () => {
    const navigate = useNavigate();

    const footerItems: footerItemsProps[] = [
        {
            key: "forJobSeekers",
            label: "For Job Seekers",
            lists: [
                {
                    item: "Browse Jobs",
                    key: "browseJobs",
                    onClick: () => navigate("/")
                }
            ]
        },
        {
            key: "forEmployers",
            label: "For Employers",
            lists: [
                {
                    item: "Post Jobs",
                    key: "postJobs",
                    onClick: () => navigate("/")
                }
            ]
        },
        {
            key: "helpfulResource",
            label: "Helpful Resource",
            lists: [
                {
                    item: "Terms of Service",
                    key: "termsOfService",
                    onClick: () => navigate("/")
                }
            ]
        }
    ];

    return (
        <WithContentLayout>
            <div className="items-center space-y-8">
                <div className="items-center block md:hidden">
                    <Collapse
                        accordion
                        expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} />}
                        expandIconPosition="end"
                    >
                        {footerItems.map((item) => (
                            <Collapse.Panel header={item.label} key={item.key}>
                                {item.lists?.map((list) => (
                                    <p
                                        key={list.key}
                                        onClick={list.onClick}
                                        className="leading-normal justify-start cursor-pointer hover:underline"
                                    >
                                        {list.item}
                                    </p>
                                ))}
                            </Collapse.Panel>
                        ))}
                    </Collapse>
                </div>
                <div className="items-center hidden md:block">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {footerItems.map((item) => (
                            <div key={item.key}>
                                <h1 className="leading-normal text-xl text-kjcBtn-500">{item.label}</h1>
                                {item.lists?.map((list) => (
                                    <p
                                        key={list.key}
                                        onClick={list.onClick}
                                        className="leading-normal justify-start cursor-pointer hover:underline"
                                    >
                                        {list.item}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center bottom-0 w-full">
                    &copy;{new Date().getFullYear()} Kofcity Job Center Powered by tHEDUo
                </div>
            </div>
        </WithContentLayout>
    );
};

export default MainFooter;

import React from "react";
import WithContentLayout from "../hoc/WithContentLayout";
import { useNavigate } from "react-router-dom";
import { Collapse } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {getFooterItems, getSocialIcons} from "./MainFooter.constants.tsx";


const MainFooter: React.FC = () => {
    const navigate = useNavigate();
    const footerItems = getFooterItems(navigate);
    const socialIcons = getSocialIcons();

    return (
            <div className="items-center bg-amber-50 ">
                <div className=" items-center text-center block md:hidden">
                    <Collapse
                        accordion
                        expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} />}
                        expandIconPosition="end"
                        className={"text-kjcBtn-500 px-4"}
                    >
                        {footerItems.map((item) => (
                               <Collapse.Panel
                                   key={item.key as string}
                                   header={
                                       <h1 className={"text-kjcBtn-500 font-semibold"}>{item.label}</h1>
                                   }
                               >
                                   {item.lists?.map((list) => (
                                       <p
                                           key={list.key}
                                           onClick={list.onClick}
                                           className="leading-normal py-2 justify-start cursor-pointer hover:text-kjcBtn-500 hover:underline"
                                       >
                                           {list.item}
                                       </p>
                                   ))}
                               </Collapse.Panel>
                        ))}
                    </Collapse>
                </div>
                <div className="items-center hidden md:block">
                    <WithContentLayout>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            {footerItems.map((item) => (
                                <div
                                    key={item.key}
                                    className={"items-center justify-start space-y-4"}
                                >
                                    <h1 className="flex items-start justify-start leading-normal text-lg text-kjcBtn-500">{item.label}</h1>
                                    {item.lists?.map((list) => (
                                        <p
                                            key={list.key}
                                            onClick={list.onClick}
                                            className="leading-normal flex items-start justify-start cursor-pointer hover:text-kjcBtn-500 hover:underline"
                                        >
                                            {list.item}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </WithContentLayout>
                </div>
                <div className="pb-12 md:pb-0">
                   <WithContentLayout>
                       <div className={"text-start space-y-4"}>
                           <div className={"items-center text-center md:text-start text-md md:text-lg text-kjcBtn-500"}>
                               Find us on social media
                           </div>
                           <div className={"flex items-center justify-center md:justify-start text-center gap-4"}>
                               {
                                   socialIcons.map((icon) => (
                                       <p>{icon.icon}</p>
                                   ))
                               }
                           </div>
                           <p className="text-center items-center pb-4">
                               &copy;{new Date().getFullYear()} Kofcity Job Center Powered by tHEDUo
                           </p>
                       </div>
                   </WithContentLayout>
                </div>
            </div>
    );
};

export default MainFooter;

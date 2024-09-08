import { Col, Row } from "antd";
import { useState } from "react";
import { NavFooterMenuItemProps } from "./NavFooter.inteface.ts";
import {useNavigate} from "react-router-dom";
import {getNavFooterMenuItems} from "./NavFooter.constants.tsx";
import {
    USER_ROUTE_PATH,
    USER_ROUTE_PATH_JOB_LISTINGS, USER_ROUTE_PATH_POST_JOBS,
    USER_ROUTE_PATH_TRENDS
} from "../../user/UserRoutes.constants.ts";
import {DASHBOARD_ROUTES_PATH} from "../../user/Dashboard/DashboardRoutes.constants.ts";


const NavFooter = () => {
    const [activeItem, setActiveItem] = useState<string>("");
    const navigate = useNavigate();

    const menuItems = getNavFooterMenuItems(navigate);


    const handleMenuClick = (item: NavFooterMenuItemProps) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setActiveItem(item.key === activeItem ? null : item.key);
        switch (item.key) {
            case "Home":
                navigate(`${USER_ROUTE_PATH}${DASHBOARD_ROUTES_PATH}`)
                break;
            case "Jobs":
                navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}`)
                break;
            case "Trends":
                navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_TRENDS}`)
                break;
            case "Post Jobs":
                navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}`)
                break;
            default:
                break;
        }
    };

    return (
        <>
            <nav className="fixed bottom-0 w-full bg-white pt-1 shadow-lg overflow-x-hideden">
                <div className="items-center justify-evenly">
                    <Row gutter={{ xs: 20, sm: 16 }} className="items-center justify-between">
                        {menuItems.map((item) => (
                            <Col
                                xs={{ span: 5, offset: 1 }}
                                className="py-3 flex items-center cursor-pointer relative group"
                                key={item.key}
                                onClick={() => handleMenuClick(item)}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    {item.icon}
                                    {item.label}
                                </div>
                                <span
                                    className={`absolute items-center justify-center -top-1 -left-3  w-full h-1 bg-kjcBtn-900 scale-x-0 transition-transform ${
                                        activeItem === item.key ? 'scale-x-100' : ''
                                    }`}
                                    style={{transformOrigin: "center"}}
                                ></span>
                            </Col>
                        ))}
                    </Row>
                </div>
            </nav>
        </>
    );
};

export default NavFooter;

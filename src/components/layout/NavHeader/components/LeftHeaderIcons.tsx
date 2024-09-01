import { Col, Row, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import {
    DownOutlined,
    UserOutlined
} from "@ant-design/icons";
import {getLeftHeaderIcons} from "../NavHeader.constants.tsx";
import {USER_PROFILE_PATH, USER_ROUTE_PATH} from "../../../user/UserRoutes.constants.ts";

type LeftHeaderIconsProps = {
    activeItem: string;
    setActiveItem: (key: string) => void;
};

// const items: MenuProps["items"] = [
//     {
//         key: "email",
//         label: <span className={"flex items-center justify-center font-semibold uppercase py-3 px-2 shadow-lg border-2 border-neutral-400"}>emmsom506@gmail.com</span>
//     },
//     {
//         key: "profile",
//         label: (
//             <DropdownItem
//                 itemKey="profile"
//                 label="Profile"
//                 icon={<UserAddOutlined style={{ fontSize: "18px" }}/>}
//                 withArrow
//                 route={ "/user/profile"}
//             />
//         ),
//     },
//     {
//         key: "settings",
//         label: (
//             <DropdownItem
//                 itemKey="settings"
//                 label="Settings "
//                 icon={<SettingOutlined  style={{ fontSize: "18px" }}/>}
//                 withArrow
//                 route={ ""}
//             />
//         ),
//     },
//     {
//         key: "notification",
//         label: (
//             <DropdownItem
//                 itemKey="notification"
//                 label="Notification"
//                 icon={<NotificationOutlined style={{ fontSize: "18px" }} />}
//                 withArrow
//                 route={ ""}
//             />
//         ),
//     },
//     {
//         key: "savedJobs",
//         label: (
//             <DropdownItem
//                 itemKey="savedJobs"
//                 label="Saved Jobs"
//                 icon={<SaveOutlined style={{ fontSize: "18px" }}/>}
//                 withArrow
//                 route={ ""}
//             />
//         ),
//     },
//     {
//         key: "helpCenter",
//         label: (
//             <DropdownItem
//                 itemKey="helpCenter"
//                 label="Help Center"
//                 icon={<QuestionCircleOutlined style={{ fontSize: "18px" }}/>}
//                 withArrow
//                 route={""}
//             />
//         ),
//     },
//     {
//         key: "logOut",
//         label: (
//             <DropdownItem
//                 itemKey="logOut"
//                 label="Logout"
//                 icon={<LogoutOutlined style={{ fontSize: "18px" }}/>}
//                 className={"flex items-center justify-center"}
//             />
//         ),
//     }
// ];

const LeftHeaderIcons = ({ activeItem, setActiveItem }: LeftHeaderIconsProps) => {
    const navigate = useNavigate();
    const menuItems = getLeftHeaderIcons(navigate);

    return (
        <div className="flex items-center justify-between space-x-6">
            <div className="hidden lg:block">
                <Row
                    gutter={{ xs: 16, sm: 14 }}
                    className="items-center justify-evenly space-x-2 font-sans">
                    {menuItems.map((item) => {
                        const isActive = activeItem === item.key;
                        return (
                            <Col
                                xs={{ span: 3, offset: 1 }}
                                className={`flex items-center text-xm text-kjc-950 font-semibold cursor-pointer ease-in-out hover:text-kjcBtn-900 active:text-kjcBtn-900 group ${isActive ? 'text-kjcBtn-900' : ''}`}
                                key={item.key}
                                onClick={() => {
                                    setActiveItem(item.key || "");
                                    if (item.onClick) {
                                        item.onClick();
                                    }
                                }}
                            >
                                <div
                                    className="relative flex flex-col items-center justify-center text-xs p-3 rounded-full bg-neutral-200">
                                    <Tooltip title={item.label}>
                                        <span>{item.icon}</span>
                                    </Tooltip>
                                    <span
                                        className={`absolute -bottom-6 left-0 w-full h-1 bg-kjcBtn-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-right ${isActive ? 'scale-x-100' : ''}`}
                                    ></span>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div className="relative text-xs p-3 rounded-full bg-neutral-200">
                {/*<Dropdown*/}
                {/*    menu={{ items }}*/}
                {/*    placement="bottom"*/}
                {/*    trigger={['click']}*/}
                {/*>*/}
                {/*    <div className="flex items-center justify-center">*/}
                {/*        <UserOutlined style={{ fontSize: "24px" }} />*/}
                {/*        <span*/}
                {/*            className="absolute bottom-1 right-0 flex items-center justify-center p-1 font-semibold rounded-full bg-white shadow-lg">*/}
                {/*            <DownOutlined style={{ fontSize: "10px" }} />*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*</Dropdown>*/}
                <div className="flex items-center justify-center"
                     onClick={ () => navigate(`${USER_ROUTE_PATH}${USER_PROFILE_PATH}`)}
                >
                    <UserOutlined style={{fontSize: "24px"}}/>
                    <span
                        className="absolute bottom-1 right-0 flex items-center justify-center p-1 font-semibold rounded-full bg-white shadow-lg">
                            <DownOutlined style={{fontSize: "10px"}}/>
                        </span>
                </div>
            </div>
        </div>
    );
};

export default LeftHeaderIcons;

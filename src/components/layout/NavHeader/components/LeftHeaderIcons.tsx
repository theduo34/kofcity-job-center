import {Col, Dropdown, MenuProps, Row, Tooltip} from "antd";
import { getLeftHeaderIcons } from "../NavHeader.constants";
import { useNavigate } from "react-router-dom";
import { UilUser} from '@iconscout/react-unicons'
import {DownOutlined} from "@ant-design/icons";


type LeftHeaderIconsProps = {
    activeItem: string;
    setActiveItem: (key: string) => void;
};

/**
 * Renders the left header icons component.
 *
 * @param {LeftHeaderIconsProps} props - The props for the component.
 * @return {JSX.Element} The rendered left header icons component.
 */

const items: MenuProps["items"] = [
    {
        key: "Settings",
        label: "Settings"
    },
    {
        key: "Privacy",
        label: "Privacy"
    }
]

const LeftHeaderIcons = ({ activeItem, setActiveItem }: LeftHeaderIconsProps) => {
    const navigate = useNavigate();
    const menuItems = getLeftHeaderIcons(navigate);

    return (
        <div className="flex items-center justify-between space-x-6">
            <div className="hidden lg:block">
                <Row
                    gutter={{xs: 16, sm: 14}}
                    className="items-center justify-evenly space-x-2 font-sans">
                    {menuItems.map((item) => {
                        const isActive = activeItem === item.key;
                        return (
                            <Col
                                xs={{span: 3, offset: 1}}
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
                <Dropdown
                    menu={{items}}
                    placement="bottom"
                    arrow
                >
                    <div className="flex items-center justify-center">
                        <UilUser/>
                        <span
                            className="absolute bottom-1 right-0 flex items-center justify-center p-1 font-semibold rounded-full bg-white shadow-lg">
                            <DownOutlined style={{fontSize: "10px"}}/>
                        </span>
                    </div>
                </Dropdown>
            </div>
        </div>
    );
};

export default LeftHeaderIcons;

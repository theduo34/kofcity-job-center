import React from "react";
import { Menu } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type DropdownItemProps = {
    itemKey: string;
    label: string;
    icon?: React.ReactNode;
    withArrow?: boolean;
    className?: string;
    route?: string;
};

const DropdownItem: React.FC<DropdownItemProps> = ({ itemKey, label, icon, withArrow = false, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (route) {
            navigate(route);
        }
    };
    return (
        <Menu.Item key={itemKey} icon={icon} onClick={handleClick}>
            <span className={`w-[250px] flex items-center justify-between text-md font-semibold py-3`}>
                {label}
                {withArrow && (
                    <span className={"flex w-6 h-6 items-center justify-center rounded-full bg-gray-400"}>
                        <ArrowRightOutlined className={"flex justify-end float-right"} />
                    </span>
                )}
            </span>
        </Menu.Item>
    );
};

export default DropdownItem;

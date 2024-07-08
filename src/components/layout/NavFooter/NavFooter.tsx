import { Col, Row } from "antd";
import { useState } from "react";
import { NavFooterMenuItemProps } from "./NavFooter.inteface.ts";
import {useNavigate} from "react-router-dom";
import {getNavFooterMenuItems} from "./NavFooter.constants.tsx";

/**
 * Renders the nav footer component.
 *
 * @return {JSX.Element} The rendered nav footer component.
 */
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
                break;
            case "Jobs":
                break;
            case "Trends":
                break;
            case "Post Jobs":
                break;
            default:
                break;
        }
    };

    return (
        <>
            <nav className="fixed bottom-0 w-full bg-white pt-1 shadow-lg overflow-x-hidden">
                <div className="items-center justify-around">
                    <Row gutter={{ xs: 20, sm: 16 }} className="items-center justify-evenly">
                        {menuItems.map((item) => (
                            <Col
                                xs={{ span: 5, offset: 1 }}
                                className="py-3 flex items-center justify-center cursor-pointer relative group"
                                key={item.key}
                                onClick={() => handleMenuClick(item)}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    {item.icon}
                                    {item.label}
                                </div>
                                <span
                                    className={`absolute -top-1 left-0 w-full h-1 bg-kjcBtn-900 scale-x-0 transition-transform origin-left ${
                                        activeItem === item.key ? 'scale-x-100' : ''
                                    }`}
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
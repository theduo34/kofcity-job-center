import { Col, Row } from "antd";
import { getLeftHeaderIcons } from "../NavHeader.constants";
import { useNavigate } from "react-router-dom";

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
const LeftHeaderIcons = ({ activeItem, setActiveItem }: LeftHeaderIconsProps) => {
    const navigate = useNavigate();
    const menuItems = getLeftHeaderIcons(navigate);

    return (
        <div className="flex items-center justify-between mx-4 md:mx-8 space-x-16">
            <div className="hidden lg:block px-8">
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
                                <div className="relative flex flex-col items-center text-xs">
                                    {item.icon}
                                    {item.label}
                                    <span
                                        className={`absolute -bottom-6 left-0 w-full h-1 bg-kjcBtn-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-right ${isActive ? 'scale-x-100' : ''}`}
                                    ></span>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div>
                <Col
                    span={24}
                >
                    Header
                </Col>
            </div>
        </div>
    );
};

export default LeftHeaderIcons;

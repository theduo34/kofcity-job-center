import {Col, Row} from "antd";
import {NavFooterMenuItemProps, NavFooterMenuItems} from "./NavFooter.constants.tsx";

const NavFooter = () => {
    const handleMenuClick = (item: NavFooterMenuItemProps) => {
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
                <div className="items-center justify-evenly">
                    <Row
                        gutter={{xs: 20, sm: 16}}
                        className="items-center justify-evenly"
                    >
                        {NavFooterMenuItems?.map((item) => {
                            return (
                                <Col
                                    xs={{span: 5, offset: 1}}
                                    className="py-3 flex items-center justify-center"
                                    key={item?.key}
                                    onClick={() => handleMenuClick(item)}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        {item?.icon}
                                        {item?.label}
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </nav>
        </>
    );
};

export default NavFooter;

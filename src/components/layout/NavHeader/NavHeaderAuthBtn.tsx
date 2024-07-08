import {Col, Row} from "antd";
import KjcButton from "../../../builders/KjcButton";
import {NavHeaderAuthBtn} from "./NavHeader.constants.tsx";

const NavHeaderBtn = () => {
    const navHeaderAuthBtn = NavHeaderAuthBtn();

    return(
        <Row>
            <Col
                span={24}
                className="text-center"
            >
                <div className="flex items-center justify-center">
                    <div className="items-center space-x-4">
                        {
                            navHeaderAuthBtn.map((btn) =>(
                                    <KjcButton
                                        onClick={btn.onClick}
                                        className={`${btn.className} items-center justify-center text-sm md:text-md py-2 md:py-4 px-3 md:px-7 font-semibold leading-none`}
                                    >
                                        {btn.label}
                                    </KjcButton>
                                )
                            )
                        }
                    </div>
                </div>
            </Col>
        </Row>
    )
}
export default NavHeaderBtn;
import {Col, Row} from "antd";
import KjcButton from "../../../../builders/KjcButton";
import {getNavHeaderAuthBtn} from "../NavHeader.constants.tsx";
import {useNavigate} from "react-router-dom";

/**
 * Renders the nav header btn component.
 *
 * @return {JSX.Element} The rendered nav header btn component.
 */
const NavHeaderAuthBtn = () => {
    const navigate = useNavigate();
    const headerAuthBtn = getNavHeaderAuthBtn(navigate);

    return(
        <Row>
            <Col
                span={24}
                className="text-center"
            >
                <div className="flex items-center justify-center">
                    <div className="items-center space-x-4">
                        {
                            headerAuthBtn.map((btn) =>(
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
export default NavHeaderAuthBtn;
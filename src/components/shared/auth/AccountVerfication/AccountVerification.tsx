import  { useState} from "react";
import { Col, Row } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import KjcCard from "../../../../builders/KjcCard";
import {useNavigate} from "react-router-dom";
import KjcButton from "../../../../builders/KjcButton";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
    REGISTRATION_ROUTE_PATH
} from "../../registration/RegistrationRoutes.constants.ts";
import {USER_ROUTE_PATH} from "../../../users/JobSeeker/UserRoutes.constants.ts";
import {DASHBOARD_ROUTES_PATH} from "../../../users/JobSeeker/JobSeekerDashboard/DashboardRoutes.constants.ts";

const AccountVerification = () => {
    const [isVerified,] = useState<boolean>(true);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const checkVerification = async () => {
    //         const isLinkCorrect = await checkLinkValidity();
    //         const isEmailCorrect = await checkEmailValidity();
    //         const isLinkWithinOneDay = checkLinkAge();
    //
    //         if (isLinkCorrect && isEmailCorrect && isLinkWithinOneDay) {
    //             setIsVerified(true);
    //         } else {
    //             setIsVerified(false);
    //         }
    //     };
    //
    //     checkVerification();
    // }, []);


    const renderSuccess = () => (
        <div className="text-center space-y-6">
            <CheckCircleOutlined style={{ fontSize: "48px", color: "#52c41a" }} />
            <h1 className="font-semibold text-2xl capitalize text-gray-800">
                Account Verified
            </h1>
            <p className="text-gray-600 text-md">
                Your account has been successfully verified. You can now proceed to use the platform.
            </p>
            <KjcButton
                type="primary"
                size="large"
                className="bg-kjcBtn-200"
                onClick={() => navigate(`${USER_ROUTE_PATH}${DASHBOARD_ROUTES_PATH}`)}
            >
                Go to Dashboard
            </KjcButton>
        </div>
    );

    const renderFailed = () => (
        <div className="text-center space-y-6">
            <CloseCircleOutlined style={{ fontSize: "48px", color: "#ff4d4f" }} />
            <h1 className="font-semibold text-2xl capitalize text-gray-800">
                Verification Failed
            </h1>
            <p className="text-gray-600 text-md">
                The verification link is invalid or has expired. Please request a new verification link.
            </p>
            <KjcButton
                type="primary"
                size="large"
                className="bg-kjcBtn-200"
                onClick={() => navigate(`${ACCOUNT_REGISTRATION_ROUTE_PATH}${REGISTRATION_ROUTE_PATH}`)}
            >
                Resend Verification Link
            </KjcButton>
        </div>
    );

    return (
        <>
            <Row style={{ minHeight: "100vh" }} className="bg-white px-4 md:px-0">
                <Col span={24}>
                    <div className="hidden md:flex w-full relative h-[400px] bg-kjcBtn-200 border-b-2 border-b-gray-300"></div>
                    <div className="absolute w-full max-w-3xl px-0 md:px-16 z-10 bg-white shadow-lg"
                         style={{
                             top: "150px",
                             left: "50%",
                             transform: "translateX(-50%)",
                             display: "flex",
                             justifyContent: "center",
                             alignItems: "center",
                         }}
                    >
                        <div className="w-full md:w-3/5 py-8">
                            <KjcCard>
                                {isVerified ? renderSuccess() : renderFailed()}
                            </KjcCard>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AccountVerification;

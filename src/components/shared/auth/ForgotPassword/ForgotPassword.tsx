import { Col, Form, Row, message, FormProps } from "antd";
import { Link } from "react-router-dom";
import KjcCard from "../../../../builders/KjcCard";
import KjcButton from "../../../../builders/KjcButton";
import KjcInput from "../../../../builders/KjcInput";
import {AUTH_ROUTE_PATH, LOGIN_PATH} from "../AuthRoutes.constants.ts";
import {withBaseLayout} from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

type FieldType = {
    email: string;
};

const ForgotPassword = () => {
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
        console.log(formData);
        try {
            message.success("Password reset instructions sent to your email.");
        } catch (error) {
            message.error("Failed to send reset instructions. Please try again.");
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
        message.error("Error occurred! Field required.");
    };

    return (
        <>
            <Row style={{ minHeight: "100vh" }} className={"bg-white"}>
                <Col span={24}>
                    <div className="hidden md:flex w-full relative h-[400px] bg-kjcBtn-200 border-b-2 border-b-gray-300"></div>
                    <div className="absolute w-full max-w-4xl px-0 md:px-16 z-10 bg-white shadow-lg"
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
                                <div className="text-md md:text-lg space-y-4">
                                    <div className="items-center space-y-4">
                                        <h1 className={"font-semibold text-2xl capitalize"}>
                                            Forgot Password
                                        </h1>
                                        <p>Enter Your Email to Reset Your Password and Regain Access!</p>
                                    </div>
                                    <div className="flex items-start mt-2">
                                        <Form
                                            form={form}
                                            name="basic"
                                            className="w-full"
                                            initialValues={{ remember: false }}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="off"
                                        >
                                            <div className="mb-4">
                                                <label htmlFor="email">Email</label>
                                                <Form.Item
                                                    name="email"
                                                    rules={[
                                                        { required: true, message: "Please input your email!" },
                                                        { type: "email", message: "Please input a valid email" },
                                                    ]}
                                                >
                                                    <KjcInput />
                                                </Form.Item>
                                            </div>

                                            <div className="mb-4">
                                                <Form.Item>
                                                    <KjcButton
                                                        type="primary"
                                                        htmlType="submit"
                                                        className="w-full rounded-md bg-kjcBtn-200 py-4 font-semibold text-black text-lg ease-in-out"
                                                    >
                                                        Continue
                                                    </KjcButton>
                                                </Form.Item>
                                            </div>

                                            <div className="text-neutral-800 text-center text-xs">
                                                Remembered your password?
                                                <span className="capitalize font-bold text-jybekBtn-600">
                                                    <Link to={`${AUTH_ROUTE_PATH}${LOGIN_PATH}`} className='CustomHover'>
                                                        Sign In
                                                    </Link>
                                                </span>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </KjcCard>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default withBaseLayout(ForgotPassword);

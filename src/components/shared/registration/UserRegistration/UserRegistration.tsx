import { Col, Form, FormProps, Row } from "antd";
import { Link } from "react-router-dom";
import KjcCard from "../../../../builders/KjcCard";
import KjcButton from "../../../../builders/KjcButton";
import KjcImage from "../../../../builders/KjcImage";
import KjcInput from "../../../../builders/KjcInput";
import KjcPasswordInput from "../../../../builders/KjcPasswordInput";
import { Rule } from "postcss";
import {withBaseLayout} from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

type FieldType = {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirm_password?: string;
    sms_notification?: boolean;
};

const UserRegistration = () => {
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
        form.resetFields();
        console.log(formData);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
        // Handle failure to submit...
    };

    return (
        <>
            <Row style={{ minHeight: "100vh" }}>
                <Col span={24}>
                    <div className="hidden md:flex relative h-[400px] bg-amber-50 border-b-2 border-b-gray-300"></div>
                    <div
                        className="absolute w-full max-w-md bg-gray-100 z-10"
                        style={{
                            top: "150px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                    >
                        {/* Form content centered within the second div */}
                        <div className="w-full">
                            <KjcCard>
                                <div className="text-md md:text-lg">
                                    <div className="flex flex-col items-center mb-3">
                                        <KjcImage
                                            width={150}
                                            src=""
                                            className="img-fluid bg-center mb-6"
                                            alt="KJCLogo"
                                        />
                                        <hr className="mb-3" />
                                        <p className="text-muted mt-3 text-center">
                                            Unlock Your Ultimate Future Potential. Fill Out the Form to Register Now!
                                        </p>
                                    </div>
                                    <div className="flex items-start mt-2">
                                        <Form
                                            form={form}
                                            name="basic"
                                            className="w-full"
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="off"
                                        >
                                            <div className="mb-4">
                                                <label htmlFor="email">Email</label>
                                                <KjcInput
                                                    label=""
                                                    name="email"
                                                    className="mt-1"
                                                    placeholder="example123@gmail.com"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please input your email",
                                                        },
                                                        {
                                                            type: "email",
                                                            message: "Please input a valid email",
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="password">Password</label>
                                                <KjcPasswordInput
                                                    label=""
                                                    name="password"
                                                    className="mt-1"
                                                    hasFeedback
                                                    placeholder="****************"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please input your Password!",
                                                        },
                                                        {
                                                            min: 8,
                                                            message: "Password must be at least 8 characters long!",
                                                        },
                                                    ]}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="confirm_password">Confirm Password</label>
                                                <KjcPasswordInput
                                                    label=""
                                                    name="confirm_password"
                                                    className="mt-1"
                                                    placeholder="****************"
                                                    hasFeedback
                                                    dependencies={['password']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please confirm your Password!",
                                                        },
                                                        ({ getFieldValue }) => ({
                                                            validator(_: Rule, value: string) {
                                                                if (!value || getFieldValue('password') === value) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(new Error('The passwords do not match!'));
                                                            },
                                                        }),
                                                    ]}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <Form.Item>
                                                    <KjcButton
                                                        type="primary"
                                                        htmlType="submit"
                                                        className="inline-block w-full border-0 rounded bg-kjcBtn-400 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white ease-in-out hover:bg-kjcBtn-500 focus:bg-kjcBtn-500 active:bg-kjcBtn-600"
                                                    >
                                                        Continue
                                                    </KjcButton>
                                                </Form.Item>
                                            </div>
                                            <div className="text-neutral-800 text-center text-sm">
                                                Already a user?
                                                <span className="capitalize font-bold text-jybekBtn-600">
                                            <Link to={'/auth/login'} className="CustomHover">
                                                Login
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

export default withBaseLayout(UserRegistration);

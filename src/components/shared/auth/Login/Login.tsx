import { Link, useNavigate } from "react-router-dom";
import KjcImage from "../../../../builders/KjcImage";
import { Checkbox, Col, Form, FormProps, Row } from "antd";
import KjcButton from "../../../../builders/KjcButton";
import KjcCard from "../../../../builders/KjcCard";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
    REGISTRATION_ROUTE_PATH,
} from "../../registration/RegistrationRoutes.constants.ts";
import KjcNotification from "../../../../builders/KjcNotification";
import KjcInput from "../../../../builders/KjcInput";
import KjcPasswordInput from "../../../../builders/KjcPasswordInput";
import {withBaseLayout} from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";

/**
 * Renders the login component.
 *
 * @return {JSX.Element} The rendered login component.
 */

type FieldType = {
    email?: string;
    password?: string;
    remember?: boolean;
};

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
        console.log(formData)
        form.resetFields();
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
        KjcNotification.showKjcNotification({
            type: 'error',
            message: 'Error occurred!',
            description: 'Failed to login',
        })
    };

    const handleOnLogoClick = () => {
        navigate('/')
    }

    return (
        <>
            <Row
                justify="center"
                align="middle"
                style={{ height: "100vh"}}
                className="overflow-hidden"
            >
                <Col span={24} className="flex items-center justify-center min-h-screen">
                    <Col
                        sm={24}
                        md={24}
                        lg={18}
                        className="flex justify-center"
                    >
                        <div className="w-full max-w-md">
                            <KjcCard
                                className="shadow-none md:shadow-lg"
                            >
                                <div className="text-sm items-center">
                                    <div className="flex flex-col items-center">
                                        <KjcImage
                                            onClick={handleOnLogoClick}
                                            width={150}
                                            src=""
                                            className="img-fluid bg-center mb-6"
                                            alt="Kjc Logo"
                                        />
                                        <div className="text-center">
                                            <h3 className="mb-3 mt-0 text-xl md:text-2xl font-medium leading-normal text-kjc-950">
                                                Welcome to Kofcity Job Center
                                            </h3>
                                            <hr className="mb-3"/>
                                            <p className="text-muted mt-3">
                                                Your best online job search platform. Use your email address and
                                                password to sign in to Kofcity Job Center
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start mt-2">
                                        <Form
                                            form={form}
                                            name="basic"
                                            className="w-full"
                                            initialValues={{remember: false}}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="off"
                                        >
                                            <div className="mb-0">
                                                <label htmlFor="email">Email</label>
                                               <KjcInput
                                                   label=""
                                                   name="email"
                                                   className="mt-1 items-center"
                                                   rules={[
                                                       {
                                                           required: true,
                                                           message: "Please input your email!",
                                                       },
                                                       {
                                                           type: "email",
                                                           message: "Please input valid email"
                                                       }
                                                   ]}
                                               />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="password">Password</label>
                                                <KjcPasswordInput
                                                    name="password"
                                                    className="mt-1"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: "Please input your password!",
                                                        },
                                                        {
                                                            min: 8,
                                                            message: "Password must be at least 8 characters.",
                                                        }
                                                    ]}
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <Form.Item<FieldType>
                                                    name="remember"
                                                    valuePropName="checked"
                                                    className="text-left"
                                                >
                                                    <Checkbox>Remember me</Checkbox>
                                                    <span
                                                        className="capitalize font-normal text-xs text-neutral-800 float-end">
                                                        <Link
                                                            to={'/auth/forgot-password'}
                                                        >
                                                            Forgot Password
                                                        </Link>
                                                    </span>
                                                </Form.Item>
                                            </div>

                                            <div className="mb-4">
                                                <Form.Item>
                                                    <KjcButton
                                                        type="primary"
                                                        htmlType="submit"
                                                        className="inline-block w-full border-0 rounded bg-kjcBtn-400 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white ease-in-out hover:bg-kjcBtn-500 focus:bg-kjcBtn-500 active:bg-kjcBtn-600 hover:shadow-kjcBtn-500 focus:shadow-kjcBtn-500 active:shadow-kjcBtn-600 focus:outline-none focus:ring-0 submitBtnsHover"
                                                    >
                                                        Continue
                                                    </KjcButton>

                                                </Form.Item>
                                            </div>

                                            <div className="text-neutral-800 text-center text-xs">
                                                Don't have an account?
                                                <span
                                                    className="capitalize font-bold text-jybekBtn-600">
                                                    <Link
                                                        to={`${ACCOUNT_REGISTRATION_ROUTE_PATH}${REGISTRATION_ROUTE_PATH}`}
                                                    >
                                                        Sign Up
                                                    </Link>
                                                </span>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </KjcCard>
                        </div>
                    </Col>
                </Col>
            </Row>
        </>
    );
};

export default withBaseLayout(Login);

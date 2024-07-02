import {Link, useNavigate} from "react-router-dom";
import KjcImage from "../../../../builders/KjcImage";
import {Checkbox, Form, FormProps, Input} from "antd";
import KjcButton from "../../../../builders/KjcButton";
import KjcCard from "../../../../builders/KjcCard";
import {REGISTRATION_ROUTE_PATH, USER_REGISTRATION_PATH} from "../../registration/RegistrationRoutes.constants.ts";
import {withBaseLayout} from "../../../layout/hoc/withBaseLayout.tsx";

/**
*This page handles user login. It enables existing users to access their accounts by entering
*their credentials, including email and password. The login process incorporates security measures
*like encryption and error handling to protect user data. The user interface is designed to be
*simple and efficient, providing a seamless login experience for returning users.
 */

type FieldType = {
    email?: string;
    password?: string;
    remember?: boolean;
};
const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish: FormProps<FieldType>["onFinish"] = async () => {
        /* */ };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        /* */) => {
       // console.log("Failed:", errorInfo);
    };

    const handleOnLogoClick = () => {
        navigate('/')
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md min-h-2/4 md:w-3/6 lg:w-2/6">
                    <KjcCard
                        className="shadow-2xl"
                    >
                        <div className="text-sm">
                            <div className="flex flex-col justify-left">
                                <KjcImage
                                    onClick={handleOnLogoClick}
                                    width={150}
                                    src=""
                                    className="img-fluid bg-center mb-6"
                                    alt="Kjc Logo"
                                />
                                <div>
                                    <h3 className="mb-3 mt-0 text-2xl font-medium leading-tight text-jybek-600">
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
                                        <label htmlFor="">Email</label>
                                        <Form.Item<FieldType>
                                            label=""
                                            name="email"
                                            className="mt-2"
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
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="">Password</label>
                                        <Form.Item<FieldType>
                                            name="password"
                                            className="mt-2"
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
                                        >
                                            <Input.Password/>
                                        </Form.Item>
                                    </div>

                                    <div className="mb-4">
                                        <Form.Item<FieldType>
                                            name="remember"
                                            valuePropName="checked"
                                            className="text-left"
                                        >
                                            <Checkbox>Remember me</Checkbox>
                                            <span
                                                className="capitalize font-normal text-xs text-neutral-800 float-end ">
                                                <Link  to={'/auth/forgot-password'} className="CustomHover">Forgot Password</Link>
                                            </span>
                                        </Form.Item>
                                    </div>

                                    <div className="mb-4">
                                        <Form.Item>
                                            <KjcButton
                                                type="primary"
                                                htmlType="submit"
                                                className="inline-block w-full border-0 rounded bg-kjcBtn-600 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-kjcBtn-400 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-kjcBtn-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong submitBtnsHover"
                                            >
                                                Continue
                                            </KjcButton>
                                        </Form.Item>
                                    </div>

                                    <div className="text-neutral-800 text-center text-xs">
                                        Don't have an account? <span
                                        className="capitalize font-bold text-jybekBtn-600"> <Link
                                        to={REGISTRATION_ROUTE_PATH + USER_REGISTRATION_PATH} className="CustomHover">Sign Up</Link></span>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </KjcCard>
                </div>
            </div>
        </>
    );
};


export default withBaseLayout(Login);

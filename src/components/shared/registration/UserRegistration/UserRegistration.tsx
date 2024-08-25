import {Col, Form, FormProps, message, Row} from "antd";
import KjcCard from "../../../../builders/KjcCard";
import KjcButton from "../../../../builders/KjcButton";
import KjcInput from "../../../../builders/KjcInput";
import KjcPasswordInput from "../../../../builders/KjcPasswordInput";
import { Rule } from "postcss";
import { withBaseLayout } from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import {GoogleOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {AUTH_ROUTE_PATH, LOGIN_PATH} from "../../auth/AuthRoutes.constants.ts";
import {doCreateUserWithEmailAndPassword, doSignInWithGoogle} from "../../../../utils/firebase/auth.ts";
import {useState} from "react";

type FieldType = {
    email?: string;
    password?: string;
    confirm_password?: string;
};

const UserRegistration = () => {
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
           if(!isRegistering) {
               setIsRegistering(true);
               try{
                   await doCreateUserWithEmailAndPassword(formData.email!, formData.password!);
                   message.success("Successfully registered an account!");
               } catch (error) {
                   message.error("Error occurred!")
               } finally {
                   setIsRegistering(false)
               }
           }
    };

    const onGoogleSignIn = async () => {
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doSignInWithGoogle();
            } catch (err) {
                message.error("Google Sign-In failed. Please try again.");
            } finally {
                setIsRegistering(false);
            }
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
        // Handle failure to submit...
    };

    return (
        <>
            <Row style={{ minHeight: "100vh" }} className={"bg-white"}>
                <Col span={24}>
                    <div className="hidden md:flex w-full relative h-[400px] bg-kjcBtn-200 border-b-2 border-b-gray-300"></div>
                    <div
                        className="absolute w-full max-w-4xl px-0 md:px-16 z-10 bg-white shadow-lg"
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
                                        <Link to={`${AUTH_ROUTE_PATH}${LOGIN_PATH}`}>
                                            <h3 className={"p-2 text-center bg-kjcBtn-50 text-sm border-2 border-neutral-200 cursor-pointer hover:font-semibold hover:underline hover:bg-kjcBtn-200 rounded-md"}>
                                                Have an account? <span>Log in</span></h3>
                                        </Link>
                                        <h1 className={"font-semibold text-2xl capitalize"}>Create An Account</h1>
                                    </div>
                                    <div
                                        className="items-center"
                                        onClick={onGoogleSignIn}
                                    >
                                        <h3 className={"font-semibold text-center text-lg p-3 border-2 border-neutral-200 cursor-pointer hover:bg-neutral-300 rounded-lg"}>
                                            <span><GoogleOutlined/></span> Continue with Google
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-center mb-4">
                                        <p className="text-muted mt-3 text-pretty capitalize">
                                          Or Sign up with email
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
                                                        //eslint-disable-next-line
                                                        ({ getFieldValue }: { getFieldValue: (name: string) => any }) => ({
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
                                                        className="w-full rounded-md bg-kjcBtn-200 py-4 font-semibold text-black  text-lg ease-in-out"
                                                    >
                                                        Create Account
                                                    </KjcButton>
                                                </Form.Item>
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

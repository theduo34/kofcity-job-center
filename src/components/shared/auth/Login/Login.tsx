import { Col, Form, FormProps, Row, Checkbox, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import KjcCard from "../../../../builders/KjcCard";
import KjcButton from "../../../../builders/KjcButton";
import KjcInput from "../../../../builders/KjcInput";
import KjcPasswordInput from "../../../../builders/KjcPasswordInput";
import { withBaseLayout } from "../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import { auth, db } from "../../../../utils/firebase/firebase.ts";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { USER_ROUTE_PATH} from "../../../user/UserRoutes.constants.ts";
import {DASHBOARD_ROUTES_PATH} from "../../../user/Dashboard/DashboardRoutes.constants.ts";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
    REGISTRATION_ROUTE_PATH
} from "../../registration/RegistrationRoutes.constants.ts";

type FieldType = {
    email?: string;
    password?: string;
    remember?: boolean;
};

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email!, formData.password!);
            const user = userCredential.user;

            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userUUID = userDoc.data()?.uuid;
                if (userUUID) {
                    navigate(`${USER_ROUTE_PATH}${userUUID}${DASHBOARD_ROUTES_PATH}`);
                }
            }  else {
                message.error("User does not exist!");
            }
            form.resetFields();
        } catch (error) {
            message.error("Invalid email or password");
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () => {
        message.error("Error occurred! Field required");
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
                                        <div className="items-center space-y-4">
                                            <Link to={`${ACCOUNT_REGISTRATION_ROUTE_PATH}${REGISTRATION_ROUTE_PATH}`}>
                                                <h3 className={"p-2 text-center bg-kjcBtn-50 text-sm border-2 border-neutral-200 cursor-pointer hover:font-semibold hover:underline hover:bg-kjcBtn-200 rounded-md"}>
                                                   Don't Have an Account Yet? <span>Sign up</span></h3>
                                            </Link>
                                            <h1 className={"font-semibold text-2xl capitalize"}>Please Log in</h1>
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
                                        <div className="mb-4">
                                                <label htmlFor="email">Email</label>
                                                <KjcInput
                                                    label=""
                                                    name="email"
                                                    className="mt-1"
                                                    rules={[
                                                        {required: true, message: "Please input your email!"},
                                                        {type: "email", message: "Please input a valid email"},
                                                    ]}
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="password">Password</label>
                                                <KjcPasswordInput
                                                    name="password"
                                                    className="mt-1"
                                                    rules={[
                                                        {required: true, message: "Please input your password!"},
                                                        {min: 8, message: "Password must be at least 8 characters."},
                                                    ]}
                                                />
                                            </div>

                                            <div className="mb-4 flex justify-between">
                                                <Form.Item<FieldType>
                                                    name="remember"
                                                    valuePropName="checked"
                                                    className="text-left"
                                                >
                                                    <Checkbox>Remember me</Checkbox>
                                                </Form.Item>
                                                <Link to={'/auth/forgot-password'} className="text-neutral-800 text-xs">
                                                    Forgot Password
                                                </Link>
                                            </div>

                                            <div className="mb-4">
                                                <Form.Item>
                                                    <KjcButton
                                                        type="primary"
                                                        htmlType="submit"
                                                        className="w-full rounded-md bg-kjcBtn-200 py-4 font-semibold text-black  text-lg ease-in-out"
                                                    >
                                                        Log In
                                                    </KjcButton>
                                                </Form.Item>
                                            </div>
                                            <div>
                                                <p>By continuing, you agree to Kofcity Job Center's Terms of Use and Privacy Policy. You consent to receive job recommendations, featured job alerts, and updates via email. You can unsubscribe at any time by following the instructions in our emails or updating your communication preferences."

                                                </p>
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

export default withBaseLayout(Login);

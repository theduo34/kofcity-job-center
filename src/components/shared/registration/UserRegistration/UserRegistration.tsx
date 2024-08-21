import {Col, Form, FormProps, Row} from "antd";
import {Link,} from "react-router-dom";
import KjcCard from "../../../../builders/KjcCard";
import KjcButton from "../../../../builders/KjcButton";
import KjcImage from "../../../../builders/KjcImage";
import registerUser from "/public/assets/images/user/registration/registerUser.gif"
import KjcPhoneNumber from "../../../../builders/KjcPhoneNumber/KjcPhoneNumber.tsx";
import {useState} from "react";
import logo from '/public/assets/images/logo/IMG.png';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {CountryCode} from "libphonenumber-js/types";
import {parsePhoneNumberWithError} from "libphonenumber-js";
import KjcInput from "../../../../builders/KjcInput";
import KjcPasswordInput from "../../../../builders/KjcPasswordInput";
import {Rule} from "postcss";

/**
 * Renders the user registration component.
 *
 * @return {JSX.Element} The rendered user registration component.
 */

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
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [phoneNumberCountry, setPhoneNumberCountry] = useState<CountryCode>('GH');
    const [form] = Form.useForm();

    //onFinish event
    const onFinish: FormProps<FieldType>["onFinish"] = async (formData) => {
        const parsePhoneNumber = parsePhoneNumberWithError(phoneNumber, phoneNumberCountry);
        if (parsePhoneNumber) {
            formData["phone"] = parsePhoneNumber.number;
        }
        form.resetFields();
        console.log(formData)
    }

    //onFinishFailed event
    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = () =>{
        // failure to submit....
    }

    return (
        <>
            <Row
                justify="end"
                align="top"
            >
                <Col span={24} className={"items-center justify-center flex"}>
                    <Col
                        sm={24}
                        md={24}
                        lg={18}
                    >

                        <div className="items-center min-h-screen ">
                            <div className="pt-8 pl-8">
                                {/*<ArrowLeftOutlined />*/}
                            </div>
                            <div className={"flex items-center justify-center lg:justify-between"}>
                                <div className="hidden lg:block">
                                    <div>
                                        <KjcImage
                                            src={registerUser}
                                            alt="Animated gif"
                                        />
                                    </div>
                                </div>

                                <div className="xs:max-w-sm lg:w-4/6 xl:w-2/5 shadow-none lg:shadow-lg">
                                    <KjcCard>
                                        <div className="text-md md:text-lg">
                                            <div className="flex flex-col items-center justify-center">
                                                <KjcImage
                                                    width={100}
                                                    src={logo}
                                                    className="img-fluid bg-center"
                                                    alt="KJCLogo"
                                                />
                                                <div>
                                                    <p className="text-muted">
                                                        Unlock Your Ultimate Future Potential. Fill Out the Form to
                                                        Register
                                                        Now!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <Form
                                                    form={form}
                                                    name="basic"
                                                    className="w-full"
                                                    onFinish={onFinish}
                                                    onFinishFailed={onFinishFailed}
                                                    autoComplete="off"
                                                >
                                                    <div className="">
                                                        <label htmlFor="first_name">First Name</label>
                                                        <KjcInput
                                                            label=""
                                                            name="first_name"
                                                            className="mt-1"
                                                            placeholder="Doe"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please input your first name"
                                                                },
                                                            ]}
                                                        />
                                                    </div>

                                                    <div className="">
                                                        <label htmlFor="last_name">Last Name</label>
                                                        <KjcInput
                                                            label=""
                                                            name="last_name"
                                                            className="mt-1"
                                                            placeholder="John"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: "Please input last name"
                                                                },
                                                            ]}
                                                        />
                                                    </div>

                                                    <div className="mb-0">
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
                                                                    message: "Please input valid email"
                                                                },
                                                            ]}
                                                        />
                                                    </div>

                                                    <div className="mb-0">
                                                        <label htmlFor="phone">Phone Number</label>
                                                        <KjcPhoneNumber
                                                            form={form}
                                                            name="phone"
                                                            label="Phone Number"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Please input your phone number'
                                                                },
                                                            ]}
                                                            phoneNumber={phoneNumber}
                                                            setPhoneNumber={setPhoneNumber}
                                                            phoneNumberCountry={phoneNumberCountry}
                                                            setPhoneNumberCountry={setPhoneNumberCountry}
                                                        />
                                                    </div>

                                                    <div className="mb-0">
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
                                                                    message: "Please input your Password !"
                                                                },
                                                                {
                                                                    min: 8,
                                                                    message: "Password has to be at least 8 characters long !"
                                                                }
                                                            ]}
                                                        />
                                                    </div>

                                                    <div className='mb-0'>
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
                                                                    message: "Please confirm your Password!"
                                                                },
                                                                ({getFieldValue}: {
                                                                    getFieldValue: (name: string) => string
                                                                }) => ({
                                                                    validator(_: Rule, value: string) {
                                                                        if (!value || getFieldValue('password') === value) {
                                                                            return Promise.resolve();
                                                                        }
                                                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                                                    },
                                                                }),
                                                            ]}
                                                        />
                                                    </div>

                                                    <div className="hidden my-0">
                                                        <Form.Item
                                                            name="sms_notification"
                                                            label=""
                                                            valuePropName="checked">
                                                            <label
                                                                htmlFor="sms_notification"
                                                                className="mx-3">
                                                                Interested in Receiving SMS Notification
                                                            </label>
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

                                                    <div className="text-neutral-800 text-center text-sm">
                                                        Already a user?
                                                        <span
                                                            className="capitalize font-bold text-jybekBtn-600">
                                                        <Link
                                                            to={'/auth/login'}
                                                            className="CustomHover">
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
                        </div>

                    </Col>

                </Col>
            </Row>
        </>
    );
};

export default UserRegistration;

import {Col, Form, FormProps, Input, Row} from "antd";
import {Link,} from "react-router-dom";
import KjcCard from "../../../../builders/KjcCard";
import KjcButton from "../../../../builders/KjcButton";
import KjcImage from "../../../../builders/KjcImage";
import registerUser from "/public/assets/images/user/registration/registerUser.gif"
import KjcPhoneNumber from "../../../../builders/KjcPhoneNumber/KjcPhoneNumber.tsx";
import {useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {CountryCode} from "libphonenumber-js/types";
import {parsePhoneNumberWithError} from "libphonenumber-js";

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
                        <div className="min-h-screen flex items-center justify-center lg:justify-between">
                            <div className="hidden lg:block">
                                <KjcImage
                                    src={registerUser}
                                    alt="Animated gif"
                                />
                            </div>

                            <div className="xs:max-w-sm lg:w-4/6 xl:w-2/6 shadow-none lg:shadow-lg">
                                <KjcCard>
                                    <div className="text-md md:text-lg">
                                        <div className="flex flex-col justify-left mb-3">
                                            <KjcImage
                                                width={150}
                                                src=""
                                                className="img-fluid bg-center mb-6"
                                                alt="KJCLogo"
                                            />
                                            <div>
                                                <hr className="mb-3"/>
                                                <p className="text-muted mt-3">
                                                    Unlock Your Ultimate Future Potential. Fill Out the Form to Register
                                                    Now!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start mt-2 ">
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
                                                    <Form.Item<FieldType>
                                                        label=""
                                                        name="first_name"
                                                        className="mt-1"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Please input your first name"
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="Doe"/>
                                                    </Form.Item>
                                                </div>

                                                <div className="">
                                                    <label htmlFor="last_name">Last Name</label>
                                                    <Form.Item<FieldType>
                                                        label=""
                                                        name="last_name"
                                                        className="mt-1"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Please input last name"
                                                            },
                                                        ]}
                                                    >
                                                        <Input placeholder="John"/>
                                                    </Form.Item>
                                                </div>

                                                <div className="mb-0">
                                                    <label htmlFor="email">Email</label>
                                                    <Form.Item<FieldType>
                                                        label=""
                                                        name="email"
                                                        className="mt-1"
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
                                                    >
                                                        <Input placeholder="example@gmail.com"/>
                                                    </Form.Item>
                                                </div>

                                                <div className="mb-0">
                                                    <label htmlFor="phone">Phone Number</label>
                                                    <KjcPhoneNumber
                                                        form={form}
                                                        name="phone"
                                                        label="Phone Number"
                                                        rules={[
                                                            {required: true, message: 'Please input your phone number'},
                                                        ]}
                                                        phoneNumber={phoneNumber}
                                                        setPhoneNumber={setPhoneNumber}
                                                        phoneNumberCountry={phoneNumberCountry}
                                                        setPhoneNumberCountry={setPhoneNumberCountry}
                                                    />
                                                </div>

                                                <div className="mb-0">
                                                    <label htmlFor="password">Password</label>
                                                    <Form.Item<FieldType>
                                                        label=""
                                                        name="password"
                                                        className="mt-1"
                                                        hasFeedback
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

                                                    >
                                                        <Input.Password placeholder="***********"/>
                                                    </Form.Item>
                                                </div>

                                                <div className='mb-0'>
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                    <Form.Item<FieldType>
                                                        label=""
                                                        name="confirm_password"
                                                        className="mt-1"
                                                        hasFeedback
                                                        dependencies={['password']}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Please confirm your Password!"
                                                            },
                                                            ({getFieldValue}) => ({
                                                                validator(_, value) {
                                                                    if (!value || getFieldValue('password') === value) {
                                                                        return Promise.resolve();
                                                                    }
                                                                    return Promise.reject(new Error('The new password that you entered do not match !'));
                                                                },
                                                            }),
                                                        ]}
                                                    >
                                                        <Input.Password placeholder="***********"/>
                                                    </Form.Item>
                                                </div>

                                                <div className="hidden mb-0">
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
                                                            className="inline-block w-full items-center border-0 rounded bg-kjcBtn-400 px-7 font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-kjcBtn-500 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-kjcBtn-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                                        >
                                                            Continue
                                                        </KjcButton>
                                                    </Form.Item>
                                                </div>

                                                <div className="text-neutral-800 text-center text-sm">
                                                    Already a user? <span
                                                    className="capitalize font-bold text-jybekBtn-600"> <Link
                                                    to={'/auth/login'} className="CustomHover">Login</Link></span>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </KjcCard>
                            </div>

                        </div>

                    </Col>

                </Col>
            </Row>
        </>
    );
};

export default UserRegistration;

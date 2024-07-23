import KjcCard from "../../../../builders/KjcCard";
import KjcImage from "../../../../builders/KjcImage";
import {Form, FormProps} from "antd";
import KjcInput from "../../../../builders/KjcInput";
import {Link, useNavigate} from "react-router-dom";
import KjcButton from "../../../../builders/KjcButton";


type FieldType = {
    email?: string;
}
/**
 * Renders forgot password component.
 *
 * @return {JSX.Element} The rendered forgot password component.
 */
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleOnLogoClick = () => {
        navigate("")
    }

    const onFinish: FormProps<FieldType>["onFinish"] = () => {

    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo) =>{
        console.log("failed:", errorInfo);
    };


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md min-h-2/4 md:w-3/6 lg:w-2/6">
                <KjcCard
                    className="shadow-2xl"
                >
                    <div className="text-sm">
                        <div className="flex flex-col justify-left mb-4">
                            <KjcImage
                                onClick={handleOnLogoClick}
                                width={150}
                                src={""}
                                className="img-fluid w-32 bg-center mb-6"
                                alt="Kjc Logo"
                            />
                            <div>
                                <h3 className="mb-3 mt-0 text-2xl font-medium leading-tight text-jybek-600">
                                   Forgot Password
                                </h3>
                                <hr className="mb-3"/>
                                <p className="text-muted mt-3">
                                    Enter Your Email to Recover Your Account Password and Get Back on Track!
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start mt-2">
                            <Form
                                form={form}
                                name="basic"
                                className="w-full"
                                initialValues={{remember: true}}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <div className="mb-4">
                                    <label htmlFor="">Email</label>
                                    <KjcInput
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
                                    />
                                </div>

                                <div className="mb-4">
                                    <Form.Item>
                                        <KjcButton
                                            type='primary'
                                            htmlType="submit"
                                            className="inline-block w-full border-0 rounded bg-kjcBtn-400 px-7 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-white ease-in-out hover:bg-kjcBtn-500 focus:bg-kjcBtn-500 active:bg-kjcBtn-600 hover:shadow-kjcBtn-500 focus:shadow-kjcBtn-500 active:shadow-kjcBtn-600 focus:outline-none focus:ring-0 submitBtnsHover"
                                        >
                                            Continue
                                        </KjcButton>
                                    </Form.Item>
                                </div>

                                <div className="text-neutral-800 text-center text-xs">
                                    Remembered your password? <span className="capitalize font-bold text-jybekBtn-600 "> <Link
                                    to={'/auth/login'} className='CustomHover'>Sign In</Link> </span>
                                </div>
                            </Form>
                        </div>
                    </div>
                </KjcCard>
            </div>
        </div>
    );
}
export default ForgotPassword
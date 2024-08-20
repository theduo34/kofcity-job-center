import { Form, FormProps } from "antd";
import KjcInput from "../../../../../../builders/KjcInput";

type FieldType = {
    company_name: string;
    company_email: string;
};

interface BasicInformationProps {
    formRef: any;
}

const BasicInformation = ({ formRef }: BasicInformationProps) => {
    const [form] = Form.useForm();
    formRef.current = form;

    const onFinish: FormProps<FieldType>['onFinish'] = async (formData) => {
        console.log("Form submitted:", formData);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = async (errorInfo) => {
        console.error("Validation failed:", errorInfo);
    };

    return (
        <div className="w-full items-center justify-center flex">
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="items-center w-full"
            >
                {/*company name email field*/}
                <div className="w-full">
                    <label htmlFor="company_name" className="text-lg font-semibold">
                        Company Name
                    </label>
                    <KjcInput
                        name="company_name"
                        placeholder="Enter Company Name"
                        className="mt-1"
                        rules={[{ required: true, message: "Please input company's name" }]}
                    />
                </div>
                {/*company email input field*/}
                <div className="w-full">
                    <label htmlFor="company_email" className="text-lg font-semibold">
                        Company Email
                    </label>
                    <p>Work email should match company domain</p>
                    <KjcInput
                        name="company_email"
                        placeholder="e.g. theduo34@gmail.com"
                        className="mt-1"
                        rules={[
                            { required: true, message: "Please input company email" },
                            { type: "email", message: "Please input a valid email address" },
                        ]}
                    />
                </div>
            </Form>
        </div>
    );
};

export default BasicInformation;

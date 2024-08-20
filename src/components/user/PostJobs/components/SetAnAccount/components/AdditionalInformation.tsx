import { Form, FormProps } from "antd";
import KjcInput from "../../../../../../builders/KjcInput";

type FieldType = {
    company_description: string;
    company_linkedIn_profile: string;
    company_twitter_profile: string;
    company_facebook_profile: string;
};

interface AdditionalInformationProps {
    formRef: any;
}

const AdditionalInformation= ({ formRef }: AdditionalInformationProps) => {
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
                {/*company description field*/}
                <div className="w-full">
                    <label htmlFor="company_description" className="text-lg font-semibold">
                        Company Description
                    </label>
                    <KjcInput
                        name="company_description"
                        placeholder="Enter Company Name"
                        className="mt-1"
                        rules={[{ required: true, message: "Please input company's name" }]}
                    />
                </div>

                {/*company linkedIn profile input field*/}
                <div className="w-full">
                    <label htmlFor="company_linkedIn_profile" className="text-lg font-semibold">
                        LinkedIn Profile
                    </label>
                    <p>The company's LinkedIn profile link</p>
                    <KjcInput
                        name="company_linkedIn_profile"
                        placeholder=""
                        className="mt-1"
                        rules={[
                            { required: true, message: "Please input company linkedIn profile" },
                        ]}
                    />
                </div>

                {/*company twitter profile input field*/}
                <div className="w-full">
                    <label htmlFor="company_twitter_profile" className="text-lg font-semibold">
                        Twitter Profile
                    </label>
                    <p>The company's Twitter profile link</p>
                    <KjcInput
                        name="company_twitter_profile"
                        placeholder=""
                        className="mt-1"
                        rules={[
                            { required: true, message: "Please input company twitter profile" },
                        ]}
                    />
                </div>

                {/*company facebook profile input field*/}
                <div className="w-full">
                    <label htmlFor="company_facebook_profile" className="text-lg font-semibold">
                        Facebook Profile
                    </label>
                    <p>The company's facebook profile link</p>
                    <KjcInput
                        name="company_facebook_profile"
                        placeholder=""
                        className="mt-1"
                        rules={[
                            { required: true, message: "Please input company facebook profile" },
                        ]}
                    />
                </div>
            </Form>
        </div>
    );
};

export default AdditionalInformation;

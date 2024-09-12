import {Form, FormProps, message, Select, Upload, UploadProps} from "antd";
import {InboxOutlined} from "@ant-design/icons";
import {
    getSearchInputSelects
} from "../../../../JobSeekerDashboard/components/JobRecommendation/JobRecommendation.constants.tsx";
import KjcInput from "../../../../../../../builders/KjcInput";

type FieldType = {
    company_website_link: string;
    company_location: string;
    company_logo: string;
    industry_type: string;
};

interface CompanyDetailsProps {
    //eslint-disable-next-line
    formRef: any;
}

const props: UploadProps = {
    name: "file",
    action: "/upload_company_logo",      //server url of upload company logo
    headers: {
        authorization: "authorization-text"
    },
    maxCount: 1,
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if(info.file.status === "done") {
            message.success(`${info.file.name} file uploaded`);
        }
        else if(info.file.status === "error") {
            message.error(`${info.file.name} upload error`);
        }
    }

}
//eslint-disable-next-line
const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};



const CompanyDetails = ({ formRef }:CompanyDetailsProps) => {
    const [form] = Form.useForm();
    formRef.current = form;

    //industry type select options
    const industryTypeSelect = getSearchInputSelects()

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
                {/*company website link*/}
                <div className="w-full">
                    <label htmlFor="company-webiste" className="text-lg font-semibold">
                        Company Website
                    </label>
                    <p>The Link to the official website of the company</p>
                    <KjcInput
                        name="company_website"
                        placeholder="Enter company website -[Optional]"
                        className="mt-1"
                    />
                </div>
                {/*company location*/}
                <div className="w-full">
                    <label htmlFor="company_location" className="text-lg font-semibold">
                        Company Location
                    </label>
                    <p>The location of the company</p>
                    <KjcInput
                        name="company_location"
                        placeholder="e.g apt num, street, city."
                        className="mt-1"
                        rules={[
                            {required: true, message: "Please input company location"},
                        ]}
                    />
                </div>

                {/*industry type*/}
                <div className="w-full">
                    <label htmlFor="industry-type" className="text-lg font-semibold">
                        Industry Type
                    </label>
                    <p>The industry or  sector the company operates in</p>
                    <Form.Item
                        name="industry-type"
                        className="mt-1"
                        rules={[
                            {required: true, message: "Please select company industry type"}
                        ]}
                    >
                        <Select
                            placeholder={"Select company industry type"}
                        >
                            {
                                industryTypeSelect.filter(item => item.key === "industry")
                                    .map((item) => (
                                        item.options?.map((option) => (
                                            <Select.Option key={option.value} value={option.label}>{option.label}</Select.Option>
                                        ))
                                    ))
                            }
                        </Select>
                    </Form.Item>
                </div>

                {/*company logo*/}
                <div className="w-full flex-col">
                    <label htmlFor="company_logo" className="text-lg font-semibold">Company Logo</label>
                    <Form.Item
                        name="company-logo"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        className="mt-1"
                        // rules={[
                        //     { required: true, message: "Please upload company logo" },
                        // ]}
                    >
                        <Upload.Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined/>
                            </p>
                            <p className="font-semibold text-md">Click or drag file to this area to upload</p>
                            <p className="text-neutral-400 ">Strictly prohibited from uploading company data or other
                                banned files..</p>
                        </Upload.Dragger>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default CompanyDetails;

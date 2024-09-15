import {useEffect, useState} from "react";
import { CheckCircleOutlined, RightOutlined } from "@ant-design/icons";
import { getJobDetails } from "../JobDetails.constant.tsx";
import { Form, FormProps, message } from "antd";
import KjcInput from "../../../../../../../builders/KjcInput";

export type FieldType = {
    job_title: string;
    job_description: string;
    job_location: string;
    job_type: string;
    salary: string;
    educational_qualification: string;
    skills: string;
    experience_level: string;
    benefits: string;
};

interface ApplicationInfoProps {
    onSubmit: (data: FieldType) => void;
    formData: FieldType;
}
const ApplicationInfo = ({ onSubmit, formData }: ApplicationInfoProps) => {
    const [openItemKey, setOpenItemKey] = useState<string | null>(null);
    const [savedFields, setSavedFields] = useState<{ [key: string]: string }>({});
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue(formData);
    }, [formData]);

    const onFinished: FormProps<FieldType>["onFinish"] = async (formData) => {
        try {
            onSubmit(formData);
            message.success("Job Details Saved!!!");
        } catch (error) {
            console.error("Validation failed:", error);
        }
    };
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = () => {
        //
    };

    const handleItemClick = (key: string) => {
        if (openItemKey === key) {
            setOpenItemKey(null);
        } else {
            setOpenItemKey(key);
        }
    };

    const handleSave = (key: string) => {
        const value = form.getFieldValue(key);
        setSavedFields((prevState) => ({
            ...prevState,
            [key]: value,
        }));
        setOpenItemKey(null);
        console.log(value)
    };

    const jobDetails = getJobDetails();

    // const areAllFieldsFilled = () => {
    //     return jobDetails.every(item => savedFields[item.key as string]);
    // };

    return (
        <>
            <div className="items-center p-0 md:p-4 space-y-2 shadow-lg">
                <p className="p-2 shadow-lg bg-white">
                    Thank you for choosing our platform to find the best candidates for your team. We’re here to help
                    you create an eye-catching and detailed job listing that will attract the right talent. Please take
                    a few moments to fill in the job details below. Remember, a well-crafted job posting can make all
                    the difference in finding your ideal candidate.
                </p>
                <h2 className="font-semibold text-lg capitalize p-2 shadow-lg bg-white">Fill in your Job Details</h2>
            </div>
            {/* Job Details Fields */}
            <div className="w-full items-center pt-4">
                <Form
                    form={form}
                    onFinish={onFinished}
                    onFinishFailed={onFinishFailed}
                    initialValues={savedFields}
                >
                    <div className="w-full items-center p-0 md:p-4 space-y-4 shadow-lg">
                        {jobDetails.map(item => (
                            <div key={item.key} className="w-full">
                                <div
                                    className="flex items-center justify-between w-full px-2 py-4 shadow-lg bg-white rounded-3xl font-semibold cursor-pointer"
                                    onClick={() => handleItemClick(item.key as string)}
                                >
                                    <p className="flex items-center">
                                    <span className="me-2">
                                        {savedFields[item.key as string] ? (
                                            <CheckCircleOutlined style={{fontSize: "18px", color: "green"}}/>
                                        ) : (
                                            <CheckCircleOutlined style={{fontSize: "18px", color: "gray"}}/>
                                        )}
                                    </span>
                                        {item.label}
                                    </p>
                                    <span className="items-center"><RightOutlined/></span>
                                </div>

                                {/* Show the input field and save button if the item is open */}
                                {openItemKey === item.key && (
                                    <div className="flex flex-col mt-2 bg-white p-4">
                                        <KjcInput
                                            name = {item.key}
                                            className="py-3"
                                            rules={[{ required: true, message: ""}]}
                                        />
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded"
                                            onClick={() => handleSave(item.key as string)}
                                        >
                                            Save
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/*<div className="flex justify-end pt-4">*/}
                    {/*    <KjcButton*/}
                    {/*        htmlType="submit"*/}
                    {/*        className="py-6 px-8 bg-kjcBtn-200 font-semibold rounded-lg shadow-lg"*/}
                    {/*        disabled={!areAllFieldsFilled()}*/}
                    {/*    >*/}
                    {/*        Save and Continue <ArrowRight/>*/}
                    {/*    </KjcButton>*/}
                    {/*</div>*/}
                </Form>
            </div>
        </>
    );
};

export default ApplicationInfo;

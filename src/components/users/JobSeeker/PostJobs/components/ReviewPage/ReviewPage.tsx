import { useState } from 'react';
import {Button, Form, Input, Row, Col, Select, message, Spin} from 'antd';
import { CheckCircleOutlined, EditOutlined, SendOutlined } from '@ant-design/icons';
import {useLocation, useNavigate} from 'react-router-dom';
import { withBaseLayout } from "../../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import WithContentLayout from "../../../../../layout/hoc/WithContentLayout";
import {
    getSearchInputSelects
} from "../../../JobSeekerDashboard/components/JobRecommendation/JobRecommendation.constants.tsx";

const ReviewPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { formData } = location.state || {};
    const [form] = Form.useForm();
    const [editable, setEditable] = useState(false);

    const [loading, setLoading] = useState<boolean>(false);

    if (formData) {
        form.setFieldsValue(formData);
    }

    const handleEdit = () => {
        setEditable(true);
    };

    const handleSave = () => {
        form
            .validateFields()
            .then(values => {
                console.log("Job details submitted:", values);
                setEditable(false);
            })
            .catch(errorInfo => {
                console.log("Form validation failed:", errorInfo);
            });
    };

    const handleCancel = () => {
        form.setFieldsValue(formData);
        setEditable(false);
    };

    const handleSubmit = () => {
        setLoading(true);
        form
            .validateFields()
            .then(values => {
                console.log("Job details submitted:", values);
                setTimeout(() => {
                    setLoading(false);
                    navigate('/user/post-jobs/existing-user', { state: { formData: values } });
                    message.success("Successfully posted a job!!!.");
                }, 2000)
            })
            .catch(errorInfo => {
                console.log("Form validation failed:", errorInfo);
            });
    };

    if (!formData) {
        return <p>No data available to display. Please go back and fill in the job details.</p>;
    }

    const searchOptions = getSearchInputSelects();

    // options for job type and industry type
    const jobTypeOptions = searchOptions.find(option => option.key === 'jobType')?.options || [];
    const industryOptions = searchOptions.find(option => option.key === 'industry')?.options || [];

    return (
        <>
            {
                loading && (
                    <div className="flex flex-col items-center justify-center w-full h-full bg-white fixed top-0 left-0 z-50">
                        <Spin size="large" />
                        Updating to job listings....
                    </div>
                )
            }
            <WithContentLayout>
                <div className="items-center justify-center w-full">
                    <div className="w-full md:w-[80%] lg:w-[90%] xl:w-[70%]">
                        <h2 className="font-sans text-lg">
                        <span className="font-mono text-xl block pb-2">
                            🎉 Fantastic Work! You're Almost There! 🚀
                        </span>

                            You’ve done a stellar job crafting your job posting. The next step is crucial – finalize
                            the details and get your job listing out there to attract top talent! With your effort and attention to detail, you’re on the brink of connecting with the perfect candidate who will thrive in the role you’ve meticulously outlined.

                            Take a moment to review and ensure everything is spot-on. Once you're confident, hit that
                            <span className="font-semibold text-lg mx-1">Submit</span> button and watch your opportunity unfold. Your ideal candidate is just a click away. Let’s get your job posted and start building your dream team today!

                            <span className="text-xl block pt-2 font-mono capitalize">Ready to make it happen? 🌟</span>
                        </h2>
                    </div>

                    <Form
                        form={form}
                        layout="vertical"
                        style={{ marginTop: '24px' }}
                    >
                        <Row gutter={24}>
                            <Col xs={24} sm={24} md={12}>
                                {/* Job Title */}
                                <Form.Item
                                    label="Job Title"
                                    name="job_title"
                                    rules={[{ required: true, message: 'Please input the job title' }]}
                                >
                                    <Input
                                        className="py-2"
                                        placeholder="Enter job title"
                                        disabled={!editable}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Job Description */}
                                <Form.Item
                                    label="Job Description"
                                    name="job_description"
                                    rules={[{ required: true, message: 'Please input the job description' }]}
                                >
                                    <Input.TextArea
                                        placeholder="Enter job description"
                                        rows={4}
                                        disabled={!editable}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Job Location */}
                                <Form.Item
                                    label="Job Location"
                                    name="job_location"
                                    rules={[{ required: true, message: 'Please input the job location' }]}
                                >
                                    <Input
                                        placeholder="Enter job location"
                                        disabled={!editable}
                                        className="py-2"
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Job Type */}
                                <Form.Item
                                    label="Job Type"
                                    name="job_type"
                                    rules={[{ required: true, message: 'Please input the job type' }]}
                                >
                                    <Select
                                        placeholder="Select job type (e.g., Full-time, Part-time)"
                                        disabled={!editable}
                                        className="h-10"
                                        options={jobTypeOptions}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* industry Type */}
                                <Form.Item
                                    label="Industy type"
                                    name="industry_type"
                                    rules={[{ required: true, message: 'Please industry type' }]}
                                >
                                    <Select
                                        placeholder="Select industyr type"
                                        disabled={!editable}
                                        className="h-10"
                                        options={industryOptions}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Salary */}
                                <Form.Item
                                    label="Salary"
                                    name="salary"
                                    rules={[{ required: true, message: 'Please input the salary range' }]}
                                >
                                    <Input
                                        placeholder="Enter salary range (e.g., $40,000 - $50,000)"
                                        disabled={!editable}
                                        className="py-2"
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Educational Qualification */}
                                <Form.Item
                                    label="Educational Qualification"
                                    name="educational_qualification"
                                    rules={[{ required: true, message: 'Please input the educational qualification' }]}
                                >
                                    <Input
                                        placeholder="Enter educational qualification required"
                                        disabled={!editable}
                                        className="py-2"
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Skills */}
                                <Form.Item
                                    label="Skills"
                                    name="skills"
                                    rules={[{ required: true, message: 'Please input the required skills' }]}
                                >
                                    <Input.TextArea
                                        placeholder="Enter required skills"
                                        rows={3}
                                        disabled={!editable}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Experience Level */}
                                <Form.Item
                                    label="Experience Level"
                                    name="experience_level"
                                    rules={[{ required: true, message: 'Please input the required experience level' }]}
                                >
                                    <Input
                                        placeholder="Enter experience level (e.g., Entry-level, Senior)"
                                        disabled={!editable}
                                        className="py-2"
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Benefits */}
                                <Form.Item
                                    label="Benefits"
                                    name="benefits"
                                    rules={[{ required: true, message: 'Please input the benefits' }]}
                                >
                                    <Input.TextArea
                                        placeholder="Enter job benefits (e.g., health insurance, remote work)"
                                        rows={3}
                                        disabled={!editable}
                                    />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                {/* Application Preference */}
                                <Form.Item
                                    label="Application Preference (Link or Email)"
                                    name="application_preference"
                                    rules={[{ required: true, message: 'Please input a link or email for applicants to apply' }]}
                                >
                                    <Input
                                        placeholder="Link or email for applicants to apply"
                                        className="py-2"
                                        disabled={!editable}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className="flex items-center justify-between md:justify-evenly mb-12">
                            <div className="flex items-center space-x-4">
                                {!editable ? (
                                    <Button
                                        type="default"
                                        icon={<EditOutlined />}
                                        onClick={handleEdit}
                                        className="py-2 md:py-5 bg-kjcBtn-200 rounded-lg shadow-lg font-semibold"
                                    >
                                        Edit Details
                                    </Button>
                                ) : (
                                    <div className="flex items-center space-x-4">
                                        <Button
                                            type="primary"
                                            icon={<CheckCircleOutlined />}
                                            onClick={handleSave}
                                            className={"py-2 md:py-5"}
                                        >
                                            Save Changes
                                        </Button>
                                        <Button
                                            type="default"
                                            onClick={handleCancel}
                                            className={"py-2 md:py-5"}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                )}
                            </div>
                            <Button
                                type="primary"
                                icon={<SendOutlined />}
                                onClick={handleSubmit}
                                className="flex items-center px-6 py-5 bg-blue-500 text-white font-semibold rounded-lg"
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </WithContentLayout>
        </>
    );
};

export default withBaseLayout(ReviewPage);

import {Form, Input, Select} from 'antd';
import {
    getSearchInputSelects
} from "../../../../JobSeekerDashboard/components/JobRecommendation/JobRecommendation.constants.tsx";

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
    industry_type: string;
    application_preference: string;
};

interface ApplicationInfoProps {
    onSubmit: (data: FieldType) => void;
    formData: FieldType;
    //eslint-disable-next-line
    form: any
}

const ApplicationInfo = ({ onSubmit, formData, form }: ApplicationInfoProps) => {
    const onFinished = (formData: FieldType) => {
        onSubmit(formData);
    };

    const searchOptions = getSearchInputSelects();

    // options for job type and industry type
    const jobTypeOptions = searchOptions.find(option => option.key === 'jobType')?.options || [];
    const industryOptions = searchOptions.find(option => option.key === 'industry')?.options || [];

    const experinceLevelOptions: {label?: string, value?: string}[] = [
        { value: "zeroToTwoYears", label: "0-2 years" },
        { value: "twoToFiveYears", label: "2-5 years" },
        { value: "fiveYearsPlus", label: "5+ years"}
    ]


    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={formData}
            onFinish={onFinished}
        >
            {/* Job Title */}
            <Form.Item
                label="Job Title"
                name="job_title"
                rules={[{ required: true, message: 'Please input the job title' }]}
            >
                <Input placeholder="Enter job title" className={"py-2"} />
            </Form.Item>

            {/* Job Description */}
            <Form.Item
                label="Job Description"
                name="job_description"
                rules={[{ required: true, message: 'Please input the job description' }]}
            >
                <Input.TextArea placeholder="Enter job description" rows={4}  />
            </Form.Item>

            {/* Job Location */}
            <Form.Item
                label="Job Location"
                name="job_location"
                rules={[{ required: true, message: 'Please input the job location' }]}
            >
                <Input placeholder="Enter job location" className={"py-2"} />
            </Form.Item>

            {/* Job Type */}
            <Form.Item
                label="Job Type"
                name="job_type"
                rules={[{ required: true, message: 'Please select the job type' }]}
            >
                <Select placeholder="Select job type (e.g., Full-time, Part-time)" className={"h-10"} options={jobTypeOptions} />
            </Form.Item>

            {/*industry type*/}
            <Form.Item
                label="Industry type"
                name="industry_type"
                rules={[{ required: true, message: 'Please select industry type' }]}
            >
                <Select placeholder="Select industry" className={"h-10"} options={industryOptions} />
            </Form.Item>

            {/* Salary */}
            <Form.Item
                label="Salary"
                name="salary"
                rules={[{ required: true, message: 'Please input the salary range' }]}
            >
                <Input placeholder="Enter salary range (e.g., $40,000 - $50,000)" className={"py-2"} />
            </Form.Item>

            {/* Educational Qualification */}
            <Form.Item
                label="Educational Qualification"
                name="educational_qualification"
                rules={[{ required: true, message: 'Please input the educational qualification' }]}
            >
                <Input placeholder="Enter educational qualification required" className={"py-2"} />
            </Form.Item>

            {/* Skills */}
            <Form.Item
                label="Skills"
                name="skills"
                rules={[{ required: true, message: 'Please input the required skills' }]}
            >
                <Input.TextArea placeholder="Enter required skills" rows={3} className={"py-2"}/>
            </Form.Item>

            {/* Experience Level */}
            <Form.Item
                label="Experience Level"
                name="experience_level"
                rules={[{ required: true, message: 'Please input the required experience level' }]}
            >
                <Select placeholder="Select experience level (e.g., Entry-level, Senior)" className={"h-10"} options={ experinceLevelOptions}/>
            </Form.Item>

            {/* Benefits */}
            <Form.Item
                label="Benefits"
                name="benefits"
                rules={[{ required: true, message: 'Please input the benefits' }]}
            >
                <Input.TextArea placeholder="Enter job benefits (e.g., health insurance, remote work)" rows={3} />
            </Form.Item>

            <Form.Item
                label="Application Preference(Link or Email)"
                name="application_preference"
                rules={[{ required: true, message: 'Please input a link or email for applicant to apply' }]}
            >
                <Input placeholder={"Link or email for applicant to apply"} className={"py-2"} />
            </Form.Item>

        </Form>
    );
};

export default ApplicationInfo;

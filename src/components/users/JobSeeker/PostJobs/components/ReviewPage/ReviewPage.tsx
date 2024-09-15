import { Button, Card, Descriptions, Typography, Space } from 'antd';
import { CheckCircleOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {withBaseLayout} from "../../../../../layout/hoc/WithBaseLayout/withBaseLayout.tsx";
import WithContentLayout from "../../../../../layout/hoc/WithContentLayout";

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

// interface ReviewProps {
//     formData: FieldType;
// }

const ReviewPage = ( ) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('');
    };

    const handleSubmit = () => {
    };

    return (
        <WithContentLayout>
            <Card>
                <Typography.Title level={3}>Review Your Job Posting</Typography.Title>
                <p>Please review the details below before submitting.</p>

                <Card style={{ marginTop: '24px' }}>
                    <Descriptions title="Job Details" bordered>
                        <Descriptions.Item label="Job Title">
                            formData.job_title
                        </Descriptions.Item>
                        <Descriptions.Item label="Job Description">
                            formData.job_description
                        </Descriptions.Item>
                        <Descriptions.Item label="Location">
                            formData.job_location
                        </Descriptions.Item>
                        <Descriptions.Item label="Job Type">
                            formData.job_type
                        </Descriptions.Item>
                        <Descriptions.Item label="Salary">
                            formData.salary
                        </Descriptions.Item>
                        <Descriptions.Item label="Educational Qualification">
                            formData.educational_qualification
                        </Descriptions.Item>
                        <Descriptions.Item label="Skills">
                            formData.skills
                        </Descriptions.Item>
                        <Descriptions.Item label="Experience Level">
                            formData.experience_level
                        </Descriptions.Item>
                        <Descriptions.Item label="Benefits">
                            formData.benefits
                        </Descriptions.Item>
                    </Descriptions>
                </Card>

                <Space style={{ marginTop: '24px', display: 'flex', justifyContent: 'center' }}>
                    <Button type="primary" icon={<CheckCircleOutlined />} onClick={handleSubmit}>
                        Confirm and Submit
                    </Button>
                    <Button type="default" icon={<EditOutlined />} onClick={handleEdit}>
                        Edit Details
                    </Button>
                </Space>
            </Card>
        </WithContentLayout>
    );
};

export default withBaseLayout(ReviewPage);

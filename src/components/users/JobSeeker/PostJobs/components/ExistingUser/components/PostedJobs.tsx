import React, { useState } from 'react';
import { Table, Button, Tag, Space } from 'antd';
import {EditOutlined, EyeOutlined, StopOutlined} from '@ant-design/icons';

interface Job {
    key: string;
    title: string;
    status: 'Open' | 'Closed';
    datePosted: string;
}

const PostedJobs: React.FC = () => {
    //  data for jobs
    const [jobs, setJobs] = useState<Job[]>([
        { key: '1', title: 'Software Engineer', status: 'Open', datePosted: '2024-09-01' },
        { key: '2', title: 'Marketing Manager', status: 'Closed', datePosted: '2024-08-15' },
        { key: '3', title: 'UI/UX Designer', status: 'Open', datePosted: '2024-08-25' },
        { key: '4', title: 'Product Manager', status: 'Closed', datePosted: '2024-09-10' },
        { key: '5', title: 'Data Scientist', status: 'Open', datePosted: '2024-09-12' },
        { key: '6', title: 'Front-end Developer', status: 'Open', datePosted: '2024-09-05' },
        { key: '7', title: 'Back-end Developer', status: 'Closed', datePosted: '2024-08-30' },
        { key: '8', title: 'DevOps Engineer', status: 'Open', datePosted: '2024-09-08' },
        { key: '9', title: 'Sales Manager', status: 'Open', datePosted: '2024-09-03' },
        { key: '10', title: 'HR Specialist', status: 'Closed', datePosted: '2024-08-20' },
    ]);

    // columns for displaying job info
    const columns = [
        {
            title: 'Job Title',
            dataIndex: 'title',
            key: 'title',
            render: (text: string) => <span>{text}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: 'Open' | 'Closed') => (
                <Tag color={status === 'Open' ? 'green' : 'red'}>{status}</Tag>
            ),
        },
        {
            title: 'Date Posted',
            dataIndex: 'datePosted',
            key: 'datePosted',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: Job) => (
                <Space size="middle">
                    <Button type="primary" icon={<EyeOutlined />} onClick={() => viewJob(record.key)}>
                        View
                    </Button>
                    <Button icon={<EditOutlined />} onClick={() => editJob(record.key)}>
                        Edit
                    </Button>
                    <Button danger icon={<StopOutlined />} onClick={() => deleteJob(record.key)}>
                       Close
                    </Button>
                </Space>
            ),
        },
    ];

    //  functions for actions
    const viewJob = (key: string) => {
        console.log('View job:', key);
    };

    const editJob = (key: string) => {
        console.log('Edit job:', key);
    };

    const deleteJob = (key: string) => {
        setJobs(jobs.filter((job) => job.key !== key));
    };

    return (
        <div className={"items-center"}>
            <h1 className={"items-center pb-4 text-md md:text-lg font-semibold"}>Posted Jobs</h1>
            <Table
                columns={columns}
                dataSource={jobs}
                pagination={{ pageSize: 6 }}
                scroll={{x: true}}
            />
        </div>
    );
};

export default PostedJobs;

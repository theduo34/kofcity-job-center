import React, { useState } from 'react';
import { Table, Button, Tag, Space } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

interface Job {
    key: string;
    title: string;
    status: 'Open' | 'Closed';
    datePosted: string;
}

const ClosedJobs: React.FC = () => {
    //  data for closed jobs
    const [jobs, setJobs] = useState<Job[]>([
        { key: '1', title: 'Marketing Manager', status: 'Closed', datePosted: '2024-08-15' },
        { key: '2', title: 'Product Manager', status: 'Closed', datePosted: '2024-09-10' },
        { key: '3', title: 'Back-end Developer', status: 'Closed', datePosted: '2024-08-30' },
        { key: '4', title: 'HR Specialist', status: 'Closed', datePosted: '2024-08-20' },
    ]);

    //  columns for displaying job info
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
                <Tag color={status === 'Closed' ? 'red' : 'green'}>{status}</Tag>
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
            //eslint-disable-next-line
            render: (_: any, record: Job) => (
                <Space size="middle">
                    <Button type="default" icon={<CheckCircleOutlined />} onClick={() => reopenJob(record.key)}>
                        Reopen
                    </Button>
                    <Button danger icon={<ExclamationCircleOutlined />} onClick={() => deleteJob(record.key)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    // functions for actions
    const reopenJob = (key: string) => {
        console.log('Reopen job:', key);
    };

    const deleteJob = (key: string) => {
        setJobs(jobs.filter((job) => job.key !== key));
    };

    return (
        <div className={"items-center"}>
            <h1 className={"items-center pb-4 text-md md:text-lg font-semibold"}>Closed Jobs</h1>
            <Table
                columns={columns}
                dataSource={jobs}
                pagination={{pageSize: 6}}
                rowClassName="ant-table-row-hover"
                scroll={{x: true}}
            />
        </div>
    );
};

export default ClosedJobs;

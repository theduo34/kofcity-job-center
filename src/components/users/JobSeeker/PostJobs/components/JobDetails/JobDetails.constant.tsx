import React from "react";


interface JobDetailsProps {
    key?: string,
    label?: string,
    inputType?: React.ReactNode,
    btnTitle?: string,
    description?: string,
}

export const getJobDetails = (): JobDetailsProps[] => [
    {
        key: "job_title",
        label: "Job Title",
    },
    {
        key: "job_description",
        label: "Job Description",
    },
    {
        key: "job_location",
        label: "Job Location",

    },
    {
        key: "job_type",
        label: "Job Type",
    },
    {
        key: "salary",
        label: "Salary",
    },
    {
        key: "educational_qualification",
        label: "Educational Qualification",
    },
    {
        key: "skills",
        label: "Skills",
    },
    {
        key: "experience_level",
        label: "Experience Level",
    },
    {
        key: "benefits",
        label: "Benefits",
    },

]


import {JobCategoriesInterface, JobTypesInterface} from "../../Home.interface.ts";



const JOB_TYPES = {
    FULL_TIME_JOBS: "Full-time Jobs",
    PART_TIME_JOBS: "Part-time Jobs",
    REMOTE_JOBS: "Remote jobs",
}

export const getJobTypes = (navigate: (path: string) => void): JobTypesInterface[] => [
    {
        key: JOB_TYPES.FULL_TIME_JOBS,
        label: JOB_TYPES.FULL_TIME_JOBS,
        onClick: () => navigate("/"),

    },
    {
        key: JOB_TYPES.PART_TIME_JOBS,
        label: JOB_TYPES.PART_TIME_JOBS,
        onClick: () => navigate("/"),
    },
    {
        key: JOB_TYPES.REMOTE_JOBS,
        label: JOB_TYPES.REMOTE_JOBS,
        onClick: () => navigate("/"),
    }
]



//Job Categories
const JOB_CATEGORIES = {
    JOBS_BY_PROFESSION: "Jobs by Profession",
    JOBS_BY_INDUSTRY: "Jobs by Industry",
    JOBS_BY_CITY: "Jobs by City",
    SEARCH: "Search"
}
export const professionOption = [
    { value: 'software-engineer', label: 'Software Engineer' },
    { value: 'data-scientist', label: 'Data Scientist' },
    { value: 'project-manager', label: 'Project Manager' },
    { value: 'graphic-designer', label: 'Graphic Designer' },
    { value: 'accountant', label: 'Accountant' },
    { value: 'sales-representative', label: 'Sales Representative' },
    { value: 'hr-manager', label: 'Human Resources Manager' },
    { value: 'nurse', label: 'Nurse' },
    { value: 'marketing-specialist', label: 'Marketing Specialist' },
    { value: 'teacher', label: 'Teacher' },
]

export const industryOption = [
    { value: 'information-technology', label: 'Information Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail' },
    { value: 'construction', label: 'Construction' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'transportation', label: 'Transportation' },

]

export const getJobCategories = (navigate: (path: string) => void): JobCategoriesInterface[] => [
    {
        key: JOB_CATEGORIES.JOBS_BY_INDUSTRY,
        label: JOB_CATEGORIES.JOBS_BY_INDUSTRY,
        onClick: () => navigate("/"),
        options: industryOption
    },
    {
        key: JOB_CATEGORIES.JOBS_BY_PROFESSION,
        label: JOB_CATEGORIES.JOBS_BY_PROFESSION,
        onClick: () => navigate("/"),
        options: professionOption
    },

    {
        key: JOB_CATEGORIES.JOBS_BY_CITY,
        label: JOB_CATEGORIES.JOBS_BY_CITY,
        onClick: () => navigate("/"),
        options: [
            { value: 'accra', label: 'Accra' },
            { value: 'kumasi', label: 'Kumasi' },
            { value: 'tamale', label: 'Tamale' },
            { value: 'takoradi', label: 'Takoradi' },
            { value: 'tema', label: 'Tema' },
            { value: 'cape-coast', label: 'Cape Coast' },
            { value: 'koforidua', label: 'Koforidua' },
            { value: 'ho', label: 'Ho' },
            { value: 'sunnyani', label: 'Sunyani' },
            { value: 'bolgatanga', label: 'Bolgatanga' },
        ]
    }

]
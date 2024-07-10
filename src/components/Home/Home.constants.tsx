import {JobCategoriesInterface, JobTypesInterface, TopContentInterface} from "./Home.interface.ts";
import topSection from "/public/assets/images/bgImages/topSection.jpg"

//top content constants
const TOP_CONTENT_MENU_ITEMS = {
    JOBS : "Find Jobs",
    INDUSTRY_TRENDS: "Industry trends",
    POST_JOBS : "Post Jobs",
}
export const getTopContent = (navigate: (path: string) => void): TopContentInterface[] => [
    {
        key: TOP_CONTENT_MENU_ITEMS.JOBS,
        label: TOP_CONTENT_MENU_ITEMS.INDUSTRY_TRENDS,
        users: "100+",
        description: "Open vacancies",
        image: topSection,
        onClick: () => navigate("/")
    },
    {
        key: TOP_CONTENT_MENU_ITEMS.INDUSTRY_TRENDS,
        label: TOP_CONTENT_MENU_ITEMS.INDUSTRY_TRENDS,
        users: "200+",
        description: "Blog market trends",
        image: topSection,
        onClick: () => navigate("/")
    },
    {
        key: TOP_CONTENT_MENU_ITEMS.POST_JOBS,
        label: TOP_CONTENT_MENU_ITEMS.POST_JOBS,
        users: "350+",
        description: "Recruit employees",
        image: topSection,
        onClick: () => navigate("/")
    },
]

//type of jobs
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
export const getJobCategories = (navigate: (path: string) => void): JobCategoriesInterface[] => [
    {
        key: JOB_CATEGORIES.JOBS_BY_PROFESSION,
        label: JOB_CATEGORIES.JOBS_BY_PROFESSION,
        onClick: () => navigate("/"),
        className: "",
    },
    {
        key: JOB_CATEGORIES.JOBS_BY_INDUSTRY,
        label: JOB_CATEGORIES.JOBS_BY_INDUSTRY,
        onClick: () => navigate("/"),
        className: "",
    },
    {
        key: JOB_CATEGORIES.JOBS_BY_CITY,
        label: JOB_CATEGORIES.JOBS_BY_CITY,
        onClick: () => navigate("/"),
        className: "",
    }

]


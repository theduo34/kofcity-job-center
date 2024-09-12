
export interface FeaturedJobsListProps {
    key?: string,
    categorized?: string,
    jobTitle?: string,
    description?: string,
    jobType?: string
    education?: string,
    location?: string,
    onClick?: () => void,

}
export const getFeaturedJobsList = (): FeaturedJobsListProps[] => [
    {
        key: "admin-work_dataAnalytics",
        categorized: "admin-work",
        jobTitle: "Data Analytics",
        description: "Data analytics Data analytics Data analytics",
        jobType: "Remote",
        education: "Degree in Comp Sci and related fields",
        location: "Koforidua central market",
        onClick: () => "",
    }
]
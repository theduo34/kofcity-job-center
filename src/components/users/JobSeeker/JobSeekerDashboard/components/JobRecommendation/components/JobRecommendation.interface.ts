export interface JobsRecommendationProps  {
    jobTitle?: string,
    companyName?: string,
    jobDescription?: string,
    jobType?: string,
    jobLocation?: string,
    jobSkills?: string,
    education?: string,
    jobSalary?: string,
    jobOverview?: string,
    jobResponsibility?: string,
    onClick?: () => void,
    key?: string
    responsibility?: string,

}

export interface onSearchInputSelectProps {
    name?: string,
    key?: string,
    options?: { value: string, label: string }[],
    onSearchChange?: (value: string) => void,
}
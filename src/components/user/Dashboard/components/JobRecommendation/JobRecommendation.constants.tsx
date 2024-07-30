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

}
export const getJobsRecommendation = ():JobsRecommendationProps[] => [
    {
        key: "admin-work_dataAnalytics",
        jobTitle: "Data Analytics",
        companyName: "Nayasty Technology Consult",
        jobType: "Remote",
        jobSkills: "Python, Power BI, SQL, R, Tableau, SAS, SPSS, Machine learning, Data mining",
        jobLocation: "koforidua, Two Streams",
        education: "A bachelor's degree in a field such as statistics, mathematics, computer science, or business, is required",

    },
    {
        key: "admin-work_pharmacist",
        jobTitle: "Pharmacist",
        companyName: "Bedicta Pharmaceutical shop",
        jobType: "On-site",
        jobLocation: "Koforidua, Adweso",
        jobSkills: "Clinical knowledge, attention to detail, communication skills, customer service, management skills",
        education: "Bachelor's Degree in Pharmacy (B.Pharm)Typically a 4-year program that covers fundamental pharmacy concepts, including pharmacology, chemistry, and medical ethics",
    },
    {
        key: "hospi-work_cateringService",
        jobTitle: "Catering Service",
        companyName: "Doreen & Joseph Catering Service",
        jobType: "On-site",
        jobLocation: "Koforidua,Effiduase",
        jobSkills: "Culinary Skills, Food Safety and Sanitation, Customer Service, Time Management, Teamwork, Creativity",
        education: "BCertifications, High School Diploma or Equivalent, Vocational Training: Basic education is essential, and courses in home economics or consumer science",

    },
]
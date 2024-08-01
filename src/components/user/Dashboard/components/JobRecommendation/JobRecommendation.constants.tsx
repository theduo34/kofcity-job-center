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
export const getJobsRecommendation = ():JobsRecommendationProps[] => [
    {
        key: "admin-work_dataAnalytics",
        jobTitle: "Entry Level Data Analytics",
        companyName: "Nayasty Technology Consult",
        jobType: "Remote",
        jobSkills: "Python, Power BI, SQL, R, Tableau, SAS, SPSS, Machine learning, Data mining",
        jobLocation: "koforidua, Two Streams",
        responsibility: "Responsibilities of Entry-Level Junior Data Analyst\n" +
            "\n" +
            "An entry-level junior data analyst collects, cleans, and analyzes data, creates reports, maintains databases, and collaborates with senior analysts. They use Excel, SQL, Python, or R and document methods."
    },
    {
        key: "admin-work_pharmacist",
        jobTitle: "Senior Md.Pharmacist",
        companyName: "Bedicta Pharmaceutical shop",
        jobType: "On-site",
        jobLocation: "Koforidua, Adweso",
        jobSkills: "Clinical knowledge, attention to detail, communication skills, customer service, management skills",
        education: "Bachelor's Degree in Pharmacy (B.Pharm)Typically a 4-year program that covers fundamental pharmacy concepts, including pharmacology, chemistry, and medical ethics",
        responsibility: "Responsibilities of Senior MD Pharmacist\n" +
            "\n" +
            "A senior MD pharmacist oversees medication management, ensures compliance with regulations, mentors junior pharmacists, collaborates with healthcare teams, conducts research, and educates patients on proper medication use."
    },
    {
        key: "hospi-work_cateringService",
        jobTitle: "Baking Catering Service",
        companyName: "Doreen & Joseph Catering Service",
        jobType: "On-site",
        jobLocation: "Koforidua,Effiduase",
        jobSkills: "Culinary Skills, Food Safety and Sanitation, Customer Service, Time Management, Teamwork, Creativity",
        education: "BCertifications, High School Diploma or Equivalent, Vocational Training: Basic education is essential, and courses in home economics or consumer science",
        responsibility: "Responsible for preparing and baking high-quality pastries, cakes, and desserts for events, managing orders, and delivering exceptional customer service to ensure timely and satisfactory catering experiences"
    },
]
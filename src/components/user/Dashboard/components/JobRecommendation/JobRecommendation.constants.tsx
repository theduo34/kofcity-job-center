import {JobsRecommendationProps, onSearchInputSelectProps} from "./components/JobRecommendation.interface.ts";


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
        responsibility: "\n" +
            "\n" +
            "A senior MD pharmacist oversees medication management, ensures compliance with regulations, collaborates with healthcare teams, and educates patients on proper medication use."
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


export const getSearchInputSelects = (): onSearchInputSelectProps[] => [
    {
        name: "Industry",
        key: "industry",
        onSearchChange: () => {},
        options: [
            { value: "businessAndFinance", label: "Business and Finance" },
            { value: "creativeAndDesign", label: "Creative and Design" },
            { value: "educationAndTraining", label: "Education and Training" },
            { value: "healthcareAndMedical", label: "Healthcare And Medical" },
            { value: "iTAndTechnology", label: "IT & Technology" },
            { value: "manufacturingAndProduction", label: "Manufacturing and Production" },
            { value: "publicSectionAndNonProfit", label: "Public Section and NonProfit" },
            { value: "salesAndMarketing", label: "Sales And Marketing"},
            { value: "scienceAndEngineering", label: "Science and Engineering" },
        ],
    },
    {
        name: "Job Type",
        key: "jobType",
        onSearchChange: () => {},
        options: [
            {value: "fullTime", label: "Full time"},
            {value: "partTime", label: "Part time"},
            { value: "contract", label: "Contract" },
            {value: "remote", label: "Remote"},
            {value: "internship", label: "Internship"},
            { value: "onSite", label: "On-site" },
        ],
    },
    {
        name: "Location",
        key: "location",
        onSearchChange: () => {},
        options: [
            { value: "location1", label: "Location one" },
            { value: "location2", label: "Location two" },
            { value: "location3", label: "Location three" }
        ],
    },
    {
        name: "Role Level",
        key: "role",
        onSearchChange: () => {},
        options: [
            { value: "entryLevel", label: "Entry level" },
            { value: "midLevel", label: "Mid level" },
            { value: "seniorLevel", label: "Senior level" },
            { value: "executiveLevel", label: "Executive level" },
            { value: "managerial", label: "Managerial" },
            { value: "otherRoles", label: "Other roles" }
        ],
    },
];
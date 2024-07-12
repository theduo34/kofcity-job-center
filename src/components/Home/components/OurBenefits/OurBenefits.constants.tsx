
interface OurBenefitsInterface{
    label?: string,
    description?: string,
    image?: string

}

export const getOurBenefits = ():OurBenefitsInterface[] => [
    {
        label: "Effortless Search",
        description: "Browse through  thousands of job listings effortlessly",
        image: ""
    },
    {
        label: "Personalized Alerts",
        description: "Stay updated with job alerts customized to your preferences.",
        image: ""
    },
    {
        label: "Simple Interface",
        description: "Navigate seamlessly with clean and intuitive design",
        image: ""
    },
    {
        label: "Quick Apply",
        description: "Apply to jobs with just few taps",
        image: ""
    },
    {
        label: "Save favorites",
        description: "Keep track of your favorite listings for easy access",
        image: ""
    }
]

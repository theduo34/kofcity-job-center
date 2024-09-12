export interface SuccessStoriesProps {
    quote: string;
    author: string;
    jobTitle: string;
    key?: string
}

export const getSuccessStories = (): SuccessStoriesProps[] => [
    {
        key: "softwareEngineer",
        quote: "Hey there. I'm doing great in coding. How about you? Thanks to Kofcity Job Center for the support!",
        author: "aquasiNinetyNine",
        jobTitle: "Software Engineer",
    },
    {
        key: "productMangager",
        quote: "This platform has helped me achieve my dreams. Kofcity Job Center is amazing!",
        author: "johnDoe",
        jobTitle: "Product Manager",
    },
    {
        key: "uxDesigner",
        quote: "An incredible journey with amazing opportunities. Kofcity Job Center made it possible.",
        author: "janeDoe",
        jobTitle: "UX Designer",
    },
    {
        key: "backendDeveloper",
        quote: "I couldn't have done it without this amazing community. Kofcity Job Center is the best!",
        author: "mikeSmith",
        jobTitle: "Backend Developer",
    },
    {
        key: "frontendDeveloper",
        quote: "The support here is unmatched! Thank you, Kofcity Job Center!",
        author: "saraLee",
        jobTitle: "Frontend Developer",
    },
    {
        key: "backTeller",
        quote: "Finding a job in the banking sector was made so easy by Kofcity Job Center.",
        author: "maryJohnson",
        jobTitle: "Bank Teller",
    },
    {
        key: "hostelManager",
        quote: "Thanks to Kofcity Job Center, I found my dream job in hospitality.",
        author: "jamesBrown",
        jobTitle: "Hotel Manager",
    },
    {
        key: "mechanicalEngineer",
        quote: "Transitioning to a new career in engineering was seamless with Kofcity Job Center.",
        author: "robertWilliams",
        jobTitle: "Mechanical Engineer",
    },
    {
        key: "storeKeeper",
        quote: "I never thought I'd find a job I love as a storekeeper, but Kofcity Job Center made it happen.",
        author: "lindaDavis",
        jobTitle: "Storekeeper",
    },
    {
        key: "barber",
        quote: "Becoming a professional barber was a dream come true, thanks to Kofcity Job Center.",
        author: "michaelMiller",
        jobTitle: "Barber",
    },
    {
        key: "cateringManager",
        quote: "Working in catering has been a fantastic experience, all thanks to Kofcity Job Center.",
        author: "elizabethGarcia",
        jobTitle: "Catering Manager",
    },
];

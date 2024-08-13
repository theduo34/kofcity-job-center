import effortlessSearch from '/assets/images/home/effortlessSearch.jpg';
import personalizedAlert from '/assets/images/home/personalizedAlert.jpg';
import quickApply from '/assets/images/home/quickApply.jpg';
import saveFavorite from '/assets/images/home/saveFavorite.jpg';
import simpleInterface from '/assets/images/home/simpleInterface.jpg'
interface OurBenefitsInterface{
    label?: string,
    description?: string,
    image?: string

}

export const getOurBenefits = ():OurBenefitsInterface[] => [
    {
        label: "Effortless Search",
        description: "Browse through  thousands of job listings effortlessly",
        image: effortlessSearch
    },
    {
        label: "Personalized Alerts",
        description: "Stay updated with job alerts customized to your preferences.",
        image: personalizedAlert
    },
    {
        label: "Simple Interface",
        description: "Navigate seamlessly with clean and intuitive design",
        image: simpleInterface
    },
    {
        label: "Quick Apply",
        description: "Apply to jobs with just few taps",
        image: quickApply
    },
    {
        label: "Save favorites",
        description: "Keep track of your favorite listings for easy access",
        image: saveFavorite
    }
]

import {TopContentInterface} from "./Home.interface.ts";
import topSection from "/public/assets/images/bgImages/topSection.jpg"

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
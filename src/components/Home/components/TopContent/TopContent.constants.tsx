import {TopContentInterface} from "../../Home.interface.ts";
import findAJob from '/assets/images/bgImages/findAJob.jpg'
import industryTrend from '/assets/images/bgImages/industryTrend.jpg'
import postJobs from '/assets/images/bgImages/postJobs.jpg'

import {
    USER_ROUTE_PATH,
    USER_ROUTE_PATH_JOB_LISTINGS, USER_ROUTE_PATH_POST_JOBS,
    USER_ROUTE_PATH_TRENDS
} from "../../../user/UserRoutes.constants.ts";

const TOP_CONTENT_MENU_ITEMS = {
    JOBS : "Find Jobs",
    INDUSTRY_TRENDS: "Industry trends",
    POST_JOBS : "Post Jobs",
}
export const getTopContent = (navigate: (path: string) => void): TopContentInterface[] => [
    {
        key: TOP_CONTENT_MENU_ITEMS.JOBS,
        label: TOP_CONTENT_MENU_ITEMS.JOBS,
        users: "100+",
        description: "Open vacancies",
        image: findAJob,
        onClick: () => navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_JOB_LISTINGS}`),
        className: "bg-kjcBtn-300"
    },
    {
        key: TOP_CONTENT_MENU_ITEMS.INDUSTRY_TRENDS,
        label: TOP_CONTENT_MENU_ITEMS.INDUSTRY_TRENDS,
        users: "200+",
        description: "Blog market trends",
        image: industryTrend,
        onClick: () => navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_TRENDS}`),
        className: "bg-kjcBtn-950"
    },
    {
        key: TOP_CONTENT_MENU_ITEMS.POST_JOBS,
        label: TOP_CONTENT_MENU_ITEMS.POST_JOBS,
        users: "350+",
        description: "Recruit employees",
        image: postJobs,
        onClick: () => navigate(`${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}`),
        className: "bg-red-900"
    },
]


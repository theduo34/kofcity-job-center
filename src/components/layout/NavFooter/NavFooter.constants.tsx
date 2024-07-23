import {
    HomeOutlined,
    SolutionOutlined,
    LineChartOutlined,
    TeamOutlined
} from '@ant-design/icons';
import {NavFooterMenuItemProps} from "./NavFooter.inteface.ts";

const NAV_FOOTER_MENU_ITEMS = {
    HOME: 'Home',
    JOBS: 'Jobs',
    TRENDS: 'Trends',
    POST_JOBS: 'Post Jobs'
}


export const getNavFooterMenuItems = ( navigate: (path: string) => void): NavFooterMenuItemProps[] => [
        {
            label: NAV_FOOTER_MENU_ITEMS.HOME,
            icon: <HomeOutlined/>,
            key: NAV_FOOTER_MENU_ITEMS.HOME,
            onClick:() => navigate('/user/dashboard')
        },
        {
            label: NAV_FOOTER_MENU_ITEMS.JOBS,
            icon: <SolutionOutlined/>,
            key: NAV_FOOTER_MENU_ITEMS.JOBS,
            onClick:() => navigate("/user/job-listings")

        },
        {
            label: NAV_FOOTER_MENU_ITEMS.TRENDS,
            icon: <LineChartOutlined/>,
            key: NAV_FOOTER_MENU_ITEMS.TRENDS,
            onClick:() => navigate('/user/industry-trends')

        },
        {
            label: NAV_FOOTER_MENU_ITEMS.POST_JOBS,
            icon: <TeamOutlined/>,
            key: NAV_FOOTER_MENU_ITEMS.POST_JOBS,
            onClick:() => navigate('/user/post-jobs')

        }

]
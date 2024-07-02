import React from "react";
import {
    HomeOutlined,
    SolutionOutlined,
    LineChartOutlined,
    TeamOutlined
} from '@ant-design/icons';

export interface NavFooterMenuItemProps {
    label: string,
    icon: React.ReactNode,
    key: string
}

const NAV_FOOTER_MENU_ITEMS = {
    HOME: 'Home',
    JOBS: 'Jobs',
    TRENDS: 'Trends',
    POST_JOBS: 'Post Jobs'
}

export const NavFooterMenuItems: NavFooterMenuItemProps[] = [
    {
        label: NAV_FOOTER_MENU_ITEMS.HOME,
        icon: <HomeOutlined/>,
        key: NAV_FOOTER_MENU_ITEMS.HOME
    },
    {
        label: NAV_FOOTER_MENU_ITEMS.JOBS,
        icon: <SolutionOutlined/>,
        key: NAV_FOOTER_MENU_ITEMS.JOBS
    },
    {
        label: NAV_FOOTER_MENU_ITEMS.TRENDS,
        icon: <LineChartOutlined/>,
        key: NAV_FOOTER_MENU_ITEMS.TRENDS
    },
    {
        label: NAV_FOOTER_MENU_ITEMS.POST_JOBS,
        icon: <TeamOutlined/>,
        key: NAV_FOOTER_MENU_ITEMS.POST_JOBS
    }

]
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import {
    USER_ROUTE_PATH_JOB_LISTINGS, USER_ROUTE_PATH_POST_JOBS,
    USER_ROUTE_PATH_TRENDS
} from "./UserRoutes.constants.ts";
import JobListings from "./JobListings";
import IndustryTrends from "./IndustryTrends";
import PostJobs from "./PostJobs";
import { DASHBOARD_ROUTES_PATH } from "./Dashboard/DashboardRoutes.constants.ts";
import DashboardRoutes from "./Dashboard/DashboardRoutes.tsx";

const UserRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route path={`${DASHBOARD_ROUTES_PATH}/*`} element={<DashboardRoutes />} />
                    <Route path={USER_ROUTE_PATH_JOB_LISTINGS} element={<JobListings />} />
                    <Route path={USER_ROUTE_PATH_TRENDS} element={<IndustryTrends />} />
                    <Route path={USER_ROUTE_PATH_POST_JOBS} element={<PostJobs />} />
                </Route>
            </Routes>
        </>
    );
};

export default UserRoutes;

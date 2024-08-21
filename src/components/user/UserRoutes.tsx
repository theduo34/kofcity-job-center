import { Outlet, Route, Routes } from "react-router-dom";
import {
    USER_ROUTE_PATH_JOB_LISTINGS, USER_ROUTE_PATH_POST_JOBS,
    USER_ROUTE_PATH_TRENDS
} from "./UserRoutes.constants.ts";
import IndustryTrends from "./IndustryTrends";
import { DASHBOARD_ROUTES_PATH } from "./Dashboard/DashboardRoutes.constants.ts";
import DashboardRoutes from "./Dashboard/DashboardRoutes.tsx";
import JobListingsRoutes from "./JobListings/JobListingsRoutes.tsx";
import PostJobsRoutes from "./PostJobs/PostJobsRoutes.tsx";

const UserRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route path={`${DASHBOARD_ROUTES_PATH}/*`} element={<DashboardRoutes />} />
                    <Route path={`${USER_ROUTE_PATH_JOB_LISTINGS}/*`} element={<JobListingsRoutes />} />
                    <Route path={USER_ROUTE_PATH_TRENDS} element={<IndustryTrends />} />
                    <Route path={`${USER_ROUTE_PATH_POST_JOBS}/*`} element={<PostJobsRoutes/>} />
                </Route>
            </Routes>
        </>
    );
};

export default UserRoutes;

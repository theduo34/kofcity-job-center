import { Outlet, Route, Routes } from "react-router-dom";
import {
    USER_PROFILE_PATH,
    USER_ROUTE_PATH_JOB_LISTINGS, USER_ROUTE_PATH_POST_JOBS,
    USER_ROUTE_PATH_TRENDS
} from "./UserRoutes.constants.ts";
import IndustryTrends from "./IndustryTrends";
import JobListingsRoutes from "./JobListings/JobListingsRoutes.tsx";
import PostJobsRoutes from "./PostJobs/PostJobsRoutes.tsx";
import UserProfile from "./UserProfile";
import {DASHBOARD_ROUTES_PATH} from "./JobSeekerDashboard/DashboardRoutes.constants.ts";
import DashboardRoutes from "./JobSeekerDashboard/DashboardRoutes.tsx";
import ProtectedRoute from "./UserProfile/guards/ProtectedRoute.tsx";

const UserRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route path={`${DASHBOARD_ROUTES_PATH}/*`} element={<DashboardRoutes />} />
                    <Route path={`${USER_ROUTE_PATH_JOB_LISTINGS}/*`} element={<JobListingsRoutes />} />
                    <Route path={USER_ROUTE_PATH_TRENDS} element={<IndustryTrends />} />
                    <Route path={`${USER_ROUTE_PATH_POST_JOBS}/*`} element={<PostJobsRoutes/>} />
                    <Route path={`${USER_PROFILE_PATH}/*`} element={
                        <ProtectedRoute>
                            <UserProfile/>
                        </ProtectedRoute>
                    }/>
                </Route>
            </Routes>
        </>
    );
};

export default UserRoutes;

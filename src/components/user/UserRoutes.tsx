import React from "react"
import {Outlet, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import {
    USER_ROUTE_PATH_DASHBOARD,
    USER_ROUTE_PATH_JOB_LISTINGS, USER_ROUTE_PATH_POST_JOBS,
    USER_ROUTE_PATH_TRENDS
} from "./UserRoutes.constants.ts";
import JobListings from "./JobListings";
import IndustryTrends from "./IndustryTrends";
import PostJobs from "./PostJobs";

const UserRoutes = () => {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route path={USER_ROUTE_PATH_DASHBOARD}  element={<Dashboard/>}/>
                    <Route path={USER_ROUTE_PATH_JOB_LISTINGS} element={<JobListings/>} />
                    <Route path={USER_ROUTE_PATH_TRENDS} element={<IndustryTrends/>} />
                    <Route path={USER_ROUTE_PATH_POST_JOBS} element={<PostJobs/>} />
                </Route>
            </Routes>

        </React.Fragment>
    )
}
export default UserRoutes;

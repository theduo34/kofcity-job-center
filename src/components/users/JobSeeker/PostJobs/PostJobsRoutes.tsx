import {Outlet, Route, Routes} from "react-router-dom";
import PostJobs from "./PostJobs.tsx";
import {
    EXISTING_USERS_ROUTE_PATH,
    JOB_DETAILS_ROUTE_PATH, REVIEW_PAGE_ROUTE_PATH,
    SET_UP_ACCOUNT_ROUTE_PATH
} from "./PostJobsRoutes.constants.ts";
import SetAnAccount from "./components/SetAnAccount";
import JobDetails from "./components/JobDetails/JobDetails.tsx";
import ReviewPage from "./components/ReviewPage";
import ExistingUser from "./components/ExistingUser";

const PostJobsRoutes = () => {

    return(
        <Routes>
            <Route path={"/"} element={<Outlet/>}>
                <Route path={"/"} element={<PostJobs/>}/>
                <Route path={SET_UP_ACCOUNT_ROUTE_PATH} element={<SetAnAccount/>}/>
                <Route path={JOB_DETAILS_ROUTE_PATH} element={<JobDetails/>}/>
                <Route path={REVIEW_PAGE_ROUTE_PATH} element={<ReviewPage/>}/>
                <Route path={EXISTING_USERS_ROUTE_PATH} element={<ExistingUser/>}/>
            </Route>
        </Routes>
    )
}
export default PostJobsRoutes
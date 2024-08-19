import {Outlet, Route, Routes} from "react-router-dom";
import PostJobs from "./PostJobs.tsx";
import {SET_UP_ACCOUNT_ROUTE_PATH} from "./PostJobsRoutes.constants.ts";
import SetAnAccount from "./components/SetAnAccount";

const PostJobsRoutes = () => {
    return(
        <Routes>
            <Route path={"/"} element={<Outlet/>}>
                <Route path={"/"} element={<PostJobs/>}/>
                <Route path={SET_UP_ACCOUNT_ROUTE_PATH} element={<SetAnAccount/>}/>
            </Route>
        </Routes>
    )
}
export default PostJobsRoutes
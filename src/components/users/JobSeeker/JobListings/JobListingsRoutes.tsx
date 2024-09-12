import {Outlet, Route, Routes} from "react-router-dom";
import JobListings from "./JobListings.tsx";

const JobListingsRoutes = () => {
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Outlet/>}>
                    <Route path={"/"} element={<JobListings />}/>
                    {/*<Route path={`${DESCRIPTION_ROUTE_PATH}/:jobKey`} element={<JobDescription/>}/>*/}
                </Route>
            </Routes>
        </>
    )
}
export default JobListingsRoutes;
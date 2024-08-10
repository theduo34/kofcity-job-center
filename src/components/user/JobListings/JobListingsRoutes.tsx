import {Outlet, Route, Routes} from "react-router-dom";
import JobListings from "./JobListings.tsx";
import React from "react";
import {DESCRIPTION_ROUTE_PATH} from "./JobListingsRoutes.constants.ts";
import JobDescription from "./components/FilterSearch/builders/JobDescription.tsx";

const JobListingsRoutes = () => {
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Outlet/>}>
                    <Route path={"/"} element={<JobListings />}>
                        <Route path={DESCRIPTION_ROUTE_PATH} element={<JobDescription/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}
export default JobListingsRoutes;
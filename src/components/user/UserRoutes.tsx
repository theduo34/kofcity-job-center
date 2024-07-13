import React from "react"
import {Outlet, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import {USER_ROUTE_PATH_DASHBOARD} from "./UserRoutes.constants.ts";

const UserRoutes = () => {
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route path={USER_ROUTE_PATH_DASHBOARD}  element={<Dashboard/>}/>
                </Route>
            </Routes>

        </React.Fragment>
    )
}
export default UserRoutes;

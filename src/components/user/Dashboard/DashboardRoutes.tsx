import {Outlet, Route, Routes} from "react-router-dom";
import { DASHBOARD_COMPANY_SPOTLIGHT_ROUTES_PATH } from "./DashboardRoutes.constants.ts";
import Dashboard from "./Dashboard.tsx";
import CompanyDetailedPage from "./components/CompanySpotlight/components/CompanyDetailedPage/CompanyDetailedPage.tsx";

const DashboardRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route path={"/"} element={<Dashboard/>}/>
                        <Route path={DASHBOARD_COMPANY_SPOTLIGHT_ROUTES_PATH} element={<CompanyDetailedPage />} />
                    </Route>
            </Routes>
        </>
    );
};

export default DashboardRoutes;

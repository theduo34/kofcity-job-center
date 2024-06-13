/*
This component handles the routing for layout-related components. It sets up the routes for
layout features such as the header, footer, and sidebar. The component ensures that these
elements are correctly displayed and integrated into the overall page structure, enhancing
the visual appeal and usability of the site.
 */
import {Outlet, Route, Routes} from "react-router-dom";
import {LANDING_PAGE_PATH} from "./LayoutRoutes.constants.ts";
import LandingPage from "./LandingPage/LandingPage.tsx";

const LayoutRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <Outlet/> }>
                <Route path={LANDING_PAGE_PATH} element={<LandingPage />}/>
            </Route>
        </Routes>

    )
}
export default LayoutRoutes;
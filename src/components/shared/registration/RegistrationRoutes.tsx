import { Routes, Route, Outlet } from 'react-router-dom';
import UserRegistration from "./UserRegistration/UserRegistration.tsx";
import {REGISTRATION_ROUTE_PATH} from "./RegistrationRoutes.constants.ts";

const RegistrationRoutes = () => {
    return(
        <Routes>
           <Route path="/" element={<Outlet />}>
               <Route path={REGISTRATION_ROUTE_PATH} element={<UserRegistration/>}/>
            </Route>
        </Routes>
    )
}
export default RegistrationRoutes;
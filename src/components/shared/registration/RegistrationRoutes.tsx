import { Routes, Route, Outlet } from 'react-router-dom';
import {USER_REGISTRATION_PATH} from "./RegistrationRoutes.constants.ts";
import UserRegistration from "./UserRegistration/UserRegistration.tsx";

const RegistrationRoutes = () => {
    return(
        <Routes>
           <Route path="/" element={<Outlet />}>
               <Route path={USER_REGISTRATION_PATH} element={<UserRegistration/>}/>
            </Route>
        </Routes>
    )
}
export default RegistrationRoutes;
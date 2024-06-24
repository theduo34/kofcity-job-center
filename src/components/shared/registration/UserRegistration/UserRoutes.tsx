/*
 This component handles the routing for user-related pages. It sets up the routes for
user activities such as sign-up, account settings, and user profile management. The component
ensures a smooth navigation experience within the user-related sections of the application,
providing seamless transitions between different user management states.
 */
import { Routes, Route, Outlet } from 'react-router-dom';
import SignUp from './SignUp/SignUp.tsx';
import {SIGNUP_PATH} from "./UserRoutes.constants.ts";

const UserRoutes = () => {
    return(
        <Routes>
           <Route path="" element={<Outlet />}>
              <Route path={SIGNUP_PATH} element={<SignUp />}/>
            </Route> 
        </Routes>
    )
}
export default UserRoutes;
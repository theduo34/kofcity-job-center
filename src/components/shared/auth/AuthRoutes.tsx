import {Routes, Route, Outlet} from 'react-router-dom';
import {
    FORGOT_PASSWORD_PATH,
    LOGIN_PATH,
    RESET_PASSWORD_PATH
} from "./AuthRoutes.constants.ts";
import Login from "./Login/Login.tsx";
import ResetPassword from "./ResetPassword/ResetPassword.tsx";
import ForgotPassword from "./ForgotPassword/ForgotPassword.tsx";

/*
This component handles the routing for authentication-related pages. It sets up the routes
for login, sign-up, and password reset, directing users to the appropriate pages based on
the URL path. The component ensures a smooth navigation experience within the authentication
flow, providing a seamless transition between different authentication states.
 */

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Outlet/>}>
                <Route path={LOGIN_PATH} element={<Login />}/>
                <Route path={RESET_PASSWORD_PATH} element={<ResetPassword />}/>
                <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword/>} />
            </Route>
        </Routes>

    )
}
export default AuthRoutes;
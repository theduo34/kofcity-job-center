import {Routes, Route, Outlet} from 'react-router-dom';
import {
    FORGOT_PASSWORD_PATH,
    LOGIN_PATH,
} from "./AuthRoutes.constants.ts";
import Login from "./Login/Login.tsx";
import ForgotPassword from "./ForgotPassword/ForgotPassword.tsx";

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Outlet/>}>
                <Route path={LOGIN_PATH} element={<Login />}/>
                <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword/>} />
            </Route>
        </Routes>

    )
}
export default AuthRoutes;
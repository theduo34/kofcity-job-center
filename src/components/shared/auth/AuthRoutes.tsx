import {Routes, Route, Outlet} from 'react-router-dom';
import {LOGIN_PATH, RESET_PASSWORD_PATH} from "./AuthRoutes.constants.ts";
import Login from "./Login/Login.tsx";
import ResetPassword from "./ResetPassword";

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Outlet/>}>
                <Route path={LOGIN_PATH} element={<Login />}/>
                <Route path={RESET_PASSWORD_PATH} element={<ResetPassword/>}/>
            </Route>
        </Routes>

    )
}
export default AuthRoutes;
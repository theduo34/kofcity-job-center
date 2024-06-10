import {Routes, Route, Outlet} from 'react-router-dom';
import { LOGIN_PATH } from "./AuthRoutes.constants";
import Login from "../../shared/auth/Login/Login";

const AuthRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Outlet/>}>
                <Route path={LOGIN_PATH} element={<Login />}/>
            </Route>
        </Routes>

    )
}
export default AuthRoutes;
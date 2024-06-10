import { Routes, Route, Outlet } from 'react-router-dom';
import SignUp from '../../shared/user/SignUp';

const UserRoutes = () => {
    return(
        <Routes>
           <Route path="" element={<Outlet />}>
              <Route path={} element={<SignUp />}/>
            </Route> 
        </Routes>
    )
}
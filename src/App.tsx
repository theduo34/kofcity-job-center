import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from './components/shared/auth/AuthRoutes.tsx'
import { AUTH_ROUTE_PATH } from './components/shared/auth/AuthRoutes.constants.ts'
import { USER_ROUTE_PATH} from './components/shared/user/UserRoutes.constants.ts'
import  UserRoutes from './components/shared/user/SignUp/SignUp.tsx'
import LandingPage from "./components/layout/LandingPage/LandingPage.tsx";
import {LANDING_PAGE_PATH} from "./components/layout/LayoutRoutes.constants.ts";



function App() {
  
  return (
    <>
     <Routes>
         <Route path={LANDING_PAGE_PATH} element={<LandingPage/>}/>
        <Route path={`${AUTH_ROUTE_PATH}/*`} element={<AuthRoutes />}/>
        <Route path={`${USER_ROUTE_PATH}/*`} element={<UserRoutes /> }/>
     </Routes>
    </>
  )
}

export default App

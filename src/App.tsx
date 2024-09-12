import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from './components/shared/auth/AuthRoutes.tsx'
import { AUTH_ROUTE_PATH } from './components/shared/auth/AuthRoutes.constants.ts'
import RegistrationRoutes from './components/shared/registration/RegistrationRoutes.tsx'
import Home from "./components/Home";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
} from "./components/shared/registration/RegistrationRoutes.constants.ts";
import {USER_ROUTE_PATH} from "./components/users/JobSeeker/UserRoutes.constants.ts";
import UserRoutes from "./components/users/JobSeeker/UserRoutes.tsx";

function App() {
  
  return (
    <>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path={`${AUTH_ROUTE_PATH}/*`} element={<AuthRoutes />}/>
         <Route path={`${ACCOUNT_REGISTRATION_ROUTE_PATH}/*`} element={<RegistrationRoutes />}/>
         <Route path={`${USER_ROUTE_PATH}/*`} element={<UserRoutes/>}/>
     </Routes>
    </>
  )
}

export default App

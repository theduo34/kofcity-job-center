import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from './components/shared/auth/AuthRoutes.tsx'
import { AUTH_ROUTE_PATH } from './components/shared/auth/AuthRoutes.constants.ts'
import {USER_REGISTRATION_ROUTE_PATH} from "./components/shared/registration/RegistrationRoutes.constants.ts";
import RegistrationRoutes from './components/shared/registration/RegistrationRoutes.tsx'



function App() {
  
  return (
    <>
     <Routes>
        <Route path={`${AUTH_ROUTE_PATH}/*`} element={<AuthRoutes />}/>
         <Route path={`${USER_REGISTRATION_ROUTE_PATH}/*`} element={<RegistrationRoutes />}/>
     </Routes>
    </>
  )
}

export default App

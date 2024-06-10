import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthRoutes from './components/routes/AuthRoutes/AuthRoutes'
import { AUTH_ROUTE_PATH } from './components/routes/AuthRoutes/AuthRoutes.constants'
import { USER_ROUTE_PATH } from './components/routes/UserRoutes/UserRoutes.constants'
import  UserRoutes from './components/shared/user/SignUp'



function App() {
  
  return (
    <>
     <Routes>
        <Route path={`${AUTH_ROUTE_PATH}/*`} element={<AuthRoutes />}/>
        <Route path={`${USER_ROUTE_PATH}/*`} element={<UserRoutes /> }/>
     </Routes>
    </>
  )
}

export default App

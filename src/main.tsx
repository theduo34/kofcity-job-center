import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
//eslint-disable-next-line
// @ts-ignore
import {AuthContextProvider} from "./components/shared/authContext/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
          <App/>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

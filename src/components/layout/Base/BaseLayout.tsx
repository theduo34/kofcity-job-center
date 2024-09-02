import KjcHeader from "../../../builders/KjcHeader";
import KjcContent from "../../../builders/KjcContent";
import KjcFooter from "../../../builders/KjcFooter";
import NavFooter from "../NavFooter";
import React, {useEffect, useState} from "react";
import { Layout } from "antd";
import NavHeader from "../NavHeader";
import MainFooter from "../MainFooter";
import {useLocation} from "react-router-dom";
import {USER_ROUTE_PATH, USER_ROUTE_PATH_POST_JOBS} from "../../user/UserRoutes.constants.ts";
import {SET_UP_ACCOUNT_ROUTE_PATH} from "../../user/PostJobs/PostJobsRoutes.constants.ts";
import {
    ACCOUNT_REGISTRATION_ROUTE_PATH,
    REGISTRATION_ROUTE_PATH
} from "../../shared/registration/RegistrationRoutes.constants.ts";
import {AUTH_ROUTE_PATH, FORGOT_PASSWORD_PATH, LOGIN_PATH} from "../../shared/auth/AuthRoutes.constants.ts";

export interface BaseLayoutProps {
    children: React.ReactNode
}


const BaseLayout: React.FC<BaseLayoutProps> = ({children}) => {
    const [showMainFooter, setShowMainFooter] = useState<boolean>(false);
    const path = useLocation();

    useEffect(() => {
        const accountRoute = `${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}${SET_UP_ACCOUNT_ROUTE_PATH}`
        const userRoute = `${USER_ROUTE_PATH}${USER_ROUTE_PATH_POST_JOBS}`

        const registrationRoute = `${ACCOUNT_REGISTRATION_ROUTE_PATH}${REGISTRATION_ROUTE_PATH}`
        const loginRoute = `${AUTH_ROUTE_PATH}${LOGIN_PATH}`
        const forgotPasswordRoute = `${AUTH_ROUTE_PATH}${FORGOT_PASSWORD_PATH}`

        if(path.pathname.startsWith(userRoute) || path.pathname === accountRoute) {
            setShowMainFooter(true);
        }
        if(path.pathname === registrationRoute || path.pathname === loginRoute) {
            setShowMainFooter(true)
        }

        if(path.pathname === forgotPasswordRoute ) {
            setShowMainFooter(true)
        }
    }, [path.pathname]);
    return (
        <Layout
            style={{ minHeight: "100vh" }}
        >
            <Layout>
                <KjcHeader
                    style={{
                        textAlign: "center",
                        height: "64px",
                        paddingInline: "48px",
                        lineHeight: "64px",
                        padding: 0
                    }}
                    className="top-0 z-50 shadow-md"
                >
                    <NavHeader/>
                </KjcHeader>

                <KjcContent className="items-center md:p-0"
                >
                    { children }
                </KjcContent>

                <KjcFooter
                    style={{ textAlign: "center" }}
                    className="hidden md:block bg-amber-50 p-0"
                >
                    { showMainFooter ? "" : <MainFooter/>}
                </KjcFooter>
                <KjcFooter
                    style={{padding: 0}}
                    className="md:hidden bg-white"
                >
                    <div>
                        { showMainFooter ? "" : <MainFooter/>}
                        <NavFooter/>
                    </div>
                </KjcFooter>
            </Layout>
        </Layout>
    )
}
export default BaseLayout;
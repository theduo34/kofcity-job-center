import {Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useAuth} from "../../../../shared/authContext/AuthContext.tsx";
import {AUTH_ROUTE_PATH, LOGIN_PATH} from "../../../../shared/auth/AuthRoutes.constants.ts";
import {message} from "antd";

const ProtectedRoute = ({ children }: {  children: React.ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const {currentUser } = useAuth();

    useEffect(() => {
        const checkUser = async () => {
            if (currentUser) {
                try {
                    const token = await currentUser.getIdToken();
                    setAuthenticated(!!token);
                } catch (error) {
                    console.error("Error fetching token", error);
                    setAuthenticated(false);
                }
            } else {
                setAuthenticated(false);
            }
        };
        checkUser();
    }, [currentUser]);

    if (!authenticated) {
        message.info('Login required !', 2);
        return <Navigate to={`${AUTH_ROUTE_PATH}${LOGIN_PATH}`}/>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from "../../../../shared/authContext/AuthContext.tsx";
import { AUTH_ROUTE_PATH, LOGIN_PATH } from "../../../../shared/auth/AuthRoutes.constants.ts";
import { message, Spin } from "antd";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();

    useEffect(() => {
        const checkUser = async () => {
            if (currentUser) {
                try {
                    const token = await currentUser.getIdToken();
                    if (token) {
                        setAuthenticated(true);
                    } else {
                        setAuthenticated(false);
                    }
                } catch (error) {
                    console.error("Error fetching token", error);
                    setAuthenticated(false);
                }
            } else {
                setAuthenticated(false);
            }
            setLoading(false);
        };

        checkUser();
    }, [currentUser]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (!authenticated) {
        message.info('Login required!', 2);
        return <Navigate to={`${AUTH_ROUTE_PATH}${LOGIN_PATH}`} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;

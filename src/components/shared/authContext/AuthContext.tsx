import React, {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import {  auth } from '../../../firebase/firebaseConfig.ts';

interface AuthContextType {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    userLoggedIn: false,
    loading: true,
});

//custom useAuth hook
export const useAuth = () => useContext(AuthContext);

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const initializeUser = (user: User | null) => {
            if (user) {
                setCurrentUser(user);
                setUserLoggedIn(true);
            } else {
                setCurrentUser(null);
                setUserLoggedIn(false);
            }
            setLoading(false);
        };

        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return () => unsubscribe();
    }, []);


    const value = { currentUser, userLoggedIn, loading };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
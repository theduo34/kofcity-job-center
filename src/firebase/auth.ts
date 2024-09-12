import { auth } from './firebaseConfig.ts';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    updatePassword,
    sendEmailVerification,
} from 'firebase/auth';

// Register account using email and password
export const doCreateUserWithEmailAndPassword = async (
    email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Log in using email and password
export const doSignInWithEmailAndPassword = (
    email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Log in using Google Gmail account
export const doSignInWithGoogle = async (): Promise<UserCredential> => {
    return await signInWithPopup(auth, new GoogleAuthProvider());
};

// User log out
export const doSignOut = (): Promise<void> => {
    return auth.signOut();
};

// Reset password
export const doPasswordReset = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
};

// Change password
export const doPasswordChange = (password: string): Promise<void> => {
    if (auth.currentUser) {
        return updatePassword(auth.currentUser, password);
    } else {
        return Promise.reject(new Error('No user is currently signed in.'));
    }
};

// Send email verification
export const doSendEmailVerification = (): Promise<void> => {
    if (auth.currentUser) {
        return sendEmailVerification(auth.currentUser, {
            url: `${window.location.origin}/email/${auth.currentUser.email}`,
        });
    } else {
        return Promise.reject(new Error('No user is currently signed in.'));
    }
};

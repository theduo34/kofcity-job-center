export interface LoginCredentials {
    email: string;
    password: string;
}

export interface User {
    uuid: string;
    email: string,
    tokens: AuthTokens,
    first_name: string;
    last_name: string;
    phone_number: string;
    group: string;
    is_verified: boolean;
    business: {
        business_id: string,
        business_registration_completed: boolean
    }
}

export interface AuthTokens {
    access_token: string,
    refresh_token: string
}

export interface RefreshToken {
    refresh: string
}

export interface UserGroup {
    [key: string]: string
}

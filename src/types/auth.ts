export interface LoginResponse {
    access_token: string;
    token_type?: string;
    user?: {
        id: string;
        email: string;
    };
}

export interface SignupResponse {
    message: string;
    access_token: string;
    token_type?: string;
    user?: {
        name: string;
        id: string;
        email: string;
    };
}

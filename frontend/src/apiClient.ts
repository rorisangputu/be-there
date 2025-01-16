import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
import { UserType }  from '../../backend/src/shared/types'


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchCurrentUser = async(): Promise<UserType>=> {
    const response = await fetch(`${API_BASE_URL}/api/users/me`, {
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error("Error fetching user");
    }
    return response.json();
}

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();
    if (!response.ok) {
        throw new Error(responseBody.message);
    }
}

export const signIn = async (formData: SignInFormData) => {
    //console.log(formData);
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    });

    const body = await response.json();
    if (!response.ok) {
        throw new Error(body.message);
    }

    return body
};

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include"
    });

    if (!response.ok) {
        throw new Error("Token invalid")
    }
    return response.json();
};

export const logout = async () => {
    const res = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        credentials: 'include',
        method: "POST"
    });

    if (!res.ok) {
        throw new Error("Error during sign out")
    }

}

export const addMyEvent = async (eventFormData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/api/my-events`, {
        method: "POST",
        credentials: "include",
        body: eventFormData,
    });

    if (!response.ok) {
        throw new Error("Failed to add event")
    }
    return response.json();
}
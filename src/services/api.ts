import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {API_URL} from "../config/api";

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    async (config) =>{
        const token = await SecureStore.getItemAsync("access_token");

        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) =>{
        return response;
    },
    async (error) =>{
        return Promise.reject(error);
    }
);

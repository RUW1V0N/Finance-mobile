import { LoginResponse } from "../types/auth";
import {api} from "./api";

export const loginRequest = async (
  email: string,
  password: string
): Promise<LoginResponse> =>{
  try{
    const res = await api.post("/login", {
      email, 
      password,
    });

    return res.data;
  } catch (error: any){
    throw new Error(
      error.response?.data?.detail || "Login failed"
    );
  }
};

export const getProfile = async () =>{
  try{
    const res = await api.post("/profile");
    return res.data;
  }catch(error: any){
    throw new Error(
      error.response?.data?.detail || "Failed to fetch profile"
    );
  }
};
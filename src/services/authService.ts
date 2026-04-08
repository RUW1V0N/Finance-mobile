import { LoginResponse } from "../types/auth";
import * as SecureStore from 'expo-secure-store';
import { API_URL } from "@/src/config/api";

export const loginRequest = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json();
};

export const getProfile = async () => {
  const token = await SecureStore.getItemAsync('token');

  const res = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, 
    },
  });

  return res.json();
};

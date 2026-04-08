import { LoginResponse } from "../types/auth";

const API_URL = "http://192.168.0.177:8000";

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

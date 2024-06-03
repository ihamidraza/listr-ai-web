// authService.ts

import { server } from "utils";

export const login = async (email: string, password: string) => {
  try {
    const { data } = await server.post(`/auth/login`, {
      email,
      password,
    });

    localStorage.setItem("loggedInUser", data);
    location.reload();
    return data;
  } catch (error) {
    console.error("Failed to login", error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("loggedInUser");
  location.reload();
};

export const getLoggedInUser = () => {
  return localStorage.getItem("loggedInUser");
};

export const isAuthenticated = localStorage.getItem("loggedInUser");

// export const isAuthenticated = async () => {
//   const token = localStorage.getItem("loggedInUser");
//   if (!token) return false;

//   try {
//     const response = await server.get(`/auth/profile`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.status === 200;
//   } catch (error) {
//     console.error("Token validation failed", error);
//     return false;
//   }
// };

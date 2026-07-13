import { clientAPI } from "../../../services/ClientApi";
import { Login } from "../../Pages/Login";
import { useAuth } from "../../../context/AuthContext";

export const AuthAPI = {
  signUp: async (data) => {
    try {
      const response = await clientAPI.post("/auth/signup", data);
      return response.data;
    } catch (err) {
      console.error("Signup failed: ", err);
    }
  },
  logIn: async (data) => {
    const loginForm = new URLSearchParams();
    loginForm.append("username", data.username);
    loginForm.append("password", data.password);
    try {
      const response = await clientAPI.post("/auth/login", loginForm, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response.data
    } catch (err) {
      console.error("Login failed: ", err);
    }
  },
};

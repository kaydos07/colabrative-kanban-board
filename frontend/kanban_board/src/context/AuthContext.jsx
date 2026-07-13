import {
  useState,
  useEffect,
  createContext,
  useContext,
  Children,
  useActionState,
} from "react";
import { clientAPI } from "../services/ClientApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setUser((user) => null);
        setLoading((loading) => false);
        return;
      }
      try {
        const response = clientAPI.get("/users/me");
        setUser((user) => response.data);
      } catch (err) {
        console.error("Authentication failed: ", err);
        logout();
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [token]);

  const login = (accessToken) => {
    localStorage.setItem("token", accessToken);
    setToken(accessToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        user,
        loading,
        isAuthenticated: !!token,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

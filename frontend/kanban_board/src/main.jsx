import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";

import { AuthProvider } from "./context/AuthContext.jsx";

import App from "./App.jsx";
import { Login } from "./features/Pages/Login";
import { SignUp } from "./features/Pages/SignUp";
// import { NoteFound } from "./features/Pages/NoteFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  // {path: "*", element: <NoteFound />}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

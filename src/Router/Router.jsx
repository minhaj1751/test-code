import { createBrowserRouter, Navigate } from "react-router";

/* ===== Layouts ===== */
import AdminLayout from "../Layout/AdminLayout";
import AuthenticationLayout from "../Layout/AuthenticationLayout";


/* ===== Admin Pages ===== */
import Login from "../Pages/AuthenticationPages/Login/Login";
import Dashboard from "../Pages/AdminPages/Dashboard";
import Card from "../Pages/AdminPages/Card";
import Table from "../Pages/AdminPages/Table";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Register from "../Pages/AuthenticationPages/Register/Register";
import Profile from "../Pages/Profile/Profile";

/* ================================================= */

export const router = createBrowserRouter([
    /* ROOT → ADMIN */
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Navigate to="card" replace /> },
            { path: "card", Component: Card },
            { path: "table", Component: Table },
        ],
    },

    /* ADMIN ROUTES */
    {
        path: "/admin",
        element: (
                <AdminLayout />
        ),
        children: [
            { index: true, element: <Navigate to="deshboard" replace /> },
            { path: "deshboard", Component: Dashboard },
            { path: "profile", Component: Profile },
            
        ],
    },

    /* AUTH ROUTES */
    {
        path: "/",
        element: (
                <AuthenticationLayout />
            
        ),
        children: [
            { path: "login", Component: Login },
            { path: "register", Component: Register },

        ],
    },

    /* ERROR */
    {
        path: "*",
        Component: ErrorPage,
    },
]);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { Register } from "./register";
import { Welcome } from "./welcome";
import { ResetPassword } from "./resetpassword";
import { ForgotPassword } from "./forgotpassword";
import App from "./App";
import "./index.css";
import Dashboard from "./dashboard/dashboard";
import Layout from "./dashboard/shared/layout";
import Users from "./dashboard/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "welcome",
    element: <Welcome />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "resetpassword/:token/:email",
    element: <ResetPassword />,
  },
  {
    path: "mainDashboard",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

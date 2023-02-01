import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error-page";
import { Register } from "./register";
import { Welcome } from "./welcome";
import { ResetPassword } from "./resetpassword";
import { ForgotPassword } from "./forgotpassword";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

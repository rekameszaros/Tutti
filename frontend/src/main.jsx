import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import CreateEnsemble from "./pages/CreateEnsemble";
import FindEnsemble from "./pages/FindEnsemble";
import Profile from "./pages/Profile";
const userId = localStorage.getItem("id");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "create",
    element: <CreateEnsemble />,
  },
  {
    path: "find",
    element: <FindEnsemble />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

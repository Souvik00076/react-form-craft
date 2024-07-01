import { AuthContainer } from "../pages/AuthContainer";
import { LoginAuth, SignupAuth } from "../components";
import { MainContainer } from "../pages/MainContainer";
import { Dashboard } from "../pages/Dashboard";
export const routes = [
  {
    path: "auth",
    element: <AuthContainer />,
    children: [
      {
        path: "login",
        element: <LoginAuth />,
      },
      {
        path: "register",
        element: <SignupAuth />,
      },
    ],
  },
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

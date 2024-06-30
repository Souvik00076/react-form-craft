import { AuthContainer } from "../pages/AuthContainer";
import { LoginAuth, SignupAuth } from "../components";
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
];

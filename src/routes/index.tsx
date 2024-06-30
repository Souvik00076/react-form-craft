import { AuthContainer } from "../pages/AuthContainer";
import { LoginAuth } from "../components";

export const routes = [
  {
    path: 'auth',
    element: <AuthContainer />,
    children: [
      {
        path: 'login',
        element: <LoginAuth />
      }
    ]
  }]

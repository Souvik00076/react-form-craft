import { ReactNode } from "react";

export type TThemeContextType = {
  theme: boolean;
  toggleTheme: () => void;
}

export type TContextProps = {
  children: ReactNode;
}

export type TUserContextType = {
  isAuthenticated: boolean;
  userName: string;
  email: string;
  loading: boolean;
}




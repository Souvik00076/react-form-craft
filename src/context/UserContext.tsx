import { createContext, FC, useState } from "react";
import { TContextProps, TUserContextType } from "../@types";
export const UserContext = createContext<TUserContextType | null>(null);

type TUserStateType = {
  isAuthenticated: boolean;
  userName: string;
  email: string;
  loading: boolean;
};
const UserContextProvider: FC<TContextProps> = ({ children }) => {
  const [user, setUser] = useState<TUserStateType>({
    isAuthenticated: false,
    userName: "",
    email: "",
    loading: false,
  });

  const setUserName = (userName: string) => {
    setUser({ ...user, userName });
  };

  const setUserEmail = (email: string) => {
    setUser({ ...user, email });
  };
  const setIsAuthenticated = (isAuthenticated: boolean) => {
    setUser({
      ...user,
      isAuthenticated,
    });
  };
  const setUserLoading = (loading: boolean) => {
    setUser({
      ...user,
      loading,
    });
  };

  const value = {
    user,
    setUserName,
    setUserEmail,
    setIsAuthenticated,
    setUserLoading, // corrected from setLoading to setUserLoading based on your context
    children,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;

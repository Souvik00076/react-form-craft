import { FC } from "react";
import { AuthImage } from "../constants/imageIndex";
import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks";

export const AuthContainer: FC = () => {
  const theme = useTheme();
  return (
    <div
      className={`flex h-screen ${theme.theme ? "bg-light-primary" : "bg-dark-primary"}`}
    >
      <div className="flex-1">
        <img src={AuthImage} className="h-full " alt="Auth Image" />
      </div>
      <div
        className="flex-1 
      containter
      mx-auto
      flex
      items-center
      justify-center
      "
      >
        <Outlet />
      </div>
    </div>
  );
};

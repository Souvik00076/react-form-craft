import { FC } from "react";
import { AuthImage } from "../constants/imageIndex";
import { Outlet } from "react-router-dom";

export const AuthContainer: FC = () => {
  return <div className="flex items-center justify-center">
    <div className="flex-1">
      <img src={AuthImage} alt="Auth Image" />
    </div>
    <>
      <Outlet />
    </>
  </div>
}

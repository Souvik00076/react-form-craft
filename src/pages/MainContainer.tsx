import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks";
import { useUser } from "../hooks/useUser";
import { Nav } from "../components";

export const MainContainer = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

import { useNavigate } from "react-router-dom";
import { DarkModeIcon, LightModeIcon } from "../constants/imageIndex";
import { useTheme, useUser } from "../hooks";

export const Nav = () => {
  const themeContext = useTheme();
  const userContext = useUser();
  const navigate = useNavigate();
  return (
    <div
      className={`navbar ${themeContext.theme ? "bg-light-primary" : "bg-dark-primary"}`}
    >
      <div className="flex-1">
        <span
          className={`  text-xl ${themeContext.theme ? "text-dark-primary" : "text-ghost"} cursor-pointer`}
          onClick={() => navigate("/auth/login")}
        >
          React Form Craft
        </span>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end cursor-pointer">
          <img
            src={themeContext.theme ? DarkModeIcon : LightModeIcon}
            width={42}
            height={42}
            alt="mode icon"
            onClick={() => themeContext.toggleTheme()}
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <span className="justify-between">
                {userContext.userName}
                <span className="badge">New</span>
              </span>
            </li>
            <li>{userContext.email}</li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { useOutletContext } from "react-router-dom";
import { TextInputAuth } from "../inputs";
import { useState } from "react";
import { AuthButton } from "../buttons";
import { GoogleIcon } from "../../constants/imageIndex";

export const SignupAuth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassowrd, setConfPassword] = useState<string>("");
  const isLightMode = useOutletContext();
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <TextInputAuth
        className={isLightMode ? "text-white" : "bg-gray-200 text-gay-900"}
        placeHolder={"Enter your email"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <TextInputAuth
        className={isLightMode ? "text-white" : "bg-gray-200 text-gay-900"}
        placeHolder={"Enter your password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <TextInputAuth
        className={isLightMode ? "text-white" : "bg-gray-200 text-gay-900"}
        placeHolder={"Confirm your password"}
        onChange={(e) => {
          setConfPassword(e.target.value);
        }}
        value={confPassowrd}
      />
      <AuthButton
        className={`
          ${isLightMode ? " text-white bg-primary-dark" : "text-black bg-gray-200"}
        `}
        text={"Register"}
        onClick={() => {}}
      />
      <div className="px-7 text-center rounded-md bg-white flex">
        <img src={GoogleIcon} alt="Google Icon" width={32} height={32} />
        <p className={`${isLightMode ? "text-black" : "text-white"}`}>
          Login With Google
        </p>
      </div>
    </div>
  );
};

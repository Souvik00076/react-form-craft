import { useOutletContext } from "react-router-dom";
import { TextInputAuth } from "../inputs";
import { useState } from "react";
import { AuthButton } from "../buttons";

export const LoginAuth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
        title={"Email"}
      />
      <TextInputAuth
        className={isLightMode ? "text-white" : "bg-gray-200 text-gay-900"}
        placeHolder={"Enter your password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        title={"Password"}
      />
      <AuthButton
        className={`
          ${isLightMode ? " text-white bg-primary-dark" : "text-black bg-gray-200"}
        `}
        text={"Login"}
        onClick={() => {}}
      />
    </div>
  );
};

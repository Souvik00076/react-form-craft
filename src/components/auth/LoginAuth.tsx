import { ChangeEvent, FC, useState } from "react";
import { HidePasswordIcon, ShowPasswordIcon } from "../../constants/imageIndex";

export const LoginAuth: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPasword, setShowPassword] = useState<boolean>(
    password.length === 0,
  );
  return (
    <form
      className="border-[2px] 
            border-white
            mx-auto
            container
            items-center
            flex 
            flex-col
            gap-2
            w-[400px]
            px-6
            py-2
            "
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Password here"
        value={password}
        className="grow"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
    </form>
  );
};

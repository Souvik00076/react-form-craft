import { createContext, FC, useState } from "react";
import { TThemeContextType, TContextProps } from "../@types";

export const ThemeContext = createContext<TThemeContextType | null>(null)
//false means night mode 
const ThemeContextProvider: FC<TContextProps> = ({
  children
}) => {
  const [theme, setTheme] = useState<boolean>(false);
  const toggleTheme = () => {
    setTheme((theme: boolean) => !theme);
  }
  const value = {
    theme,
    toggleTheme
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>

}


export default ThemeContextProvider

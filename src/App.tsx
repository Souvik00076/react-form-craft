import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import UserContextProvider from "./context/UserContext";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </UserContextProvider>
  );
};

export default App;

import { useUniqueId } from "../hooks/useId.js";
import HomePage from "../pages/Home/index.jsx";
import PropertiesPage from "../pages/Properties/index.jsx";

export const navbar = [
  {
    id: useUniqueId,
 element: <HomePage/>,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <PropertiesPage/>,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: <h1>Generic Sign In</h1>,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  }, 
  {
    id: useUniqueId,
    element: <h1>Generic Sign Up</h1>,
    title: "Sign up",
    path: "/signup",
    private: false,
    hidden: true,
  }, 
];

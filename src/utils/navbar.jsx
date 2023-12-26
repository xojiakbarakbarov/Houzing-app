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
];

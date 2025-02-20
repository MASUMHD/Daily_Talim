import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./MainLayouts";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

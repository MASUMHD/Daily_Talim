import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayouts from './../Layouts/MainLayouts';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        
      }
    ],
  },
]);

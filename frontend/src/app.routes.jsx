
import Home from "./Pages/Home";
import { createBrowserRouter } from "react-router";
import App from "./App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
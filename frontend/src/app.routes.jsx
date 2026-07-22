
import Home from "./Pages/Home";
import { createBrowserRouter } from "react-router";
import App from "./App";
import About from "./Pages/About";
import Disclaimer from "./Pages/Disclaimer";
import ReturnPolicy from "./Pages/ReturnPolicy";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import EmailVerify from "./Pages/EmailVerify";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/disclaimer",
        element:<Disclaimer/>
      },
      {
        path:"/return",
        element:<ReturnPolicy/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login />
      },
      {
        path:"/verify-email",
        element:<EmailVerify/>
      },
      {
        path:"/products/:id",
        element:<ProductDetails/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);
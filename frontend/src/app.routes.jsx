
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
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";
import Profile from "./Pages/Profile";
import Shop from "./Pages/Shop";
import AdminDashboard from "./Admin/AdminDashboard";
import AddProducts from "./Admin/AddProducts";
import AdminProducts from "./Admin/AdminProducts";
import EditProduct from "./Admin/EditProduct";
import AdminOrders from "./Admin/AdminOrders";
import AdminUser from "./Admin/AdminUser";

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
      },
      {
        path:"/checkout",
        element:<Checkout/>
      },
      {
        path:"/ordersuccess",
        element:<OrderSuccess/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/admin",
        element:<AdminDashboard/>
      },
      {
        path:"/admin/add-product",
        element:<AddProducts/>
      },
      {
        path:"/admin/products",
        element:<AdminProducts/>
      },
      {
        path:"/admin/edit-product/:id",
        element:<EditProduct/>
      },
      {
        path:"/admin/orders",
        element:<AdminOrders/>
      },
      {
        path:"/admin/users",
        element:<AdminUser/>
      }

    ],
  },
]);
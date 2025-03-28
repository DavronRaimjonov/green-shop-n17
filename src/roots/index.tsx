import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayut from "../components/main-layout";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ProductsShop from "../pages/products-shop";
import ProcedChekcout from "../pages/proced-checkout";
import Blog from "../pages/blog";
import Rendering from "../components/blog/rendering";
import ProfileComponent from "../components/profile";
import { cookieInfo } from "../generic/cookies";
import { path_profile } from "../utils";
const { isAuthorization } = cookieInfo();
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:category/:id",
        element: <Shop />,
      },
      {
        path: "/products-shop",
        element: <ProductsShop />,
      },
      {
        path: "/proced-checkout",
        element: <ProcedChekcout />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:created_by/:id",
        element: <Rendering />,
      },
      {
        path: "/profile",
        element: isAuthorization ? (
          <ProfileComponent />
        ) : (
          <Navigate to={"/"} replace />
        ),
        children: path_profile.map(({ path, Components }) => ({
          path: `${path}`,
          element: <Components />,
        })),
      },
    ],
  },
]);

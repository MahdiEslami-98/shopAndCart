import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/mainLayout";
import HomePage from "@/pages/Home";
import CartPage from "@/pages/cart";
import ProductsPage from "@/pages/products";
import NotFoundPage from "@/pages/404";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;

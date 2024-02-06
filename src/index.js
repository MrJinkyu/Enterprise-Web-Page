import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NewProduct from "./pages/NewProduct";
import MyCart from "./pages/MyCart";
import InterestsList from "./pages/InterestsList";
import ProtectedRoute from "./pages/ProtectedRoute";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetail /> },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      { path: "/cart", element: <MyCart /> },
      { path: "/cart/shipping", element: <Shipping /> },
      { path: "/cart/shipping/payment", element: <Payment /> },
      { path: "/interest", element: <InterestsList /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

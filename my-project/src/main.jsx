import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AboutUs from "./component/AboutUs.jsx";
import ContactUs from "./component/ContactUs.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./component/Body.jsx";
import RestaurantMenu from "./component/RestaurantMenu.jsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/reataurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />,
);

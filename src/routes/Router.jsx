import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Datacenter from "../components/Datacenter";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy";
import { Checkout } from "../pages/Checkout";
import SuccessPage from "../components/SuccessPage";
import CancelPage from "../components/CancelPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/:categoryId",  // ✅ Added dynamic route for category-based navigation
                element: <Products />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/data-center",
                element: <Datacenter />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/cookie-policy",
                element: <CookiePolicy />
            },
            {
                path : "/checkout",
                element :<Checkout/>
            },
            {
                path :'/success',
                element: <SuccessPage />
            },
            {
                path: '/cancel',
                element: <CancelPage />
            }
        ]
    }
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Datacenter from "../components/Datacenter";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
               path:"/contact",
               element:<Contact/> 
            },
            {
                path:"/data-center",
                element:<Datacenter/>
            }
        ]
    }
])
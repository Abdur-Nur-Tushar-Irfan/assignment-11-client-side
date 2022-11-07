import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    }

])
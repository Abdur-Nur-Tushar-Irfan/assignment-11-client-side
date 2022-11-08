import { createBrowserRouter } from "react-router-dom";
import AllServices from "../components/AllServices/AllServices";
import Home from "../components/Home/Home/Home";

import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ShowDetails from "../components/ShowDetails/ShowDetails";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReview from "../components/MyReview/MyReview";
import Blog from "../components/Blog/Blog";

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
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>,
                loader:()=>fetch('http://localhost:5000/allservices')
            },
            {
                path:'/showDetails/:id',
                element:<ShowDetails></ShowDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/myreview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/addservice'
            }

        ]
    }

])
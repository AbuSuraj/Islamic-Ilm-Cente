import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/Courses/CheckOut/CheckOut";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Form/Login/Login";
import Register from "../../Pages/Form/Register/Register";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path:'/courses',
                element:<Courses></Courses>,
                loader: () =>fetch('https://ilm-center-server.vercel.app/categories')
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'blog',
                element:<Blog></Blog>
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
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/course/:courseId',
                loader: async({params}) =>{
                    return fetch(`https://ilm-center-server.vercel.app/course/${params.courseId}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path:'/checkout/:checkoutId',
                loader: async({params}) =>{
                    return fetch(`https://ilm-center-server.vercel.app/checkout/${params.checkoutId}`)
                },
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
            }
        ]
    }
])
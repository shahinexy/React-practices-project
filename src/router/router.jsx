
import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from './../Pages/Home/Home';
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about-us',
          element: <About></About>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }

      ]
    },
  ]);

  export default router

import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from './../Pages/Home/Home';
import About from "../Pages/About/About";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Shop from "../Pages/Shop/Shop";

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
        }

      ]
    },
  ]);

  export default router
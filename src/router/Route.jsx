import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/Donation_Details/DonationDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
     {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      }, {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/data.json"),
      },
      {
        path:"/donation_details/:id",
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      }, 
    ],
  },
]);

export default router;

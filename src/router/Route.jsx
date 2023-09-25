import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
     {
        path: "/",
        element: <Home></Home>,
      }, {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path:"/donation_details/:category",
        element:<DonationDetails></DonationDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      }, 
    ],
  },
]);

export default router;

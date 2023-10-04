import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header/Header";

const MainLayout = () => {
  let location = useLocation();

  React.useEffect(() => {
    // console.log(location);
    if (location.pathname === "/") {
      document.title = "Campaign Home";
    } else {
      // document.title = `Campaign ${location.pathname.replace('/','- ')}`;

      const slicedPath = location.pathname.slice(1);
      const capitalizedPath =
        slicedPath.charAt(0).toUpperCase() + slicedPath.slice(1);
      // console.log(capitalizedPath);
      document.title = `Campaign ${capitalizedPath}`;
    }

    if (location.state) {
      document.title = `${location.state}`;
    }
  }, [location]);

  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

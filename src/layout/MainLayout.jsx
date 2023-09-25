import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header/Header";

const MainLayout = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

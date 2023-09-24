import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header/Header";

const MainLayout = () => {
  return (
    <div className="container mx-auto w-[95%]">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

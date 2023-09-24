import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";



const Header = () => {
  return (
    <div className="h-screen flex flex-col bgi">
      {/* <NavBar></NavBar> */}
      <Banner></Banner>
    </div>
  );
};

export default Header;

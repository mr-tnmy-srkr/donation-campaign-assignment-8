import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";



const Home = () => {
 
  const{products} = useLoaderData();



  return (
    <div>
      <Banner products={products}></Banner>
      <Donations products={products}></Donations>
    </div>
  );
};

export default Home;

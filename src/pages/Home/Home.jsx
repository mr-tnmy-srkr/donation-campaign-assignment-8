import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const { products } = useLoaderData();
  const [data, setData] = useState(products);


  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.toLowerCase();
    // console.log(products);

    const filteredData = products.filter((item) =>
      item.category.toLowerCase().includes(searchValue)
    );
    
    setData(filteredData);
    //  console.log(filteredData);
  };
  // console.log(filteredProducts);
  // console.log(products);

  return (
    <div>
      <Banner products={products} handleSearch={handleSearch}></Banner>
      {/* <Donations products={filteredProducts}></Donations> */}
      {data.length ? <Donations products={data}></Donations> : <div className="text-center my-10 font-bold text-2xl">No Data Found</div>}

    </div>
  );
};

export default Home;

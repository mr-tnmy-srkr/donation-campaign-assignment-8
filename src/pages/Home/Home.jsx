import { useLoaderData } from "react-router-dom";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const { products } = useLoaderData();
  const [data, setData] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.toLowerCase();
    // setSearchText(searchValue);
    // console.log(products);

    const filteredData = products.filter((item) =>
      item.category.toLowerCase().includes(searchValue)
    );
    // setFilteredProducts(filteredData);
    setFilteredProducts(filteredData);
    setData(filteredData);
    //  console.log(filteredData);
  };
  console.log(filteredProducts);
  console.log(products);

  return (
    <div>
      <Banner products={products} handleSearch={handleSearch}></Banner>
      {/* <Donations products={filteredProducts}></Donations> */}
      {data.length ? <Donations products={data}></Donations> : <div className="text-center my-10 font-bold text-2xl">No Data Found</div>}
      {/* {
  if(filteredProducts.length>0){
    <Donations products={filteredProducts}></Donations>
  }else if(filteredProducts.length===0){
console.log("length zero")
  }else{
    <Donations products={products}></Donations>
  }
} */}
    </div>
  );
};

export default Home;

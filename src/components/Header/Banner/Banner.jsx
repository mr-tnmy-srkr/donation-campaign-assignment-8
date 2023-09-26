// import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import "./Banner.css";
import DonationsCard from "../../Donations/DonationsCard";
// import DonationsCard from "../../Donations/DonationsCard";
const Banner = ({products}) => {
  

  console.log(products);
  const [searchText, setSearchText] = useState(['']);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value.toLowerCase();
    setSearchText(searchValue);

    const filteredData = products.filter(item =>
      item.category.toLowerCase().includes(searchText)
      );
      setFilteredProducts(filteredData);
     
  };
  console.log(filteredProducts);

  return (
    <div className="">
      {/* <NavBar></NavBar> */}

      <div>
        <h2
          className="flex-grow
            bg-white"
        >
          <div
            className="hero h-[500px] w-full"
            style={{
              backgroundImage: "url(resources/bgi.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content  w-full">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-[#0B0B0B] drop-shadow-2xl text-shadow ">
                  I Grow By Helping People In Need
                </h1>
                <form onSubmit={handleSearch}>
                  <div className="input-container md:max-w-[80%] mx-auto mt-10 flex-col md:flex-row gap-5 md:gap-0">
                    <input
                      type="search"
                      name="search"
                      className="text-black font-semibold"
                      placeholder="Search here...."
                    />
                    <button type="submit">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Banner;

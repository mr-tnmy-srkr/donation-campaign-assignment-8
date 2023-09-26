// import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import "./Banner.css";
import DonationsCard from "../../Donations/DonationsCard";
const Banner = () => {

  const [donations, setDonations] = useState([]);
  const [searchText, setSearchText] = useState([]);
const [filteredProducts,setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data.products));
  }, []);
  
  


  useEffect(()=>{
    const filteredData = donations.filter(item => searchText.includes(item.category.toLowerCase()));
    // console.log(filteredData);
    setFilteredProducts(filteredData)
  },[donations, searchText])

console.log(filteredProducts);


const handleSearch=(e)=>{
  e.preventDefault();
  const searchValue = e.target.search.value;
  // console.log(searchValue);

  // localStorage.setItem("search", searchValue);
setSearchText(searchValue.toLowerCase())
  // const filterData = phones?.filter(
    // (phone) => phone.brand_name === searchValue
  // );
  // setPhones(filterData);
  // console.log(filterData);
{<div className="container mx-auto w-[95%] grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
      {donations &&
        donations?.map((donation,idx) => (
          <DonationsCard key={idx} donation={donation}></DonationsCard>
        ))}
    </div>}

}
  // console.log(donations);
  // console.log(searchText);

  return (
    <div className="">
      {/* <NavBar></NavBar> */}

      <div >
        <h2
          className="flex-grow
            bg-white"
        >
          <div
            className="hero h-[500px] w-full"
            style={{
              backgroundImage: "url(resources/bgi.png)",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
              backgroundPosition:"center",

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
                  <input type="search"  name="search" className="text-black font-semibold" placeholder="Search here...." />
                  <button   type="submit">Search</button>
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

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedData } from "../../utils/localStorage.js";
import DonationCard from "./DonationCard.jsx";

const Donation = () => {
  const [totalDonated, setTotalDonated] = useState([]);
  const [isShow,setIsShow] = useState(true);
  const [noDataFound,setNoDataFound] = useState(true)
  const { products } = useLoaderData();
  // console.log(products);
  const storedDonatedDataLength = totalDonated.length;
  
  useEffect(() => {
    const storedDonatedData = getStoredDonatedData();
    const donatedData = products.filter((element) =>
    storedDonatedData.includes(parseInt(element.id))
    );
    setTotalDonated(donatedData);
    if(storedDonatedDataLength){
      setNoDataFound(false)
    }
  }, [products, storedDonatedDataLength, totalDonated.length]);

// console.log(noDataFound);
  return (
   <div>
{
noDataFound ||
  <div>
     {
      isShow ? 
     ( <div className="grid lg:grid-cols-2 gap-5 container w-[95%] mx-auto my-6">
      {totalDonated?.slice(0,4).map((element) => (
        <DonationCard key={element.id} element={element}></DonationCard>
      ))}
    </div>) : (
      <div className="grid lg:grid-cols-2 gap-5 container w-[95%] mx-auto my-6">
      {totalDonated?.map((element) => (
        <DonationCard key={element.id} element={element}></DonationCard>
      ))}
    </div>
    )
     }
    {
      storedDonatedDataLength>4 &&
      <div className="text-center my-10">
      <button onClick={()=>setIsShow(!isShow)} className={`btn bg-[#009444] text-white capitalize px-8 btn-success ${isShow===false? 'hidden' : ''} `}>See All</button>
    </div>}
   </div>
}
{
  noDataFound && <div className="h-[80vh] flex justify-center items-center text-2xl font-bold">No Donation Found</div>
}
   </div>
  );
};

export default Donation;

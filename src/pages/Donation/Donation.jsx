import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedData } from "../../utils/localStorage.js";
import DonationCard from "./DonationCard.jsx";

const Donation = () => {
  const [totalDonated, setTotalDonated] = useState([]);
  const { products } = useLoaderData();
  console.log(products);

  useEffect(() => {
    const storedDonatedData = getStoredDonatedData();
    const donatedData = products.filter((element) =>
      storedDonatedData.includes(parseInt(element.id))
    );
    setTotalDonated(donatedData);
  }, [products]);

  return (
    <div className="grid lg:grid-cols-2 gap-5 container w-[95%] mx-auto my-6">
      {totalDonated?.map((element) => (
        <DonationCard key={element.id} element={element}></DonationCard>
      ))}
    </div>
  );
};

export default Donation;

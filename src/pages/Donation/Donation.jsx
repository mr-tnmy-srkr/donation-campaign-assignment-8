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

  return <div>
 {
            totalDonated?.map(element => <DonationCard key={element.id} element={element}></DonationCard>)
          }

  </div>;
};

export default Donation;

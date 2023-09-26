import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";

const Donations = ({products}) => {
/*   const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data.products));
  }, []); */
  return (
    <div className="container mx-auto w-[95%] grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
      {products &&
        products?.map((donation, idx) => (
          <DonationsCard key={idx} donation={donation}></DonationsCard>
        ))}
    </div>
  );
};

export default Donations;

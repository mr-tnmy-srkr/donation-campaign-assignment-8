import { useEffect, useState } from "react";
import PhonesCard from "../PhonesCard";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("data.json")
    .then(res=>res.json())
    .then(data=>setPhones(data.products))
  }, []);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
     {
        phones &&
        phones?.map(phone=><PhonesCard key={phone.id} phone={phone}></PhonesCard>)
     }
    </div>
  );
};

export default Phones;

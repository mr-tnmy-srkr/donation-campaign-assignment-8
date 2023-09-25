import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {
const [myData,setMyData] = useState([])
    const{id} = useParams();
    // console.log(id);
    const {products} = useLoaderData();
    // console.log(products);
 
useEffect(()=>{
    const findCategoryData = products.find(item =>item.id === id)
    // console.log(findCategoryData);
    setMyData(findCategoryData);
},[id, products])
// console.log(myData);

    return (
        <div className="container mx-auto w-[95%]">
       <DonationDetailsCard myData={myData}></DonationDetailsCard>
       
        </div>
    );
};

export default DonationDetails;
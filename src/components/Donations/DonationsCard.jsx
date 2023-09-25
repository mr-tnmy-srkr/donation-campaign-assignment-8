// import React from 'react';

import { Link, } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const {
    id,
    image,
    title,
    category,
    description,
    price,
    category_bg,
    card_bg,
    text_button_bg,
  } = phone || {};
//   console.log(phone);
  // console.log(text_button_bg);

  return (
  <div>
      <Link to={`/donation_details/${category}`}>
      <div className="cursor-pointer">
      <div className="">
        <div className="rounded-lg"><img className="w-full" src={image} alt="" /></div>
        <div className={`bg-[${card_bg}] rounded-b-lg `}>
           <div className="pt-4 ml-3">
           <p className={`px-2 py-1 bg-slate-400 max-w-max rounded-lg font-medium text-sm`}>{category}</p>
           </div>
            <h2 className={`p-2 pl-4 font-semibold text-xl`}>{title}</h2>
        </div>
      </div>
    </div>
      </Link>
  </div>
  );
};

export default PhonesCard;

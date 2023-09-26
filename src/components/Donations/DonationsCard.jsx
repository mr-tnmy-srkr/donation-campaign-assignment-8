// import React from 'react';

import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
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
  } = donation || {};

  // console.log(text_button_bg);
  const card_bgc = {
    backgroundColor: `${card_bg}`,
  };
  const cat_bgc = {
    backgroundColor: `${category_bg}`,
    color:`${text_button_bg}`
  };
  const title_bgc = {
    color:`${text_button_bg}`
  };

  return (
    <div>
      <Link to={`/donation_details/${id}`} state={title}>
        <div className="cursor-pointer ">
          <div className="">
            <div className="">
              <img className="w-full rounded-t-lg" src={image} alt="" />
            </div>
            <div style={card_bgc} className={`rounded-b-lg`}>
              <div className="pt-4 ml-3">
                <p
                  style={cat_bgc}
                  className={`px-2 py-1 max-w-max rounded-lg font-medium text-sm`}
                >
                  {category}
                </p>
              </div>
              <h2 style={title_bgc} className={`p-2 pl-4 font-semibold text-xl`}>{title}</h2>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationsCard;

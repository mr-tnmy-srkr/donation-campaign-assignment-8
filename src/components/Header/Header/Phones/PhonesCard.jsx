// import React from 'react';

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
  console.log(text_button_bg);
  return (
  <div>
      <div className="cursor-pointer">
      <div className="">
        <div className="rounded-lg"><img src={image} alt="" /></div>
        <div className={`bg-[${card_bg}] rounded-b-lg bg-red-400`}>
           <div className="pt-4 ml-3">
           <p className={`px-2 py-1 bg-slate-400 max-w-max rounded-lg font-medium text-sm`}>{category}</p>
           </div>
            <h2 className={`p-2 pl-4 font-semibold text-xl`}>{title}</h2>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PhonesCard;

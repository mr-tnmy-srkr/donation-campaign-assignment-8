const DonationCard = ({ element }) => {
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
  } = element || {};
//   console.log(element);



  const cat_bgc = {
    backgroundColor: `${category_bg}`,
    color:`${text_button_bg}`
  };
const price_text={
    color:`${text_button_bg}`
};
const btn_bgc={
    backgroundColor:`${text_button_bg}`
};
const card_bgc = {
    backgroundColor: `${card_bg}`,
  };


  return (
    <div>
      <div className="card card-side shadow-xl bg-none w-full">
        <figure className="w-[40%]">
          <img className="h-full " src={image} alt="" />
        </figure>
        <div style={card_bgc} className="card-body rounded-r-2xl w-[60%]">
          <p
            style={cat_bgc}
            className={`px-2 py-1 max-w-max rounded-lg font-medium text-sm`}
          >
            {category}
          </p>
          <h2 className="card-title">{title}</h2>
          <p style={price_text} className="text-lg font-semibold">${price}.00</p>
       
       
            <button style={btn_bgc} className="btn btn-primary border-0 max-w-max px-4 capitalize py-0 text-white">View Details</button>
     
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

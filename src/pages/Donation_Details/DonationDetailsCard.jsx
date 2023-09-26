import PropTypes from "prop-types";
import {
  getStoredDonatedData,
  saveDonatedData,
} from "../../utils/localStorage.js";

import "./DonationDetailsCard.css";
import Swal from "sweetalert2";

const DonationDetailsCard = ({ myData }) => {
  const { id, image, title, description, price, text_button_bg } = myData || {};
  // console.log(title);

  const button_style = {
    backgroundColor: `${text_button_bg}`,
    border: 0,
    color: "white",
  };

  const handleAddToDonated = () => {
    const storedDonatedData = getStoredDonatedData();
    // console.log(storedDonatedData);
    const isExist = storedDonatedData.find(
      (donationId) => donationId === parseInt(id)
    );

    if (isExist) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have already donated!",
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    } else {
      saveDonatedData(parseInt(id));
      Swal.fire("Good job!", "You have donated successfully!", "success");
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="md:h-[100vh] relative rounded-lg">
          <img className="w-full  md:h-[100vh] rounded-lg" src={image} alt="" />
          <div className="overlay-content h-[15vh] md:h-[20vh] rounded-b-lg">
            <div className="flex items-center h-full pl-6">
              <button
                onClick={handleAddToDonated}
                style={button_style}
                className="btn max-w-max px-5 py-3 capitalize"
              >
                Donate ${price}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-[#BBBBB2] text-lg leading-7">{description}</p>
      </div>
    </div>
  );
};
DonationDetailsCard.propTypes = {
  myData: PropTypes.object.isRequired,
};
export default DonationDetailsCard;

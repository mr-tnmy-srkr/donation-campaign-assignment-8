
const DonationDetailsCard = ({myData}) => {
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
      } = myData || {};
      console.log(title);
    return (
        <div className="">
       <div className="">
        <img className="w-full h-[100vh] relative" src="https://s3-alpha-sig.figma.com/img/3236/7f7c/bb78eb35b1d83676bfeb091b0af13288?Expires=1696809600&Signature=nhoDcldy77HjP~FexUye3KQKjLvA6rbGTKBXaej0G9UFNuIx6qHzXxg1J5yDMLKduYWJsiuHzntNdQrmCNcn~9dMNk5q-jlpPLb3GCoXJ-lxZhxT0jMgpOUpnJbmpbKNtTqglI2NxISPIgaT8HX8QqHDvv~vnEbT1r~KejLFi5pY2A501p8fRztTLLFxma9x2My81yPz0SMD2L6MaCeWe8qPUcnmy6-KX09cMozrM7P8oEhYA7aiuq1arChAhGoQ06Qr5IhukZRhIXE3Aeu~PgDG80wVYwMdRr8l7TEm8VofKsN-OxQmlGjF68YeHbm0Iwh~WKKe1Sq1W5mUR1kz7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        <div className="absolute -bottom-8 left-16 border-4 w-full">
            <button className="btn btn-secondary">Donate</button>
        </div>
       </div>
       <div className="my-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-[#BBBBB2] text-lg leading-7">{description}</p>
       </div>
        </div>
    );
};

export default DonationDetailsCard;
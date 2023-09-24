import NavBar from "../NavBar/NavBar";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="">
      <NavBar></NavBar>

      <div >
        <h2
          className="flex-grow
            bg-white"
        >
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(resources/bgi.jpg)",
            }}
          >
            <div className="hero-overlay opacity-90 bg-white"></div>
            <div className="hero-content text-center text-neutral-content  w-full">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold text-[#0B0B0B] drop-shadow-2xl text-shadow ">
                  I Grow By Helping People In Need
                </h1>

                <div className="input-container md:max-w-[80%] mx-auto mt-10 flex-col md:flex-row gap-5 md:gap-0">
                  <input type="text" className="text-black font-semibold" placeholder="Search here...." />
                  <button>Button</button>
                </div>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Banner;

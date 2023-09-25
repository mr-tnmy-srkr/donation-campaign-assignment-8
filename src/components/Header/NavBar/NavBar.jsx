import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [isShow,setIsShow] = useState(true)
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
     
      <li>
        <NavLink to="/donation">Donation</NavLink>
      </li>
    
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-transparent px-0">
      <Link to="/" className="text-4xl font-semibold  w-full">
        <img src="resources/Logo.png" alt="" />
      </Link>
      <div className="navbar-start  w-full flex justify-end">

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <div onClick={()=>setIsShow(!isShow)}>
         {
          isShow ? ( <svg 
              xmlns=""
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>):(<RxCross1 className="text-3xl font-bold"></RxCross1>)
         }
            </div>
          </label>
          {
            !isShow?(<ul
            tabIndex={0}
            className="text-xl font-semibold flex flex-col gap-4 -left-28  dropdown-content mt-5 z-[1] p-2 shadow  rounded-box w-40"
          >
            {links}
          </ul>):("")
          }
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="flex gap-5 text-xl font-semibold px-1">{links}</ul>
      </div>
    
    </div>
  );
};

export default NavBar;

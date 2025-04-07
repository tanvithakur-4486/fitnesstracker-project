import React from "react";
import "./styles.css";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";
import { IoFitness } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

function CustomNavbar() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" },
    { title: "About us", path: "/about us" },
    { title: "Workout", path: "/workout" },
    { title: "Progress", path: "/progress" },
    
    
  
  ];

  return (
    <div className="customNavbarBaseContainer">
      <div className="customNavbarLogoContainer">
        <IoFitness
          className="navbarLogoContainer"
          size={40}
          color={COLOR.whiteColor}
        />
      </div>
      <div className="customNavbarLinkContainer">
        {links.map((item) => {
          return <p onClick={() => navigate(item.path)}>{item.title}</p>;
        })}
      </div>
      <div className="customNavbarProfileContainer">
        <FaUserCircle
         size={40}
          color={COLOR.whiteColor}
          onClick={() => navigate("/profile")} />
      </div>
    </div>
  );
}

export default CustomNavbar;

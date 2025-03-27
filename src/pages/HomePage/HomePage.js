import ASSETS from "../../Assets";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./styles.css";
import { useEffect, useState } from "react";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar.js";
import { Outlet, useNavigate } from "react-router-dom";





function HomePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (!uid) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="baseContainer">
  <div className="NavbarBaseContainer">
        <CustomNavbar />
      </div>
      <div className="ContentBaseContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;

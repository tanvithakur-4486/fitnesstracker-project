import ASSETS from "../../Assets";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./styles.css";
import { useState } from "react";

function HomePage() {
  const [name, setName] = useState("");

  return (
    <div
      className="baseContainer"
      style={{
        backgroundImage: `url(${ASSETS.homePageImage})`,
      }}
    >
      <div className="contentBaseContainer">
        <h1>{name}</h1>
        
      </div>
      <div className="ContentTitleContainer">
        <h1>FITNESS TRACKER</h1>
        <h3>ITS YOUR WORKOUT,</h3>
        <h3>YOUR TIME,</h3>
        <h3>YOUR BODY,</h3>
        <h3>OWN IT.</h3>
      </div>
    </div>
  );
}

export default HomePage;

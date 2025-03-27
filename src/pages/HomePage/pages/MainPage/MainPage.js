// import React, { useState } from "react";
// import CustomButton from "../../../../components/CustomButton/CustomButton.js";
// import ASSETS from "../../../../Assets/index.js";

// import "./styles.css";

// function MainPage() {
//   return (
//     <div
//       className="BaseContainer"
//       style={{
//         backgroundImage: `url(${ASSETS.homePageImage})`,
//       }}
//     >
//       <div className="mainPagecontentBaseContainer">
//         <h1>Invisible illness</h1>
//         <h1>In Plain Sight</h1>
//       </div>
//       <div className="mainPageButtonContainer">
//         <button>Get Started</button>
//       </div>
//     </div>
//   );
// }

// export default MainPage;
import React from "react";
import "./styles.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../components/CustomButton/CustomButton";

const RunningLandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate =() =>{
    navigate("/about us");
  };
  return (
    <div className="container">
         {/* style={{
        backgroundImage: `url(${ASSETS.main})`,
      }} */}
     
      <div className="content">
        <div className="text-section">
          <h2>JUST KEEP</h2>
          <h1>RUNNING</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="buttons" >
          <CustomButton title={"Get Started"} color={"white"} onClick={handleNavigate}
          />
         
          </div>
        </div>
        <div className="image-section">
        <img src={require("../../../../Assets/images/main.jpg")}/>

        </div>
      </div>
    </div>
  );
};

export default RunningLandingPage;
import React from "react";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../components/CustomButton/CustomButton";

const RunningLandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate =() =>{
    navigate("/workoutPage1");
  };
  return (
    <div className="container">
         {/* style={{
        backgroundImage: `url(${ASSETS.main})`,
      }} */}
     
      <div className="content">
        <div className="text-section">
          <h1>Just Keep</h1>
          <h2>Running.</h2>
          
          <p>
           Easily track your Workouts, set Training Plans, and discover new Workout Routines to crush your goals.
          </p>
          <div className="buttonmain">
          <div className="buttons" >
          <CustomButton title={"Start Workout"} color={"white"} onClick={handleNavigate}
          />
         </div>
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
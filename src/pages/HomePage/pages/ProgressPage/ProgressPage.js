import React, { useState} from "react";
import "./styles.css";
import { SlCalender } from "react-icons/sl";
import MyCalendar from "../../pages/ProgressPage/Calender/Calender";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Overview Header */}
      <div className="headermain">
      <div className="header">
        <div className="logo">
        <h1>Overview</h1></div>
        <div className="date-box">
        <h4>{`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}</h4> <SlCalender /></div></div>
        
      </div>

      {/* Dashboard Grid */}
      <div className="grid-container">
        {/* Stats Cards */}
        <div className="card">
           <h2>Heart rate</h2> 
          <p className="stat"></p>
        </div>
        <div className="card">
          <h2>Steps / distance</h2>
          <p className="stat"></p>
        </div>
        <div className="card">
          <h2>Energy burnt</h2>
          <p className="stat"></p>
        </div>
        {/* Monthly Goals */}
        <div className="card">
          <h2>Monthly goals</h2>
          <div className="goals">
          
            <p>Steps <span></span></p>
            <p>Lose weight <span></span></p>
            <p>Workouts <span></span></p>
            <p>Drink Water <span></span></p>
          </div>
        </div>
      </div>

      {/* Activity Chart Placeholder */}
      <div className="card chart-card">
        <h2>My activity</h2>
        <p className="placeholder">[Chart Placeholder]</p>
      </div>

      {/* Training Schedule & Calendar */}
      <div className="grid-container-2">
        <div className="card">
          <h2>Upcoming trainings</h2>
          <ul>
            <li>Cycling</li>
            <li>Swimming</li>
          </ul>
        </div>
        <div className="card">
          / <MyCalendar /> 
        </div>
      </div>
    </div>
  );
};



export default Dashboard;






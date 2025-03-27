import React from "react";
import "./styles.css";
import { SlCalender } from "react-icons/sl";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Overview Header */}
      <div className="header">
        <h1>Overview</h1>
        <div className="date-box">
        <h4>March,26</h4> <SlCalender />
        
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid-container">
        {/* Stats Cards */}
        <div className="card">
          <h2>Heart rate</h2>
          <p className="stat">102 bpm ↑</p>
        </div>
        <div className="card">
          <h2>Steps / distance</h2>
          <p className="stat">2080 / 1.37km</p>
        </div>
        <div className="card">
          <h2>Energy burnt</h2>
          <p className="stat">1249 Cal</p>
        </div>
        {/* Monthly Goals */}
        <div className="card">
          <h2>Monthly goals</h2>
          <div className="goals">
            <p>Steps <span>140 / 240K</span></p>
            <p>Lose weight <span>4 / 5kg</span></p>
            <p>Workouts <span>4 / 8</span></p>
            <p>Drink Water <span>30 / 60L</span></p>
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
            <li>Cycling - 22/6/2022, 5:00 p.m</li>
            <li>Swimming - 23/6/2022, 6:30 p.m</li>
          </ul>
        </div>
        <div className="card">
          <h2>June</h2>
          <p className="placeholder">[Calendar Placeholder]</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





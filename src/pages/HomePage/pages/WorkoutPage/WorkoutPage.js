import React from "react";
import "./styles.css";
import { CiGlass } from "react-icons/ci";
import { IoFitness } from "react-icons/io5";



const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const FitnessTracker = () => {
  return (
    <div className="fitness-container">
      <div className="header">
        <h1 className="title">WEEKLY FITNESS</h1>
      <IoFitness className="titleLogoContainer"
       size={70}
        /></div>
      <div className="info-section">
        <span>MONTH OF:</span> 
        <span>CURRENT WEIGHT:</span>
      </div>
      <table className="fitness-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Daily Steps</th>
            <th>Workout</th>
            <th>Total Calories</th>
            <th>Water</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td className="day-header">{day}</td>
              <td><input type="text" className="input-box" /></td>
              <td><input type="text" className="input-box" /></td>
              <td>
                <label>Breakfast:</label> <input type="text" className="input-box" />
                <label>Lunch:</label> <input type="text" className="input-box" />
                <label>Dinner:</label> <input type="text" className="input-box" />
                <label>Snack:</label> <input type="text" className="input-box" />
              </td>
              <td className="water-icons">
              {[...Array(8)].map((_, index) => (
                <span key={index} className="water-glass"><CiGlass /></span>
              ))}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FitnessTracker;

import React, { useState } from "react";
import "./styles.css";
// import { CiGlass } from "react-icons/ci";
import { IoFitness } from "react-icons/io5";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { ref, set } from "firebase/database";
import { database } from "../../../../firebase";

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
  const [mondayFitness, setMondayFitness] = useState({
    step: 0,
    workout: "",
    calories_breakfast: 0,
    calories_lunch: 0,
    calories_dinner: 0,
    calories_snack: 0,
  });

  const [tuesdayFitness, setTuesdayFitness] = useState({
    step: 0,
    workout: "",
    calories_breakfast: 0,
    calories_lunch: 0,
    calories_dinner: 0,
    calories_snack: 0,
  });
  const [wednesdayFitness, setWednesdayFitness] = useState({
    step: 0,
    workout: "",
    calories_breakfast: 0,
    calories_lunch: 0,
    calories_dinner: 0,
    calories_snack: 0,
  });
  const [thursdayFitness, setThursdayFitness] = useState({
    step: 0,
    workout: "",
    calories_breakfast: 0,
    calories_lunch: 0,
    calories_dinner: 0,
    calories_snack: 0,
  });
  const [fridayFitness, setFridayFitness] = useState({
    step: 0,
    workout: "",
    calories_breakfast: 0,
    calories_lunch: 0,
    calories_dinner: 0,
    calories_snack: 0,
  });
  const [saturdayFitness, setSaturdayFitness] = useState({
    step: 0,
    workout: "",
    calories_breakfast: 0,
    calories_lunch: 0,
    calories_dinner: 0,
    calories_snack: 0,
  });
  const [sundayFitness, setSundayFitness] = useState({
    step: 0,
    workout: "",
    calories_breakfast: 0,
    calories_lunch: 0,
    calories_dinner: 0,
    calories_snack: 0,
  });
  const handleSubmitData = (day) => {
    if (day == "Mon") {
      set(
        ref(
          database,
          `users/${localStorage.getItem(
            "uid"
          )}/workout/${`${new Date().getDate()}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`}/`
        ),
        {monday: mondayFitness}
      );
    } else if (day == "Tue") {
      set(
        ref(
          database,
          `users/${localStorage.getItem(
            "uid"
          )}/workout/${`${new Date().getDate()}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`}/`
        ),
        tuesdayFitness
      );
    } else if (day == "Wed") {
      set(
        ref(
          database,
          `users/${localStorage.getItem(
            "uid"
          )}/workout/${`${new Date().getDate()}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`}/`
        ),
        wednesdayFitness
      );
    } else if (day == "Thur") {
      set(
        ref(
          database,
          `users/${localStorage.getItem(
            "uid"
          )}/workout/${`${new Date().getDate()}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`}/`
        ),
        thursdayFitness
      );
    } else if (day == "Fri") {
      set(
        ref(
          database,
          `users/${localStorage.getItem(
            "uid"
          )}/workout/${`${new Date().getDate()}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`}/`
        ),
        fridayFitness
      );
    } else if (day == "Sat") {
      set(
        ref(
          database,
          `users/${localStorage.getItem(
            "uid"
          )}/workout/${`${new Date().getDate()}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`}/`
        ),
        saturdayFitness
      );
    } else if (day == "Sun") {
      set(
        ref(
          database,
          `users/${localStorage.getItem(
            "uid"
          )}/workout/${`${new Date().getDate()}-${
            new Date().getMonth() + 1
          }-${new Date().getFullYear()}`}/`
        ),
        sundayFitness
      );
    }
  };

  return (
    <div className="fitness-container">
      <div className="header">
        <h1 className="title">WEEKLY FITNESS</h1>
        <IoFitness className="titleLogoContainer" size={70} />
      </div>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="day-header">Monday</td>
            <td>
              <input
                type="text"
                className="input-box"
                value={mondayFitness.step}
                onChange={(e) =>
                  setMondayFitness((prev) => ({
                    ...prev,
                    step: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <input
                type="text"
                className="input-box"
                value={mondayFitness.workout}
                onChange={(e) =>
                  setMondayFitness((prev) => ({
                    ...prev,
                    workout: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <label>Breakfast:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={mondayFitness.calories_breakfast}
                onChange={(e) =>
                  setMondayFitness((prev) => ({
                    ...prev,
                    calories_breakfast: e.target.value,
                  }))
                }
              />
              <label>Lunch:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={mondayFitness.calories_lunch}
                onChange={(e) =>
                  setMondayFitness((prev) => ({
                    ...prev,
                    calories_lunch: e.target.value,
                  }))
                }
              />
              <label>Dinner:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={mondayFitness.calories_dinner}
                onChange={(e) =>
                  setMondayFitness((prev) => ({
                    ...prev,
                    calories_dinner: e.target.value,
                  }))
                }
              />
              <label>Snack:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={mondayFitness.calories_snack}
                onChange={(e) =>
                  setMondayFitness((prev) => ({
                    ...prev,
                    calories_snack: e.target.value,
                  }))
                }
              />
            </td>
            <td className="water-icons">
              <CustomButton title={"Submit"} onClick={() => handleSubmitData("Mon")} />
            </td>
          </tr>
          <tr>
            <td className="day-header">Tuesday</td>
            <td>
              <input
                type="text"
                className="input-box"
                value={tuesdayFitness.step}
                onChange={(e) =>
                  setTuesdayFitness((prev) => ({
                    ...prev,
                    step: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <input
                type="text"
                className="input-box"
                value={tuesdayFitness.workout}
                onChange={(e) =>
                  setTuesdayFitness((prev) => ({
                    ...prev,
                    workout: e.target.value,
                  }))
                }
              />
            </td>
            <td>
              <label>Breakfast:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={tuesdayFitness.calories_breakfast}
                onChange={(e) =>
                  setTuesdayFitness((prev) => ({
                    ...prev,
                    calories_breakfast: e.target.value,
                  }))
                }
              />
              <label>Lunch:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={tuesdayFitness.calories_lunch}
                onChange={(e) =>
                  setTuesdayFitness((prev) => ({
                    ...prev,
                    calories_lunch: e.target.value,
                  }))
                }
              />
              <label>Dinner:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={tuesdayFitness.calories_dinner}
                onChange={(e) =>
                  setTuesdayFitness((prev) => ({
                    ...prev,
                    calories_dinner: e.target.value,
                  }))
                }
              />
              <label>Snack:</label>{" "}
              <input
                type="text"
                className="input-box"
                value={tuesdayFitness.calories_snack}
                onChange={(e) =>
                  setTuesdayFitness((prev) => ({
                    ...prev,
                    calories_snack: e.target.value,
                  }))
                }
              />
            </td>
            <td className="water-icons">
              <CustomButton title={"Submit"} onClick={() => handleSubmitData("Tue")} />
            </td>
          </tr>
          <tr>
            <td className="day-header">Wednesday</td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <label>Breakfast:</label>{" "}
              <input type="text" className="input-box" />
              <label>Lunch:</label> <input type="text" className="input-box" />
              <label>Dinner:</label> <input type="text" className="input-box" />
              <label>Snack:</label> <input type="text" className="input-box" />
            </td>
            <td className="water-icons">
              <CustomButton title={"Submit"} onClick={() =>handleSubmitData("Wed")} />
            </td>
          </tr>
          <tr>
            <td className="day-header">Thursday</td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <label>Breakfast:</label>{" "}
              <input type="text" className="input-box" />
              <label>Lunch:</label> <input type="text" className="input-box" />
              <label>Dinner:</label> <input type="text" className="input-box" />
              <label>Snack:</label> <input type="text" className="input-box" />
            </td>
            <td className="water-icons">
              <CustomButton title={"Submit"} onClick={() =>handleSubmitData("Thur")} />
            </td>
          </tr>
          <tr>
            <td className="day-header">Friday</td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <label>Breakfast:</label>{" "}
              <input type="text" className="input-box" />
              <label>Lunch:</label> <input type="text" className="input-box" />
              <label>Dinner:</label> <input type="text" className="input-box" />
              <label>Snack:</label> <input type="text" className="input-box" />
            </td>
            <td className="water-icons">
              <CustomButton title={"Submit"} onClick={() =>handleSubmitData("Fri")} />
            </td>
          </tr>
          <tr>
            <td className="day-header">Saturday</td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <label>Breakfast:</label>{" "}
              <input type="text" className="input-box" />
              <label>Lunch:</label> <input type="text" className="input-box" />
              <label>Dinner:</label> <input type="text" className="input-box" />
              <label>Snack:</label> <input type="text" className="input-box" />
            </td>
            <td className="water-icons">
              <CustomButton title={"Submit"} onClick={() =>handleSubmitData("Sat")} />
            </td>
          </tr>
          <tr>
            <td className="day-header">Sunday</td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <input type="text" className="input-box" />
            </td>
            <td>
              <label>Breakfast:</label>{" "}
              <input type="text" className="input-box" />
              <label>Lunch:</label> <input type="text" className="input-box" />
              <label>Dinner:</label> <input type="text" className="input-box" />
              <label>Snack:</label> <input type="text" className="input-box" />
            </td>
            <td className="water-icons">
              <CustomButton title={"Submit"} onClick={() =>handleSubmitData("Sun")} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FitnessTracker;

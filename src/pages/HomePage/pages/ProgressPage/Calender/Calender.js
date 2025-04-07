import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { SlCalender } from "react-icons/sl";
import { getDatabase,ref,set, push } from "firebase/database";
import { WiNightStormShowers } from "react-icons/wi";
import { address } from "framer-motion/client";

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">React Calendar</h2>
      <Calendar onChange={setDate} value={date} className="<SlCalender" minDate={new Date()}/>
      <p className="selected-date">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
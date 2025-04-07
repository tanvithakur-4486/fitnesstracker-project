import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Graph.css";
import { GoGraph } from "react-icons/go";
import { getDatabase,ref,set } from "firebase/database";

const data = [
  { day: "Mon", steps: 5000 },
  { day: "Tue", steps: 7000 },
  { day: "Wed", steps: 6500 },
  { day: "Thu", steps: 8000 },
  { day: "Fri", steps: 9000 },
  { day: "Sat", steps: 12000 },
  { day: "Sun", steps: 11000 },
];

const FitnessTrackerGraph = () => {

  return (
    <div className="fitness-container">
      <h2 className="fitness-title">Weekly Steps Count</h2>
      <GoGraph />
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="steps"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FitnessTrackerGraph;

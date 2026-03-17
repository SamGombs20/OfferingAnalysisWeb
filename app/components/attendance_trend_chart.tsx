"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { weeklySummary } from "../data/data";
const AttendanceChart = () => {
  return (
    <div className="mt-10">
      <LineChart
        style={{
          width: "100%",
          maxWidth: "800px",
          maxHeight: "80vh",
          aspectRatio: 1.618,
        }}
        responsive
        margin={{
          top: 0,
          right: 10,
          bottom: 0,
          left: 0,
        }}
        data={weeklySummary}
      >
        <Line
          dataKey="attendance"
          type="monotone"
          stroke="#0051ff"
          strokeWidth={2}
          name="Church attendance"
        />
        <XAxis
          stroke="#000000"
          dataKey="date"
          label={{ value: "Date", position: "bottom" }}
        />
        <YAxis
          stroke="#000000"
          width="auto"
          label={{ value: "No. of People", position: "insideLeft", angle: -90 }}
        />
        <Tooltip />
        <Legend
          width={200}
          wrapperStyle={{
            top: -20,
            right: -20,
          }}
        />
      </LineChart>
    </div>
  );
};
export default AttendanceChart;

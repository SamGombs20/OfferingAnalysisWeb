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
    <LineChart
      style={{
        width: "600px",
        //   maxWidth: "1000px",
        height: "400px",
        aspectRatio: 1.618,
      }}
      responsive={true}
      margin={{
        top: 0,
        right: 10,
        bottom: 0,
        left: 0,
      }}
      data={weeklySummary}
    >
      <CartesianGrid strokeDasharray="3 4" stroke="#f3f4f6" />
      <Line
        dataKey="attendance"
        type="monotone"
        stroke="#ff8c00"
        strokeWidth={2.5}
        dot={false}
        activeDot={{ r: 7, strokeWidth: 3, stroke: "#fff" }}
        name="Church attendance"
      />
      <XAxis
        stroke="#000000"
        dataKey="date"
        tickFormatter={(v) => v.slice(5)}
        label={{ value: "Date", position: "bottom" }}
      />
      <YAxis
        stroke="#000000"
        width="auto"
        label={{ value: "No. of People", position: "insideLeft", angle: -90 }}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "10px 14px",
        }}
      />
      <Legend
        width={200}
        wrapperStyle={{
          top: -20,
          right: -20,
        }}
      />
    </LineChart>
  );
};
export default AttendanceChart;

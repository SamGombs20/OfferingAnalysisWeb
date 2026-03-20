import { Pie, PieChart, Tooltip } from "recharts";
import { attendanceRatio } from "../data/data";

const AttendancePieChart = () => {
  return (
    <PieChart
      style={{
        width: "100%",
        aspectRatio: 1,
        height: "100%",
        maxWidth: "600px",
        maxHeight: "400px",
      }}
      responsive
    >
      <Pie
        data={attendanceRatio}
        dataKey="number"
        outerRadius="70%"
        cx="50%"
        cy="50%"
        fill="#0051ff"
        isAnimationActive={true}
      />
      <Tooltip
        contentStyle={{
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          padding: "10px 14px",
        }}
        cursor={{ fill: "rgba(0, 81, 255, 0.08)" }}
      />
    </PieChart>
  );
};
export default AttendancePieChart;

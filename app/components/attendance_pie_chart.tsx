import { Pie, PieChart } from "recharts";
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
        outerRadius="50%"
        cx="50%"
        cy="50%"
        fill="#0051ff"
        isAnimationActive={true}
      />
    </PieChart>
  );
};
export default AttendancePieChart;

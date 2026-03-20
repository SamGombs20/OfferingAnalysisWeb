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
    >
      <Pie data={attendanceRatio} dataKey='value' />
    </PieChart>
  );
};
export default AttendancePieChart;

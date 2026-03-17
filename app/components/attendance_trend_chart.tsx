
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
          height:'400px',
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
        <CartesianGrid strokeDasharray="3 4" stroke="#f3f4f6" vertical={false} />
        <Line
          dataKey="attendance"
          type="monotone"
          stroke="#0051ff"
          strokeWidth={2.5}
          dot={false}
          activeDot={{r: 7, strokeWidth: 3, stroke: '#fff' }}
          name="Church attendance"
        />
        <XAxis
          stroke="#000000"
          dataKey="date"
          tickFormatter={(v)=>v.slice(5)}
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

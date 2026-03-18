import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { weeklySummary } from "../data/data";

const OfferingsChart = () => {
  return (
    <BarChart
      style={{
        width: "600px",
        height: "60vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={weeklySummary}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis dataKey="date" tickFormatter={(v) => v.slice(5)} />
      <YAxis width="auto" />
      <Bar dataKey='offerings' fill="#c10007" radius={[10,10,0,0]}/>
    </BarChart>
  );
};
export default OfferingsChart;

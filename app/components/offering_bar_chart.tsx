import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
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
      <XAxis
        dataKey="date"
        label={{ value: "Date", position: "bottom" }}
        tickFormatter={(v) => v.slice(5)}
      />
      <YAxis
        width="auto"
        label={{ value: "Total", position: "insideLeft", angle: -90 }}
      />
      <Bar
        dataKey="offerings"
        name="Offerings Collection"
        fill="#0051ff"
        radius={[10, 10, 0, 0]}
      />
      <Tooltip />
      <Legend
       width={200}
        wrapperStyle={{
          top: -20,
          right: -50,
        }}
      />
    </BarChart>
  );
};
export default OfferingsChart;

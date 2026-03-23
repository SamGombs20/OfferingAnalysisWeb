import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { weeklySummary } from "../data/data";

const OfferingsChart = () => {
  return (
    <BarChart
      style={{
        width: "500px",
        height: "400px",
        aspectRatio: 1.618,
      }}
      responsive
      data={weeklySummary}
      
    >
      <CartesianGrid strokeDasharray="3 4" stroke="#f3f4f6" />
      <XAxis
        dataKey="date"
        stroke="black"
        label={{ value: "Date", position: "bottom" }}
        tickFormatter={(v) => v.slice(5)}
      />
      <YAxis
        width="auto"
        tickFormatter={(v)=>v.toLocaleString()}
        stroke="black"
        label={{ value: "Total (Ksh.)", position: "insideLeft", angle: -90 }}
      />
      <Bar
        dataKey="offerings"
        name="Offerings Collection"
        fill="#0051ff"
        activeBar={{fill:'#ff8c00'}}
        radius={[10, 10, 0, 0]}
      />
     <Tooltip
        formatter={(value) => [`KSh ${value?.toLocaleString()}`, 'Offerings']}
        labelFormatter={(label) => `Week of ${label}`}
        contentStyle={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          padding: '10px 14px',
        }}
        cursor={{ fill: 'rgba(0, 81, 255, 0.08)' }} // subtle highlight
      />
      <Legend
        verticalAlign="top"
        align="right"
        wrapperStyle={{ fontSize: 14, paddingBottom: 8 }}
        iconType="circle"
      />
    </BarChart>
  );
};
export default OfferingsChart;

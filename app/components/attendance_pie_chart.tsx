import { Pie, PieChart, PieLabelRenderProps, PieSectorShapeProps, Sector, Tooltip } from "recharts";
import { attendanceRatio } from "../data/data";

const RADIAN = Math.PI/180;

const COLORS = ['#0051ff', '#ff8c00']

const renderCustomizedLabel =({cx,cy,midAngle, innerRadius, outerRadius, percent}:PieLabelRenderProps)=>{
  if(cx==null||cy==null||midAngle==null||innerRadius==null||outerRadius==null){
    return null;
  }
  const radius = innerRadius+(outerRadius-innerRadius)*0.5

  const ncx = Number(cx)
  const x = ncx +radius * Math.cos(-(midAngle??0)*RADIAN)
  const ncy = Number(cy)
  const y = ncy +radius * Math.sin(-(midAngle?? 0)* RADIAN)
  return (
    <text x={x} y ={y} fill="white" textAnchor={x>ncx?'start':'end'} dominantBaseline="central">
      {`${((percent??1)*100).toFixed(0)}%`}
    </text>
  )
}

const MyCustomPie =(props:PieSectorShapeProps)=>{
  return <Sector {...props} fill={COLORS[props.index %COLORS.length]}/>
}

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
        fill="#0051ff"
        labelLine={false}
        label={renderCustomizedLabel}
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

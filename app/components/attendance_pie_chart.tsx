import { Legend, Pie, PieChart, PieLabelRenderProps, PieSectorShapeProps, Sector, Tooltip } from "recharts";
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
        cx='50%'
        cy='50%'
        dataKey="number"
        nameKey='name'
        labelLine={false}
        label={renderCustomizedLabel}
        isAnimationActive={true}
        shape={MyCustomPie}
      />
      <Legend/>
    </PieChart>
  );
};
export default AttendancePieChart;

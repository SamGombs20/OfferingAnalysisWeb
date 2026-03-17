'use client'
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts'
import { weeklySummary } from '../data/data';
const AttendanceChart =()=>{
    return (
        <LineChart
        style={{width:'100%',maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618}}
        responsive
        margin={{
            top:20,
            right:20,
            bottom:5,
            left:0
        }}
        data={weeklySummary}>
            
            <Line dataKey='attendance' stroke='#0051ff'/>
            <XAxis dataKey='date'/>
            <YAxis/>
        </LineChart>
    );
}
export default AttendanceChart;
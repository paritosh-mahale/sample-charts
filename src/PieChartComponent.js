import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

 
const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const PieChartComponent =() => {
   
   
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
           
           <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> 
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
   
}

export default PieChartComponent;
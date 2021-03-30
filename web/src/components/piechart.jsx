import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Exercise', value: 400 },
  { name: 'Sleep', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];


export const ChartX = () => {
    return (
        <PieChart width={600} height={600}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="600px"
            cy="600px"
            outerRadius={80}
            fill="#2C4E81"
            label
          />
        </PieChart>
    );
}



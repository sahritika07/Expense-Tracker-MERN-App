import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({data,label,totalAmount,colors,showTextAnchor}) => {
  if (!data || data.length === 0) {
    return <div className="text-center p-4 text-gray-500">No data available</div>;
  }
  return <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
  data={data}
  dataKey="amount"
  nameKey="name"
  cx="50%"
  cy="50%"
  outerRadius={130}
  innerRadius={100}
  labelLine={false}
  label={({ cx, cy }) => {
    return showTextAnchor ? (
      <>
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          fill="#666"
          fontSize={14}
          fontWeight={500}
        >
          {label}
        </text>
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          fill="#333"
          fontSize={20}
          fontWeight={600}
        >
          {totalAmount}
        </text>
      </>
    ) : null;
  }}
>
  {data.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
  ))}
</Pie>

        <Tooltip content={CustomTooltip} />
        <Legend content = {CustomLegend}/>
        {showTextAnchor && (
          <>
            <text
              x="50%"
              y="50%"
              dy={-25}
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
            >
              {label}
            </text>
            
            <text
              x="50%"
              y="50%"
              dy={8}
              textAnchor="middle"
              fill="#333"
              fontSize="16px"
              fontWeight="semi-bold"
            >
              {totalAmount}
            </text>
          </>
        )}

      </PieChart>

    </ResponsiveContainer>
  
}

export default CustomPieChart

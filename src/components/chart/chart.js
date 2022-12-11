import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip
} from "recharts";

const Chart = ({
                 data = [],
                 width = 600,
                 height = 400,
                 margin = {},
               }) => {

  return (
    <>
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={margin}
      >
        <CartesianGrid strokeDasharray={'3 3'}/>
        <XAxis dataKey={"name"}/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey={'rate'} fill={'#B0C4DE'}/>
      </BarChart>
    </>
  );
};

export default Chart;

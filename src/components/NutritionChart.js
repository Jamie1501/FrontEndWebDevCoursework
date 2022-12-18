import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

const BarChart = ({ data }) => {
//bar chart will be displayed using these data points
//tested the pie chart as well but the bar chart made more sense and both would be too cluttered
  return (<>
    <Bar
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Nutritional Data ",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      }}
    />
    </>
  );
};
export default BarChart;
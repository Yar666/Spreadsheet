import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./Charts.css";

export const BarChart_Income = () => {
  const options = {
    chart: {
      type: "column",
      spacingBottom: 0,
      marginBottom: 55,
      // backgroundColor: "#2f68ff",
    },
    title: {
      text: "Income Sources",
    },
    xAxis: {
      categories: ["A", "B", "C", "D", "E"],
    },
    yAxis: {
      title: {
        text: "Amount",
      },
      labels: {
        rotation: 0, // Установите угол наклона в 0 градусов
        staggerLines: 1, // Отключите разбивку длинных названий на несколько строк
      },
    },
    series: [
      {
        name: "Income",
        data: [
          { y: 100, color: "#FF5733" },
          { y: 15, color: "#007ACC" },
          { y: 8, color: "#66BB6A" },
          { y: 12, color: "#FFC107" },
          { y: 7, color: "#9E9E9E" },
        ],
      },
    ],
    colors: ["#2f68ff"],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export const BarChart_Expenses = () => {
  const options = {
    chart: {
      type: "column",
      spacingBottom: 0,
      marginBottom: 55,
      // backgroundColor: "#2f68ff",
    },
    title: {
      text: "Expenses Sources",
    },
    xAxis: {
      categories: ["Othet", "Health", "Transportation", "Entertainment"],
      labels: {
        rotation: 0, // Установите угол наклона в 0 градусов
        staggerLines: 1, // Отключите разбивку длинных названий на несколько строк
      },
    },
    yAxis: {
      title: {
        text: "Amount",
      },
    },
    series: [
      {
        name: "Expenses",
        data: [
          { y: 100, color: "#FF5733" },
          { y: 15, color: "#007ACC" },
          { y: 8, color: "#66BB6A" },
          { y: 12, color: "#FFC107" },
        ],
      },
    ],
    colors: ["#2f68ff"],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export const LineChar_Statistic = () => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    yAxis: {
      title: {
        text: "Amount",
      },
    },
    plotOptions: {
      line: {
        connectNulls: true, // Включаем автодорисовку линий между точками с null значениями
      },
    },
    series: [
      {
        name: "Income",
        data: [1000, 1200, 1500, 1300, 1600, 1800, null, 100, null, 9000],
      },
      {
        name: "Expenses",
        data: [800, 1000, 900, 1100, 950, 1200],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

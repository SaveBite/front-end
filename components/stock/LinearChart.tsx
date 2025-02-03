"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: customXlabelColor as any,
      },
    },
  },
  datasets: {
    line: {
      borderWidth: 3,
    },
  },
  plugins: {
    tooltip: {
      backgroundColor: tooltipColoring as any,
      displayColors: false,
      yAlign: "bottom" as const,
      caretPadding: 10,
    },
    legend: {
      position: "top" as const,
    },

    title: {
      display: true,
      text: "My stock",
    },
  },
};
function tooltipColoring(tooltipItem: any) {
  console.log(tooltipItem.tooltip.labelColors[0].borderColor);
  return tooltipItem.tooltip.labelColors[0].borderColor;
}
function customXlabelColor(context: any) {
  if (context.index <= 5) {
    return "gray";
  } else {
    return "green";
  }
}
// dummy data
const labels = [
  "Week1",
  "Week2",
  "Week3",
  "Week4",
  "Week5",
  "Week6",
  "Week7",
  "Week8",
  "Week9",
  "Week10",
];
const datasets1 = [15, 36, 22, 15, 23, 45, 22, 33, 34, 56, 43, 67, 23, 51];
const datasets2 = [65, 33, 23, 17, 40, 22, 44, 23, 23, 45, 34, 83, 25, 14];
const datasets3 = [11, 54, 24, 43, 24, 54, 35, 23, 14, 46, 25, 16, 52, 46];
const datasets4 = [63, 25, 26, 31, 12, 25, 32, 55, 25, 35, 74, 32, 53, 42];

export const data = {
  labels,
  datasets: [
    {
      label: "Milk",
      data: datasets1.map((i) => i),
      borderColor: "#CCDF92",
      backgroundColor: "#CCDF92",
    },
    {
      label: "Cheese",
      data: datasets2.map((i) => i),
      borderColor: "#FF9D23",
      backgroundColor: "#FF9D23",
    },
    {
      label: "yougret",
      data: datasets3.map((i) => i),
      borderColor: "#E195AB",
      backgroundColor: "#E195AB",
    },
    {
      label: "beanuts",
      data: datasets4.map((i) => i),
      borderColor: "#DE3163",
      backgroundColor: "#DE3163",
    },
  ],
};

function LinearChart() {
  return (
    <div className="mx-auto w-fit">
      <Line data={data} options={options} width={1000} height={350} />
    </div>
  );
}

export default LinearChart;

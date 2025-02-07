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
import { useStockFilters } from "@/contexts/StockFilters";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function tooltipColoring(tooltipItem: any) {
  console.log(tooltipItem.tooltip.labelColors[0].borderColor);
  return tooltipItem.tooltip.labelColors[0].borderColor;
}
function customXlabelColor(context: any) {
  if (context.index <= 5) {
    return "gray";
  } else {
    return "#5EDA42";
  }
}
const options = {
  responsive: true, // Prevent automatic resizing
  maintainAspectRatio: true, // Allow custom width/height
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
  },
};
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
const datasets = [
  [12, 45, 78, 34, 56, 89, 23, 67, 90, 11, 42, 37, 88, 59],
  [98, 23, 45, 67, 12, 34, 89, 54, 76, 32, 21, 65, 87, 49],
  [43, 67, 23, 89, 12, 76, 45, 98, 32, 56, 78, 90, 21, 34],
  [63, 25, 26, 31, 12, 25, 32, 55, 25, 35, 74, 32, 53, 42],
  [21, 34, 56, 78, 90, 23, 45, 67, 12, 89, 32, 76, 54, 43],
  [32, 56, 78, 90, 21, 12, 45, 67, 89, 34, 23, 76, 98, 43],
  [54, 32, 12, 89, 23, 76, 90, 45, 67, 34, 56, 21, 98, 43],
  [78, 21, 12, 34, 89, 67, 90, 45, 23, 56, 32, 76, 98, 43],
  [23, 76, 54, 89, 12, 90, 45, 32, 56, 21, 34, 67, 98, 43],
  [90, 21, 12, 34, 67, 98, 45, 23, 56, 32, 76, 54, 89, 43],
];
const colors = [
  "#CCDF92", // Soft green
  "#FF9D23", // Warm orange
  "#E195AB", // Gentle pink
  "#DE3163", // Vibrant red
  "#6AB3A3", // Muted teal
  "#4B89DC", // Calm blue
  "#F4D35E", // Bright yellow
  "#9C6ADE", // Elegant purple
  "#52C3A7", // Fresh mint
  "#EF476F", // Bold coral
];
function LinearChart() {
  const { chartProductsList } = useStockFilters()!;
  const data = {
    labels,
    datasets: chartProductsList.map((item, i) => {
      return {
        label: item,
        data: datasets[i].map((i) => i),
        borderColor: i > 10 ? colors[10] : colors[i],
        backgroundColor: i > 10 ? colors[10] : colors[i],
      };
    }),
  };
  return (
    <Line
      data={data}
      options={options}
      className="mx-auto w-[100%] max-h-[300px]"
    />
  );
}

export default LinearChart;

import logo from "./logo.svg";
import "./App.css";
import HorizontalBarChart from "./component/HorizontalBarChart";
import VerticalBarChart from "./component/VerticalBarChart";
import StackBarChart from "./stacked-bar-chart";

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
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
    {
      label: "TR7",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(24, 245, 113)",
      backgroundColor: "rgba(24, 245, 113, 0.5)",
      yAxisID: "y1",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>TR7 Coinglass Indicators</div>
        <div>Configuration</div>
      </header>
      <body className="grid-container">
        <div>
          <div>Line Chart</div>
          <div>
            <Line className="" options={options} data={data} />
          </div>
        </div>
        <div>
          <div>Stacked Bar Chart</div>
          <div>
            <StackBarChart className="" />
          </div>
        </div>
        <div>
          <div>Vertical Bar Chart</div>
          <div>
            <VerticalBarChart className="" />
          </div>
        </div>
        <div>
          <div>Horizontal Bar Chart</div>
          <div>
            <HorizontalBarChart className="" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

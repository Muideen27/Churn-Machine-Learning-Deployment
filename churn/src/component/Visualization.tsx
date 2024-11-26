import React from 'react';
import { Bar, Scatter, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

interface VisualizationProps {
  visualizationType: string;
  data: any;
  selectedFeatures: string[];
}

const Visualization: React.FC<VisualizationProps> = ({ visualizationType, data, selectedFeatures }) => {
    console.log("Data passed to Visualization Component:", data);
    console.log("Visualization Type passed to Visualization Component:", visualizationType);
  if (!data || !visualizationType) {
    return <div>No data or visualization type provided.</div>;
  }

  // Prepare Chart.js data format dynamically
  let chartData;
  let chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  switch (visualizationType) {
    case 'Bar Chart':
      chartData = {
        labels: data.map((_, index: number) => `Index ${index + 1}`), // Labels as Index
        datasets: [
          {
            label: selectedFeatures[0],
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      return <Bar data={chartData} options={chartOptions} />;

    case 'Scatter Plot':
      chartData = {
        datasets: [
          {
            label: `${selectedFeatures[0]} vs ${selectedFeatures[1]}`,
            data: data.map((point: { [key: string]: number }) => ({
              x: point[selectedFeatures[0]],
              y: point[selectedFeatures[1]],
            })),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      };
      return <Scatter data={chartData} options={chartOptions} />;

    case 'Line Graph':
      chartData = {
        labels: data.map((_, index: number) => `Index ${index + 1}`), // Labels as Index
        datasets: [
          {
            label: selectedFeatures[0],
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      return <Line data={chartData} options={chartOptions} />;

    case 'Pie Chart':
      chartData = {
        labels: data.map((_, index: number) => `Category ${index + 1}`), // Example labels
        datasets: [
          {
            label: selectedFeatures[0],
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
          },
        ],
      };
      return <Pie data={chartData} options={chartOptions} />;

    default:
      return <div>Unsupported visualization type.</div>;
  }
};

export default Visualization;

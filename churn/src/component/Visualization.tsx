import React from 'react';
import { Bar, Scatter, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

interface VisualizationProps {
  visualizationType: string;
  data: any[];
  selectedFeatures: string[];
}

const Visualization: React.FC<VisualizationProps> = ({ visualizationType, data, selectedFeatures }) => {
  console.log("Data passed to Visualization Component:", data);
  console.log("Visualization Type passed to Visualization Component:", visualizationType);

  if (!data || !visualizationType) {
    return <div>No data or visualization type provided.</div>;
  }

  let chartData;
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Handle boolean data
  const preprocessBooleanData = (data: boolean[]): { labels: string[]; counts: number[] } => {
    const labels = ["False", "True"];
    const counts = [data.filter((value) => !value).length, data.filter((value) => value).length];
    return { labels, counts };
  };

  // Handle text (categorical) data
  const preprocessTextData = (data: string[]): { labels: string[]; counts: number[] } => {
    const counts = data.reduce((acc: Record<string, number>, value: string) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
    const labels = Object.keys(counts);
    const numericData = Object.values(counts);
    return { labels, counts: numericData };
  };

  switch (visualizationType) {
    case 'Bar Chart':
      // Check data type to preprocess boolean or text data
      if (typeof data[0] === 'boolean') {
        const { labels, counts } = preprocessBooleanData(data as boolean[]);
        chartData = {
          labels,
          datasets: [
            {
              label: selectedFeatures[0],
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
      } else if (typeof data[0] === 'string') {
        const { labels, counts } = preprocessTextData(data as string[]);
        chartData = {
          labels,
          datasets: [
            {
              label: selectedFeatures[0],
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
      } else {
        // Default numeric data handling
        chartData = {
          labels: data.map((_, index: number) => `Index ${index + 1}`),
          datasets: [
            {
              label: selectedFeatures[0],
              data: data.map((value: any) => parseFloat(value) || 0),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        };
      }
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
        labels: data.map((_, index: number) => `Index ${index + 1}`),
        datasets: [
          {
            label: selectedFeatures[0],
            data: data.map((value: any) => parseFloat(value) || 0),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      return <Line data={chartData} options={chartOptions} />;

    case 'Pie Chart':
      // Handle boolean or text data for pie chart
      if (typeof data[0] === 'boolean') {
        const { labels, counts } = preprocessBooleanData(data as boolean[]);
        chartData = {
          labels,
          datasets: [
            {
              label: selectedFeatures[0],
              data: counts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ],
            },
          ],
        };
      } else if (typeof data[0] === 'string') {
        const { labels, counts } = preprocessTextData(data as string[]);
        chartData = {
          labels,
          datasets: [
            {
              label: selectedFeatures[0],
              data: counts,
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
      } else {
        chartData = {
          labels: data.map((_, index: number) => `Category ${index + 1}`),
          datasets: [
            {
              label: selectedFeatures[0],
              data: data.map((value: any) => parseFloat(value) || 0),
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
      }
      return <Pie data={chartData} options={chartOptions} />;

    default:
      return <div>Unsupported visualization type.</div>;
  }
};

export default Visualization;
